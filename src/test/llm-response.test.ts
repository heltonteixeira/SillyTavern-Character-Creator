import { beforeEach, describe, expect, test, vi } from 'vitest';
import { FieldSpecificResponseSchema } from '../revise-types.js';
import { getErrorMessage, readResponseInfo } from '../llm-response.js';

// `request.ts` pulls in SillyTavern runtime modules, so replace them with minimal stubs.
const mockSettings = vi.hoisted(() => ({ prompts: {} as Record<string, { label: string; content: string }> }));
const stEcho = vi.hoisted(() => vi.fn());
vi.mock('sillytavern-utils-lib', () => ({}));
vi.mock('sillytavern-utils-lib/config', () => ({ st_echo: stEcho }));
vi.mock('../settings.js', () => ({ settingsManager: { getSettings: () => mockSettings } }));

// ST's request service, returning raw provider responses (`extractData: false`)
const sendRequest = vi.fn();
// Tests can add ST functions to the context or profiles with other APIs.
const context: Record<string, any> = {
  ConnectionManagerRequestService: {
    sendRequest,
    getProfile: (id: string) => ({ id, name: `Profile ${id}`, model: 'model-1', api: 'openai', ...profiles[id] }),
    validateProfile: (profile: any) => profile.apiMap ?? { selected: 'openai', source: 'deepseek' },
  },
  // Same lookup order as ST's extractMessageFromData for Chat Completion
  extractMessageFromData: (data: any) =>
    data?.content
      ?.filter((part: any) => part.type === 'text')
      ?.map((part: any) => part.text)
      ?.join('\n\n') ??
    data?.choices?.[0]?.message?.content ??
    '',
};
const profiles: Record<string, any> = {};
vi.stubGlobal('SillyTavern', { getContext: () => context });

const { makePlainRequest, makeStructuredRequest, sendRawRequest } = await import('../request.js');

function openAiResponse(content: string, finishReason = 'stop', reasoning?: string) {
  return {
    choices: [{ message: { role: 'assistant', content, reasoning_content: reasoning }, finish_reason: finishReason }],
  };
}

describe('revise requests', () => {
  const fieldReply = { justification: 'Looks fine.', response: 'New text' };

  beforeEach(() => {
    sendRequest.mockReset();
    stEcho.mockReset();
    mockSettings.prompts.reviseJsonPrompt = { label: 'JSON', content: '{{example_response}}' };
    mockSettings.prompts.reviseXmlPrompt = { label: 'XML', content: '{{example_response}}' };
  });

  function request(mode: 'native' | 'json' | 'xml', signal?: AbortSignal) {
    return makeStructuredRequest('profile', [], FieldSpecificResponseSchema, 'FieldRevision', mode, 1024, signal);
  }

  test('asks ST for the raw response', async () => {
    sendRequest.mockResolvedValue(openAiResponse(JSON.stringify(fieldReply)));
    const signal = new AbortController().signal;
    await expect(request('native', signal)).resolves.toEqual(fieldReply);
    expect(sendRequest).toHaveBeenCalledWith(
      'profile',
      [],
      1024,
      { stream: false, signal, extractData: false },
      { json_schema: expect.objectContaining({ name: 'FieldRevision' }) },
    );
  });

  test('native: accepts prose before the JSON object', async () => {
    const content =
      'That exchange actually stays consistent with the card. No changes needed.\n\n\n' +
      '{\n "justification": "Looks fine.",\n "response": "New text"\n}\n';
    sendRequest.mockResolvedValue(openAiResponse(content));
    await expect(request('native')).resolves.toEqual(fieldReply);
  });

  test('native: uses Claude tool output', async () => {
    sendRequest.mockResolvedValue({
      content: [{ type: 'tool_use', name: 'FieldRevision', input: fieldReply }],
      stop_reason: 'tool_use',
    });
    await expect(request('native')).resolves.toEqual(fieldReply);
  });

  test('explains thinking that used up all tokens', async () => {
    sendRequest.mockResolvedValue(openAiResponse('', 'length', 'Let me think about this...'));
    await expect(request('native')).rejects.toThrow(
      'The model used all 1024 response tokens on thinking and returned no answer. ' +
        'Raise "Max Response Tokens" or turn thinking off.',
    );
    sendRequest.mockResolvedValue(openAiResponse('<think>Hmm, let me see', 'length'));
    await expect(request('json')).rejects.toThrow('used all 1024 response tokens on thinking');
  });

  test('explains empty responses', async () => {
    sendRequest.mockResolvedValue(openAiResponse('', 'length'));
    await expect(request('json')).rejects.toThrow(
      'The model returned no answer before hitting the 1024-token limit. Raise "Max Response Tokens".',
    );
    sendRequest.mockResolvedValue(openAiResponse('  ', 'stop'));
    await expect(request('native')).rejects.toThrow('The model returned an empty response.');
  });

  test('explains cut-off JSON and XML', async () => {
    sendRequest.mockResolvedValue(openAiResponse('{"justification": "Looks', 'length'));
    await expect(request('native')).rejects.toThrow(
      `The response was cut off at the 1024-token limit, so it isn't complete JSON. Raise "Max Response Tokens".`,
    );
    sendRequest.mockResolvedValue(openAiResponse('```xml\n<root>\n<justification>Looks', 'length'));
    await expect(request('xml')).rejects.toThrow(`cut off at the 1024-token limit, so it isn't complete XML`);
  });

  test('XML: ignores an unclosed code block start and text around the root', async () => {
    const xml = '<root><justification>Looks fine.</justification><response>New text</response></root>';
    sendRequest.mockResolvedValue(openAiResponse(`Sure.\n\`\`\`xml\n${xml}`));
    await expect(request('xml')).resolves.toEqual(fieldReply);
  });

  test('shows the parse error and the start of invalid JSON', async () => {
    sendRequest.mockResolvedValue(openAiResponse('{"justification": "She said "no"", "response": "x"}'));
    const error = await request('native').catch((e) => e);
    expect(error.message).toMatch(/^Model response is not valid JSON \(.+\)\. It starts with: "\{"justification"/);
  });

  test('lists schema issues', async () => {
    sendRequest.mockResolvedValue(openAiResponse('{"justification": 5}'));
    const error = await request('json').catch((e) => e);
    expect(error.message).toContain('Model response failed schema validation for FieldRevision (justification: ');
    expect(error.message).toContain('; response: ');
    expect(error.message).toContain('It starts with: "{"justification": 5}"');
    expect(stEcho).not.toHaveBeenCalled();
  });

  test('turns a cancelled request into an AbortError', async () => {
    sendRequest.mockImplementation(
      (_profileId, _prompt, _maxTokens, custom: { signal: AbortSignal }) =>
        new Promise((_resolve, reject) => {
          custom.signal.addEventListener('abort', () =>
            reject(new Error('API request failed', { cause: new DOMException('aborted', 'AbortError') })),
          );
        }),
    );
    const controller = new AbortController();
    const pending = request('native', controller.signal);
    controller.abort();
    await expect(pending).rejects.toMatchObject({ name: 'AbortError' });
  });

  test('read-only requests explain empty responses and warn about cut-off text', async () => {
    sendRequest.mockResolvedValue(openAiResponse('', 'length'));
    await expect(makePlainRequest('profile', [], 1024)).rejects.toThrow('before hitting the 1024-token limit');

    sendRequest.mockResolvedValue(openAiResponse('Half a sent', 'length'));
    await expect(makePlainRequest('profile', [], 1024)).resolves.toBe('Half a sent');
    expect(stEcho).toHaveBeenCalledWith('warning', expect.stringContaining('cut off at the 1024-token limit'));
  });
});

describe('request compatibility', () => {
  const fieldReply = { justification: 'Looks fine.', response: 'New text' };

  beforeEach(() => {
    sendRequest.mockReset();
    stEcho.mockReset();
    mockSettings.prompts.reviseJsonPrompt = { label: 'JSON', content: '{{example_response}}' };
    delete context.ChatCompletionService;
    delete context.getPresetManager;
    delete context.getTokenCountAsync;
  });

  test('sends only the message fields providers accept', async () => {
    sendRequest.mockResolvedValue(openAiResponse('ok'));
    const messages: any[] = [
      { id: 'im-0', role: 'system', content: 'Guide', isInitial: true },
      { id: 'msg-1-ai', role: 'assistant', content: 'Done', stateSnapshot: { fields: {} }, isStateUpdate: false },
    ];
    await sendRawRequest('profile', messages, 100);
    expect(sendRequest.mock.calls[0][1]).toEqual([
      { role: 'system', content: 'Guide' },
      { role: 'assistant', content: 'Done' },
    ]);
  });

  test("builds the preset payload for the profile's API and tells ST not to apply the preset again", async () => {
    profiles.claude = {
      preset: 'Default',
      model: 'claude-sonnet-5-5',
      apiMap: { selected: 'openai', source: 'claude' },
    };
    const presetToGeneratePayload = vi.fn(async (_preset, _override, requestData) => ({
      ...requestData,
      reasoning_effort: 'high',
    }));
    context.ChatCompletionService = { createRequestData: (data: any) => data, presetToGeneratePayload };
    context.getPresetManager = () => ({ getCompletionPresetByName: () => ({ chat_completion_source: 'openai' }) });
    sendRequest.mockResolvedValue(openAiResponse('ok'));

    await sendRawRequest('claude', [{ role: 'user', content: 'Hi' }], 100, { json_schema: { name: 'S' } });
    expect(presetToGeneratePayload.mock.calls[0][1]).toEqual({ chat_completion_source: 'claude' });
    const [, , , custom, payload] = sendRequest.mock.calls[0];
    expect(custom).toMatchObject({ includePreset: false, extractData: false });
    expect(payload).toMatchObject({ reasoning_effort: 'high', json_schema: { name: 'S' }, model: 'claude-sonnet-5-5' });
  });

  test('wraps rejected requests with the profile and model', async () => {
    sendRequest.mockRejectedValue(new Error('API request failed', { cause: new Error('Insufficient balance') }));
    await expect(makePlainRequest('profile', [], 100)).rejects.toThrow(
      'Profile profile (model-1): Insufficient balance',
    );
  });

  test('native mode falls back to JSON mode when the request is rejected, and remembers it', async () => {
    sendRequest
      .mockRejectedValueOnce(new Error('API request failed', { cause: new Error('Response not OK') }))
      .mockResolvedValue(openAiResponse(JSON.stringify(fieldReply)));
    const request = () =>
      makeStructuredRequest('no-native', [], FieldSpecificResponseSchema, 'FieldRevision', 'native', 1024);

    await expect(request()).resolves.toEqual(fieldReply);
    expect(sendRequest).toHaveBeenCalledTimes(2);
    expect(sendRequest.mock.calls[0][4]).toHaveProperty('json_schema');
    expect(sendRequest.mock.calls[1][4]).not.toHaveProperty('json_schema');
    expect(stEcho).toHaveBeenCalledWith('warning', expect.stringContaining('JSON mode is used for this profile'));

    await expect(request()).resolves.toEqual(fieldReply);
    expect(sendRequest).toHaveBeenCalledTimes(3);
    expect(sendRequest.mock.calls[2][4]).not.toHaveProperty('json_schema');
  });

  test("native mode doesn't fall back when the response can't be used", async () => {
    sendRequest.mockResolvedValue(openAiResponse('{"justification": 5}'));
    await expect(
      makeStructuredRequest('native-ok', [], FieldSpecificResponseSchema, 'FieldRevision', 'native', 1024),
    ).rejects.toThrow('schema validation');
    expect(sendRequest).toHaveBeenCalledTimes(1);
  });

  test('marks long responses without a finish reason as probably cut off', async () => {
    context.getTokenCountAsync = async (text: string) => text.length;
    sendRequest.mockResolvedValue({ content: [{ type: 'text', text: 'x'.repeat(95) }] });
    await makePlainRequest('profile', [], 100);
    expect(stEcho).toHaveBeenCalledWith('warning', expect.stringContaining('probably cut off at the 100-token limit'));

    stEcho.mockReset();
    sendRequest.mockResolvedValue({ content: [{ type: 'text', text: 'x'.repeat(50) }] });
    await makePlainRequest('profile', [], 100);
    expect(stEcho).not.toHaveBeenCalled();
  });

  test('explains an empty answer after hidden thinking without a finish reason', async () => {
    sendRequest.mockResolvedValue({ content: [{ type: 'thinking', thinking: '', signature: 'abc' }] });
    await expect(makePlainRequest('profile', [], 100)).rejects.toThrow(
      "SillyTavern didn't report why it stopped. If thinking used up all 100 response tokens",
    );
  });
});

describe('readResponseInfo', () => {
  test('reads finish reasons of different providers', () => {
    expect(readResponseInfo(openAiResponse('x', 'length'), 'x', 10).truncated).toBe(true);
    expect(readResponseInfo({ stop_reason: 'max_tokens' }, 'x', 10).truncated).toBe(true);
    expect(readResponseInfo({ candidates: [{ finishReason: 'MAX_TOKENS' }] }, 'x', 10).truncated).toBe(true);
    expect(readResponseInfo(openAiResponse('x'), 'x', 10)).toMatchObject({ truncated: false, finishReason: 'stop' });
    expect(readResponseInfo({}, 'x', 10)).toMatchObject({ truncated: false, finishReason: undefined });
  });

  test('detects reasoning', () => {
    expect(readResponseInfo(openAiResponse('', 'length', 'hmm'), '', 10).hasReasoning).toBe(true);
    expect(readResponseInfo({ choices: [{ message: { reasoning: 'hmm' } }] }, '', 10).hasReasoning).toBe(true);
    expect(readResponseInfo({ content: [{ type: 'thinking', thinking: 'hmm' }] }, '', 10).hasReasoning).toBe(true);
    expect(readResponseInfo({}, '<think>hmm</think>', 10).hasReasoning).toBe(true);
    expect(readResponseInfo(openAiResponse('x'), 'x', 10).hasReasoning).toBe(false);
  });

  test('only uses tool output for structured requests', () => {
    const json = { content: [{ type: 'tool_use', input: { a: 1 } }] };
    expect(readResponseInfo(json, '', 10, true).structured).toEqual({ a: 1 });
    expect(readResponseInfo(json, '', 10, false).structured).toBeUndefined();
  });
});

describe('getErrorMessage', () => {
  test('includes the cause of ST request errors', () => {
    const error = new Error('API request failed', { cause: new Error('Insufficient balance') });
    expect(getErrorMessage(error)).toBe('API request failed: Insufficient balance');
    expect(getErrorMessage(new Error('Other'))).toBe('Other');
    expect(getErrorMessage('plain')).toBe('plain');
  });
});
