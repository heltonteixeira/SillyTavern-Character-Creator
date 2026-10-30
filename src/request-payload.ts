import { Message } from 'sillytavern-utils-lib';
import { Connection } from './connection.js';

/**
 * Message fields that providers accept. CREC's own fields (`id`, `stateSnapshot`, `isStateUpdate`, ...) stay in the
 * session: strict APIs like Claude reject any other field ("Extra inputs are not permitted").
 */
const MESSAGE_FIELDS = ['role', 'content', 'name', 'tool_calls', 'tool_call_id'];

/**
 * Copies messages with only the fields providers accept.
 * @param mainApi `openai` (Chat Completion) or `textgenerationwebui`, which also reads `ignoreInstruct`
 */
export function toRequestMessages(messages: Message[], mainApi: string): Message[] {
  const fields = mainApi === 'openai' ? MESSAGE_FIELDS : [...MESSAGE_FIELDS, 'ignoreInstruct'];
  return messages.map(
    (message) =>
      Object.fromEntries(
        Object.entries(message).filter(([key, value]) => fields.includes(key) && value !== undefined),
      ) as Message,
  );
}

/** Fields ST fills from the profile's `api-url`, as in ConnectionManagerRequestService. */
const API_URL_FIELDS = [
  'custom_url',
  'vertexai_region',
  'zai_endpoint',
  'siliconflow_endpoint',
  'minimax_endpoint',
  'pollinations_endpoint',
];

/**
 * Builds the generation settings (samplers, reasoning effort, etc.) of a Chat Completion profile's preset for the
 * profile's API. Only settings are taken from the preset: the messages are CREC's own, so the preset's prompts are
 * never sent.
 *
 * ST applies the profile's preset with the API stored in the preset (e.g. `openai` in "Default"), not the profile's.
 * Provider-specific settings are then read for the wrong provider and some are dropped: with a Claude profile, the
 * preset's reasoning effort never reaches Claude. This builds the same payload ST would build for a preset saved with
 * the profile's API: all the preset's settings, read for the profile's provider.
 *
 * ST also adds the current custom stopping strings, whichever profile is used. They are left out: chat stop strings
 * like `\n{{user}}:` would cut off greetings and descriptions, which often mention the user.
 *
 * @returns The payload to send with `includePreset: false`, or undefined when the profile has no preset (ST then sends
 * no preset settings and no stop strings) or ST lacks the functions this needs.
 */
export async function buildPresetPayload(
  context: any,
  connection: Connection,
  messages: Message[],
  maxTokens: number,
): Promise<Record<string, any> | undefined> {
  const { profile, preset, source } = connection;
  const service = context.ChatCompletionService;
  if (connection.mainApi !== 'openai' || !preset || typeof service?.presetToGeneratePayload !== 'function') {
    return undefined;
  }

  // The same request data ConnectionManagerRequestService passes to ST, except the proxy (see below).
  const requestData = service.createRequestData({
    stream: false,
    messages,
    max_tokens: maxTokens,
    model: profile.model,
    chat_completion_source: source,
    secret_id: profile['secret-id'],
    custom_prompt_post_processing: profile['prompt-post-processing'],
    ...Object.fromEntries(API_URL_FIELDS.map((field) => [field, profile['api-url']])),
  });
  const payload = await service.presetToGeneratePayload(preset, { chat_completion_source: source }, requestData);

  // ST sets the profile's proxy itself. Without these, the preset's or current proxy would replace it.
  if (profile.proxy) {
    delete payload.reverse_proxy;
    delete payload.proxy_password;
  }
  delete payload.stop;
  return payload;
}

/**
 * Removes a leading reasoning block written with the profile's reasoning template (Reasoning Formatting in ST), as ST
 * does for chat messages. Text without one is returned unchanged.
 */
export function stripProfileReasoning(context: any, profile: any, text: string): string {
  const name = profile?.['reasoning-template'];
  if (
    !name ||
    typeof text !== 'string' ||
    typeof context.getReasoningTemplateByName !== 'function' ||
    typeof context.parseReasoningFromString !== 'function'
  ) {
    return text;
  }
  let template;
  try {
    template = context.getReasoningTemplateByName(name);
  } catch {
    // The template was deleted or renamed
    return text;
  }
  // Null when the template has no prefix or suffix (e.g. "Blank")
  const parsed = context.parseReasoningFromString(text, { strict: true }, template);
  return typeof parsed?.content === 'string' ? parsed.content : text;
}

/**
 * Errors ST reports without the provider's reason. ST keeps the reason in its server console, which users of a hosted
 * SillyTavern can't read. Claude's non-streamed errors and all Text Completion errors reach CREC as "Response not OK".
 */
const GENERIC_ERRORS = /^(Response not OK|Got response status (\d+)|API request failed|Unknown error occurred)$/i;

/**
 * HTTP status texts. For OpenAI-compatible sources (OpenAI, OpenRouter, Custom, Z.ai, ...), ST passes on only the
 * status text of a failed request.
 */
const STATUS_TEXTS: Record<number, string> = {
  400: 'Bad Request',
  401: 'Unauthorized',
  402: 'Payment Required',
  403: 'Forbidden',
  404: 'Not Found',
  408: 'Request Timeout',
  413: 'Payload Too Large',
  422: 'Unprocessable Entity',
  429: 'Too Many Requests',
  500: 'Internal Server Error',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
};

/** What the request sent, for hints when ST gives no reason. */
export interface RequestDetails {
  maxTokens?: number;
  /** `openai` (Chat Completion) or `textgenerationwebui` */
  mainApi?: string;
}

/** The status of a reasonless error, or undefined when the reason is a real one. */
function readGenericStatus(reason: string): number | null | undefined {
  const match = reason.match(GENERIC_ERRORS);
  if (match) {
    return match[2] ? Number(match[2]) : null;
  }
  const status = Object.entries(STATUS_TEXTS).find(([, text]) => text.toLowerCase() === reason.toLowerCase())?.[0];
  return status ? Number(status) : undefined;
}

/** What to check in the UI for a failed request without a reason. */
function statusHint(status: number | null, { maxTokens, mainApi }: RequestDetails): string {
  const tokens = maxTokens ? `Max Response Tokens (${maxTokens})` : 'Max Response Tokens';
  const textCompletion = mainApi !== undefined && mainApi !== 'openai';
  switch (status) {
    case 400:
    case 413:
    case 422:
      return `Check that ${tokens} is within the model's output limit, then the profile's model and its preset's settings.`;
    case 401:
    case 403:
      return "Check the API key of the profile's connection.";
    case 402:
      return "Check the account's credits or billing.";
    case 404:
      return "Check the profile's model and API URL.";
    case 408:
    case 504:
      return 'The provider took too long to answer. Try again later.';
    case 429:
      return "Rate limit or quota reached. Wait and try again, or check the account's quota.";
  }
  if (status && status >= 500) {
    return 'The provider had a problem. Try again later.';
  }
  return textCompletion
    ? `Check that the server is running, its model is loaded, and ${tokens} is within its limit.`
    : `Check that ${tokens} is within the model's output limit, the profile's model exists and its API key is valid.`;
}

/** Explains a request that failed without a reason, with what to check in the UI. */
function genericErrorMessage(status: number | null, details: RequestDetails): string {
  const what = status ? `${STATUS_TEXTS[status] ?? 'The request failed'} (HTTP ${status})` : 'The request failed';
  return (
    `${what}. ${statusHint(status, details)} ` +
    "SillyTavern didn't pass on the provider's reason; it's in the SillyTavern server console."
  );
}

/**
 * A request that the provider or ST rejected, as opposed to a response that couldn't be used.
 * @param details What the request sent, named in the message when ST gives no reason
 */
export class RequestError extends Error {
  constructor(profile: any, error: any, details: RequestDetails = {}) {
    // ST wraps request errors as "API request failed" with the provider's error as the cause.
    const cause = error?.message === 'API request failed' && error?.cause ? error.cause : error;
    const reason = cause?.message || String(cause);
    const status = readGenericStatus(reason.trim());
    const message = status === undefined ? reason : genericErrorMessage(status, details);
    const target = profile?.model ? `${profile?.name} (${profile.model})` : profile?.name;
    super(`${target ? `${target}: ` : ''}${message}`, { cause: error });
    this.name = 'RequestError';
  }
}
