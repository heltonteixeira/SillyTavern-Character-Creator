import { Message } from 'sillytavern-utils-lib';
import { ExtractedData } from 'sillytavern-utils-lib/types';
import { z } from 'zod';
import { st_echo } from 'sillytavern-utils-lib/config';
import { settingsManager } from './settings.js';
import * as Handlebars from 'handlebars';
import './handlebars-helpers.js';
import { schemaToExample } from './schema-to-example.js';
import { extractJson, responseSnippet } from './parsers.js';
import {
  emptyResponseMessage,
  isEmptyResponse,
  readResponseInfo,
  ResponseInfo,
  truncatedResponseMessage,
  truncatedTextWarning,
} from './llm-response.js';
import { buildPresetPayload, RequestError, stripProfileReasoning, toRequestMessages } from './request-payload.js';
import { resolveConnection } from './connection.js';

/**
 * Sends a non-streaming request through a connection profile and reads the raw provider response, so the finish
 * reason and reasoning are known. See connection.ts for what is taken from the profile.
 * For Chat Completion, ST's JSON extraction is skipped: it returns `{}` for text that isn't pure JSON.
 * @throws AbortError if the signal was aborted
 */
export async function sendRawRequest(
  profileId: string,
  messages: Message[],
  maxTokens: number,
  overridePayload: Record<string, any> = {},
  signal?: AbortSignal,
): Promise<ResponseInfo> {
  const context = SillyTavern.getContext();
  const service = context.ConnectionManagerRequestService as any;
  const connection = resolveConnection(profileId, context);
  const { profile, mainApi } = connection;
  // Text Completion keeps ST's extraction, which trims stop strings and instruct sequences.
  const extractData = mainApi !== 'openai';
  const requestMessages = toRequestMessages(messages, mainApi);

  const custom: Record<string, any> = { stream: false, signal, extractData };
  let payload = overridePayload;
  let data: any;
  try {
    const presetPayload = await buildPresetPayload(context, connection, requestMessages, maxTokens);
    if (presetPayload) {
      custom.includePreset = false;
      payload = { ...presetPayload, ...overridePayload };
    }
    // Building the preset payload is async, so the request may have been cancelled meanwhile.
    signal?.throwIfAborted();
    data = await service.sendRequest(profileId, requestMessages, maxTokens, custom, payload);
  } catch (error) {
    if (signal?.aborted) {
      throw new DOMException('Request aborted by user', 'AbortError');
    }
    throw new RequestError(profile, error);
  }
  if (signal?.aborted) {
    throw new DOMException('Request aborted by user', 'AbortError');
  }

  let info: ResponseInfo;
  if (extractData) {
    const content = (data as ExtractedData)?.content;
    const message = typeof content === 'string' ? content : '';
    const text = stripProfileReasoning(context, profile, message);
    info = readResponseInfo({}, text, maxTokens);
    // With a JSON schema, ST returns the parsed object
    const structured = content !== null && typeof content === 'object' ? content : undefined;
    info = { ...info, structured, hasReasoning: info.hasReasoning || !!data?.reasoning || text !== message };
  } else {
    const message = context.extractMessageFromData(data, mainApi);
    const text = stripProfileReasoning(context, profile, message);
    info = readResponseInfo(data, text, maxTokens, !!payload.json_schema);
    info = { ...info, hasReasoning: info.hasReasoning || text !== message };
  }
  return estimateTruncation(info, context);
}

/** Share of the response tokens a response must reach to count as probably cut off. */
const PROBABLY_TRUNCATED_RATIO = 0.9;

/**
 * Some responses come without a finish reason (ST passes on Claude's text without it), so a cut-off response can't
 * be told apart. If the text is close to the token limit, it is marked as probably cut off.
 */
async function estimateTruncation(info: ResponseInfo, context: any): Promise<ResponseInfo> {
  if (info.finishReason !== undefined || !info.text || typeof context.getTokenCountAsync !== 'function') {
    return info;
  }
  try {
    const tokens = await context.getTokenCountAsync(info.text);
    if (tokens >= info.maxTokens * PROBABLY_TRUNCATED_RATIO) {
      return { ...info, truncated: true, truncationEstimated: true };
    }
  } catch (error) {
    console.warn('Could not count response tokens', error);
  }
  return info;
}

export async function makePlainRequest(
  profileId: string,
  prompt: Message[],
  maxTokens: number,
  signal?: AbortSignal,
): Promise<string> {
  const response = await sendRawRequest(profileId, prompt, maxTokens, {}, signal);

  if (isEmptyResponse(response)) {
    throw new Error(emptyResponseMessage(response));
  }
  if (response.truncated) {
    st_echo('warning', truncatedTextWarning(response));
  }

  return response.text;
}

/** A response that has text but doesn't contain JSON matching the schema. */
class UnusableResponseError extends Error {}

/**
 * Parses and validates a structured response, explaining empty and cut-off responses.
 * @throws UnusableResponseError if the response has no JSON matching the schema
 */
function parseStructuredResponse<T extends z.ZodType<any, any, any>>(
  response: ResponseInfo,
  schema: T,
  schemaName: string,
): z.infer<T> {
  let parsed: unknown = response.structured;
  if (parsed === undefined) {
    if (isEmptyResponse(response)) {
      throw new Error(emptyResponseMessage(response));
    }
    try {
      parsed = extractJson(response.text);
    } catch (error: any) {
      if (response.truncated) {
        throw new Error(truncatedResponseMessage(response));
      }
      console.error('Raw response:', response.text);
      throw new UnusableResponseError(
        `Model response is not valid JSON (${error?.message ?? error}). ${responseSnippet(response.text)}`,
      );
    }
  }

  const validationResult = schema.safeParse(parsed);
  if (!validationResult.success) {
    const issues = validationResult.error.issues;
    console.error('Zod validation failed:', issues);
    console.error('Raw response:', response.text, 'Parsed:', parsed);
    const issueList = issues
      .slice(0, 3)
      .map((issue) => `${issue.path.join('.') || '(root)'}: ${issue.message}`)
      .join('; ');
    const raw = response.structured !== undefined ? JSON.stringify(response.structured) : response.text;
    throw new UnusableResponseError(
      `Model response failed schema validation for ${schemaName} (${issueList}${issues.length > 3 ? '; …' : ''}). ` +
        responseSnippet(raw),
    );
  }
  return validationResult.data;
}

/** Profiles (with their model) whose native structured output failed. Kept until the page is reloaded. */
const nativeModeFailed = new Set<string>();

function nativeModeKey(profileId: string): string {
  return `${profileId}:${resolveConnection(profileId).profile.model ?? ''}`;
}

/**
 * Requests JSON matching `schema`. The schema is first sent as native structured output, which ST turns into
 * provider-specific options. If the provider rejects it or the reply doesn't match the schema (e.g. an endpoint that
 * ignores the schema), the schema is asked for in the prompt instead ("Revise Session (JSON Mode)" template), and from
 * then on for this profile and model until the page is reloaded.
 */
export async function makeStructuredRequest<T extends z.ZodType<any, any, any>>(
  profileId: string,
  baseMessages: Message[],
  schema: T,
  schemaName: string,
  maxResponseToken: number,
  signal?: AbortSignal,
): Promise<z.infer<T>> {
  const jsonSchema = z.toJSONSchema(schema);

  const key = nativeModeKey(profileId);
  if (!nativeModeFailed.has(key)) {
    try {
      const response = await sendRawRequest(
        profileId,
        baseMessages,
        maxResponseToken,
        { json_schema: { name: schemaName, strict: true, value: jsonSchema } },
        signal,
      );
      return parseStructuredResponse(response, schema, schemaName);
    } catch (error: any) {
      if (!(error instanceof RequestError || error instanceof UnusableResponseError)) {
        throw error;
      }
      nativeModeFailed.add(key);
      console.warn('Native structured output failed, asking for JSON in the prompt instead:', error);
      st_echo(
        'info',
        `Native structured output didn't work for this profile, so JSON is asked for in the prompt until the page is reloaded. ${error.message}`,
      );
    }
  }

  const settings = settingsManager.getSettings();
  const promptTemplate = settings.prompts.reviseJsonPrompt?.content;
  if (!promptTemplate) {
    throw new Error('The "Revise Session (JSON Mode)" prompt template is missing.');
  }
  const templateContext = {
    example_response: schemaToExample(jsonSchema),
    schema: JSON.stringify(jsonSchema, null, 2),
  };
  let resolvedPrompt: string;
  try {
    resolvedPrompt = Handlebars.compile(promptTemplate, { noEscape: true, strict: true })(templateContext);
  } catch (error: any) {
    const label = settings.prompts.reviseJsonPrompt?.label ?? 'reviseJsonPrompt';
    throw new Error(
      `Failed to render the "${label}" prompt template: ${error?.message ?? error}. ` +
        `Available variables: ${Object.keys(templateContext).join(', ')}.`,
    );
  }
  const instructionMessage: Message = { role: 'system', content: resolvedPrompt };

  const response = await sendRawRequest(profileId, [...baseMessages, instructionMessage], maxResponseToken, {}, signal);
  return parseStructuredResponse(response, schema, schemaName);
}
