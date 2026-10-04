import { describe, expect, test, vi } from 'vitest';
import { buildPresetPayload, RequestError, toRequestMessages } from '../request-payload.js';

vi.mock('sillytavern-utils-lib', () => ({}));

describe('toRequestMessages', () => {
  const sessionMessages: any[] = [
    { id: 'im-0', role: 'system', content: 'Guide', isInitial: true },
    { id: 'msg-1', role: 'user', content: 'Shorter', name: 'Eliot' },
    { id: 'msg-2-ai', role: 'assistant', content: 'Done', stateSnapshot: { fields: {} }, isStateUpdate: false },
    { role: 'system', content: 'Story', ignoreInstruct: true },
  ];

  test('keeps only the fields providers accept', () => {
    expect(toRequestMessages(sessionMessages, 'openai')).toEqual([
      { role: 'system', content: 'Guide' },
      { role: 'user', content: 'Shorter', name: 'Eliot' },
      { role: 'assistant', content: 'Done' },
      { role: 'system', content: 'Story' },
    ]);
  });

  test('keeps ignoreInstruct for Text Completion', () => {
    expect(toRequestMessages(sessionMessages, 'textgenerationwebui')[3]).toEqual({
      role: 'system',
      content: 'Story',
      ignoreInstruct: true,
    });
  });

  test('does not change the session messages', () => {
    toRequestMessages(sessionMessages, 'openai');
    expect(sessionMessages[2].stateSnapshot).toEqual({ fields: {} });
  });
});

describe('buildPresetPayload', () => {
  const messages = [{ role: 'user', content: 'Hi' }] as any;
  const presets: Record<string, any> = {
    Default: { chat_completion_source: 'openai', reasoning_effort: 'high' },
    'Claude Preset': { chat_completion_source: 'claude', reasoning_effort: 'high' },
  };

  function makeContext() {
    return {
      getPresetManager: (type: string) =>
        type === 'openai' ? { getCompletionPresetByName: (name: string) => presets[name] } : undefined,
      ChatCompletionService: {
        createRequestData: vi.fn((data: any) => {
          const payload = { ...data, use_sysprompt: true };
          Object.keys(payload).forEach((key) => payload[key] === undefined && delete payload[key]);
          return payload;
        }),
        // Like ST: preset settings for the overridden source, then the request data on top
        presetToGeneratePayload: vi.fn(async (preset: any, overridePreset: any, requestData: any) => ({
          reasoning_effort: preset.reasoning_effort,
          source_used: overridePreset.chat_completion_source ?? preset.chat_completion_source,
          reverse_proxy: 'https://preset-proxy',
          proxy_password: 'secret',
          ...requestData,
        })),
      },
    };
  }

  const profile = {
    preset: 'Default',
    model: 'claude-sonnet-5-5',
    'secret-id': 'key-1',
    'prompt-post-processing': 'none',
    'api-url': 'coding',
  };

  test("reads the preset with the profile's API when the preset was saved with another", async () => {
    const context = makeContext();
    const payload = await buildPresetPayload(context, profile, 'claude', messages, 512);
    expect(context.ChatCompletionService.presetToGeneratePayload).toHaveBeenCalledWith(
      presets.Default,
      { chat_completion_source: 'claude' },
      expect.objectContaining({
        stream: false,
        messages,
        max_tokens: 512,
        model: 'claude-sonnet-5-5',
        chat_completion_source: 'claude',
        secret_id: 'key-1',
        custom_prompt_post_processing: 'none',
        zai_endpoint: 'coding',
        custom_url: 'coding',
      }),
    );
    expect(payload).toMatchObject({
      reasoning_effort: 'high',
      source_used: 'claude',
      chat_completion_source: 'claude',
    });
  });

  test('leaves the proxy to ST when the profile has one', async () => {
    const withProxy = await buildPresetPayload(makeContext(), { ...profile, proxy: 'None' }, 'claude', messages, 512);
    expect(withProxy).not.toHaveProperty('reverse_proxy');
    expect(withProxy).not.toHaveProperty('proxy_password');
    const withoutProxy = await buildPresetPayload(makeContext(), profile, 'claude', messages, 512);
    expect(withoutProxy).toMatchObject({ reverse_proxy: 'https://preset-proxy' });
  });

  test("leaves the request to ST when its handling is already right or isn't possible", async () => {
    const context = makeContext();
    await expect(
      buildPresetPayload(context, { ...profile, preset: 'Claude Preset' }, 'claude', messages, 512),
    ).resolves.toBeUndefined();
    await expect(
      buildPresetPayload(context, { ...profile, preset: undefined }, 'claude', messages, 512),
    ).resolves.toBeUndefined();
    await expect(
      buildPresetPayload(context, { ...profile, preset: 'Missing' }, 'claude', messages, 512),
    ).resolves.toBeUndefined();
    await expect(
      buildPresetPayload({ ...context, ChatCompletionService: {} }, profile, 'claude', messages, 512),
    ).resolves.toBeUndefined();
    expect(context.ChatCompletionService.presetToGeneratePayload).not.toHaveBeenCalled();
  });
});

describe('RequestError', () => {
  const profile = { name: 'CREC - Claude', model: 'claude-sonnet-5-5' };

  test("names the profile and model, and shows the provider's reason", () => {
    const error = new RequestError(
      profile,
      new Error('API request failed', { cause: new Error('Insufficient balance') }),
    );
    expect(error.message).toBe('CREC - Claude (claude-sonnet-5-5): Insufficient balance');
  });

  test("points to the server console when ST didn't pass on the reason", () => {
    const error = new RequestError(profile, new Error('API request failed', { cause: new Error('Response not OK') }));
    expect(error.message).toBe(
      "CREC - Claude (claude-sonnet-5-5): Response not OK. SillyTavern didn't pass on the provider's reason; " +
        "it's in the SillyTavern server console.",
    );
  });

  test('works without a model', () => {
    expect(new RequestError({ name: 'Kobold' }, new Error('Network error')).message).toBe('Kobold: Network error');
  });
});
