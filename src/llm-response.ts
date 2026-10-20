import { stripReasoningTags } from './parsers.js';

/** The label of the setting users can raise when a response is cut off. */
const MAX_TOKENS_LABEL = 'Max Response Tokens';

/**
 * What a non-streaming request returned, read from the raw provider response.
 */
export interface ResponseInfo {
  /** The message text. */
  text: string;
  /** Parsed structured output (Claude returns it as a tool call when a JSON schema is sent). */
  structured?: unknown;
  finishReason?: string;
  /** True if the response stopped at the token limit. */
  truncated: boolean;
  /** True if `truncated` was guessed from the text length because the response had no finish reason. */
  truncationEstimated?: boolean;
  /** True if the model produced reasoning (thinking) for this response. */
  hasReasoning: boolean;
  /** The max response tokens sent with the request. */
  maxTokens: number;
}

function nonEmpty(value: unknown): boolean {
  return typeof value === 'string' ? value.trim() !== '' : Array.isArray(value) && value.length > 0;
}

/**
 * Reads the finish reason, reasoning and structured output of a raw response (`extractData: false`).
 * @param json The raw provider response
 * @param text The message text, from ST's `extractMessageFromData`
 * @param maxTokens The max response tokens sent with the request
 * @param structured True if a JSON schema was sent
 */
export function readResponseInfo(json: any, text: string, maxTokens: number, structured = false): ResponseInfo {
  text = typeof text === 'string' ? text : '';
  const choice = json?.choices?.[0];
  const parts: any[] = Array.isArray(json?.content) ? json.content : [];
  const finishReason =
    choice?.finish_reason ?? json?.stop_reason ?? json?.candidates?.[0]?.finishReason ?? json?.finish_reason;

  const toolUse = structured ? parts.find((part) => part?.type === 'tool_use') : undefined;

  const hasReasoning =
    nonEmpty(choice?.message?.reasoning_content) ||
    nonEmpty(choice?.message?.reasoning) ||
    nonEmpty(choice?.reasoning) ||
    nonEmpty(json?.thinking) ||
    // Claude returns thinking blocks without text unless a summary is requested, so the block itself counts.
    parts.some((part) => part?.type === 'thinking' || part?.type === 'redacted_thinking') ||
    (json?.responseContent?.parts ?? []).some((part: any) => part?.thought && nonEmpty(part.text)) ||
    stripReasoningTags(text) !== text;

  return {
    text,
    structured: toolUse?.input,
    finishReason: finishReason === undefined || finishReason === null ? undefined : String(finishReason),
    truncated: /length|max_tokens/i.test(String(finishReason ?? '')),
    hasReasoning,
    maxTokens,
  };
}

/**
 * True if the response has no answer (reasoning tags in the content don't count).
 */
export function isEmptyResponse(info: ResponseInfo): boolean {
  return info.structured === undefined && stripReasoningTags(info.text).trim() === '';
}

/**
 * Explains an empty response, e.g. when thinking used up all response tokens.
 */
export function emptyResponseMessage(info: ResponseInfo): string {
  if (info.truncated && info.hasReasoning) {
    return (
      `The model used all ${info.maxTokens} response tokens on thinking and returned no answer. ` +
      `Raise "${MAX_TOKENS_LABEL}" or turn thinking off.`
    );
  }
  if (info.truncated) {
    return (
      `The model returned no answer before hitting the ${info.maxTokens}-token limit. ` + `Raise "${MAX_TOKENS_LABEL}".`
    );
  }
  if (info.finishReason === undefined && info.hasReasoning) {
    return (
      `The model returned no answer, and SillyTavern didn't report why it stopped. If thinking used up all ` +
      `${info.maxTokens} response tokens, raise "${MAX_TOKENS_LABEL}" or turn thinking off.`
    );
  }
  return info.finishReason && !/^(stop|end_turn|stop_sequence|eos)$/i.test(info.finishReason)
    ? `The model returned an empty response (finish reason: ${info.finishReason}).`
    : 'The model returned an empty response.';
}

/**
 * Explains a response that couldn't be parsed because it was cut off at the token limit.
 */
export function truncatedResponseMessage(info: ResponseInfo): string {
  return (
    `The response was ${cutOff(info)} at the ${info.maxTokens}-token limit, so it isn't complete JSON. ` +
    `Raise "${MAX_TOKENS_LABEL}".`
  );
}

/**
 * Warns that a response was cut off at the token limit but is still used.
 */
export function truncatedTextWarning(info: ResponseInfo): string {
  return (
    `The response was ${cutOff(info)} at the ${info.maxTokens}-token limit, so the text may be incomplete. ` +
    `Raise "${MAX_TOKENS_LABEL}" for longer responses.`
  );
}

function cutOff(info: ResponseInfo): string {
  return info.truncationEstimated ? 'probably cut off' : 'cut off';
}

/**
 * Gets the message of an error for display. ST wraps request errors as "API request failed" with the provider's
 * error as the cause, so the cause is shown too (requests sent by CREC throw a RequestError that already does this).
 */
export function getErrorMessage(error: any): string {
  const message = error?.message || String(error);
  const cause = error?.cause;
  if (message === 'API request failed' && cause) {
    const causeMessage = cause?.message || String(cause);
    return causeMessage ? `${message}: ${causeMessage}` : message;
  }
  return message;
}
