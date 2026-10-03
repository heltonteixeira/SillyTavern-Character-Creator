import { Message } from 'sillytavern-utils-lib';
import { ExtractedData } from 'sillytavern-utils-lib/types';
import { z } from 'zod';
import { st_echo } from 'sillytavern-utils-lib/config';
import { PromptEngineeringMode, settingsManager } from './settings.js';
import * as Handlebars from 'handlebars';
import './handlebars-helpers.js';
import { schemaToExample } from './schema-to-example.js';
import { parseResponse, responseSnippet } from './parsers.js';
import {
  emptyResponseMessage,
  isEmptyResponse,
  readResponseInfo,
  ResponseInfo,
  truncatedResponseMessage,
  truncatedTextWarning,
} from './llm-response.js';

/**
 * Sends a non-streaming request and reads the raw provider response, so the finish reason and reasoning are known.
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
  const mainApi: string = service.validateProfile(service.getProfile(profileId)).selected;
  // Text Completion keeps ST's extraction, which trims stop strings and instruct sequences.
  const extractData = mainApi !== 'openai';

  let data: any;
  try {
    data = await service.sendRequest(
      profileId,
      messages,
      maxTokens,
      { stream: false, signal, extractData },
      overridePayload,
    );
  } catch (error) {
    if (signal?.aborted) {
      throw new DOMException('Request aborted by user', 'AbortError');
    }
    throw error;
  }
  if (signal?.aborted) {
    throw new DOMException('Request aborted by user', 'AbortError');
  }

  if (extractData) {
    const content = (data as ExtractedData)?.content;
    const info = readResponseInfo({}, typeof content === 'string' ? content : '', maxTokens);
    // With a JSON schema, ST returns the parsed object
    const structured = content !== null && typeof content === 'object' ? content : undefined;
    return { ...info, structured, hasReasoning: info.hasReasoning || !!data?.reasoning };
  }
  return readResponseInfo(
    data,
    context.extractMessageFromData(data, mainApi),
    maxTokens,
    !!overridePayload.json_schema,
  );
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

/**
 * Parses a structured response, explaining empty and cut-off responses.
 */
function parseStructuredResponse(response: ResponseInfo, format: 'json' | 'xml', jsonSchema: any): unknown {
  if (response.structured !== undefined) {
    return response.structured;
  }
  if (isEmptyResponse(response)) {
    throw new Error(emptyResponseMessage(response));
  }
  try {
    return parseResponse(response.text, format, { schema: jsonSchema });
  } catch (error) {
    if (response.truncated) {
      throw new Error(truncatedResponseMessage(response, format));
    }
    throw error;
  }
}

export async function makeStructuredRequest<T extends z.ZodType<any, any, any>>(
  profileId: string,
  baseMessages: Message[],
  schema: T,
  schemaName: string,
  promptEngineeringMode: PromptEngineeringMode,
  maxResponseToken: number,
  signal?: AbortSignal,
): Promise<z.infer<T>> {
  const settings = settingsManager.getSettings();
  let response: ResponseInfo;
  let parsedContent: unknown;

  const jsonSchema = z.toJSONSchema(schema);

  if (promptEngineeringMode === 'native') {
    response = await sendRawRequest(
      profileId,
      baseMessages,
      maxResponseToken,
      {
        json_schema: { name: schemaName, strict: true, value: jsonSchema },
      },
      signal,
    );
    parsedContent = parseStructuredResponse(response, 'json', jsonSchema);
  } else {
    // Manual prompt engineering for JSON or XML
    const format = promptEngineeringMode as 'json' | 'xml';
    const example = schemaToExample(jsonSchema, format);
    const schemaString = JSON.stringify(jsonSchema, null, 2);
    const promptTemplateKey = format === 'json' ? 'reviseJsonPrompt' : 'reviseXmlPrompt';
    const promptTemplate = settings.prompts[promptTemplateKey]?.content;

    if (!promptTemplate) {
      throw new Error(`Prompt template for mode "${format}" not found.`);
    }

    const templateContext = {
      example_response: example,
      schema: schemaString,
    };

    let resolvedPrompt: string;
    try {
      resolvedPrompt = Handlebars.compile(promptTemplate, { noEscape: true, strict: true })(templateContext);
    } catch (error: any) {
      const label = settings.prompts[promptTemplateKey]?.label ?? promptTemplateKey;
      throw new Error(
        `Failed to render the "${label}" prompt template: ${error?.message ?? error}. ` +
          `Available variables: ${Object.keys(templateContext).join(', ')}.`,
      );
    }
    const instructionMessage: Message = { role: 'system', content: resolvedPrompt };

    response = await sendRawRequest(profileId, [...baseMessages, instructionMessage], maxResponseToken, {}, signal);
    parsedContent = parseStructuredResponse(response, format, jsonSchema);
  }

  const validationResult = schema.safeParse(parsedContent);
  if (!validationResult.success) {
    const issues = validationResult.error.issues;
    console.error('Zod validation failed:', issues);
    console.error('Raw response:', response.text, 'Parsed:', parsedContent);
    const issueList = issues
      .slice(0, 3)
      .map((issue) => `${issue.path.join('.') || '(root)'}: ${issue.message}`)
      .join('; ');
    const raw = response.structured !== undefined ? JSON.stringify(response.structured) : response.text;
    throw new Error(
      `Model response failed schema validation for ${schemaName} (${issueList}${issues.length > 3 ? '; …' : ''}). ` +
        responseSnippet(raw),
    );
  }

  return validationResult.data;
}
