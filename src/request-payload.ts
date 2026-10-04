import { Message } from 'sillytavern-utils-lib';

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
 * Builds the generation settings of a Chat Completion profile's preset for the profile's API.
 *
 * ST applies the profile's preset with the API stored in the preset (e.g. `openai` in "Default"), not the profile's.
 * Provider-specific settings are then read for the wrong provider and some are dropped: with a Claude profile, the
 * preset's reasoning effort never reaches Claude. This builds the same payload ST would build for a preset saved with
 * the profile's API: all the preset's settings, read for the profile's provider.
 *
 * @returns The payload to send with `includePreset: false`, or undefined when ST's own handling is already right
 * (no preset, or the preset's API matches) or ST lacks the functions this needs.
 */
export async function buildPresetPayload(
  context: any,
  profile: any,
  source: string,
  messages: Message[],
  maxTokens: number,
): Promise<Record<string, any> | undefined> {
  const service = context.ChatCompletionService;
  if (!profile.preset || typeof service?.presetToGeneratePayload !== 'function') {
    return undefined;
  }
  const preset = context.getPresetManager?.('openai')?.getCompletionPresetByName(profile.preset);
  if (!preset || preset.chat_completion_source === source) {
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
  return payload;
}

/** Errors ST reports without the provider's reason. ST keeps the reason in its server console. */
const GENERIC_ERRORS = /^(Response not OK|Got response status \d+|API request failed)$/i;

/**
 * A request that the provider or ST rejected, as opposed to a response that couldn't be used.
 */
export class RequestError extends Error {
  constructor(profile: any, error: any) {
    // ST wraps request errors as "API request failed" with the provider's error as the cause.
    const cause = error?.message === 'API request failed' && error?.cause ? error.cause : error;
    const reason = cause?.message || String(cause);
    const hint = GENERIC_ERRORS.test(reason.trim())
      ? ". SillyTavern didn't pass on the provider's reason; it's in the SillyTavern server console."
      : '';
    const target = profile?.model ? `${profile?.name} (${profile.model})` : profile?.name;
    super(`${target ? `${target}: ` : ''}${reason}${hint}`, { cause: error });
    this.name = 'RequestError';
  }
}
