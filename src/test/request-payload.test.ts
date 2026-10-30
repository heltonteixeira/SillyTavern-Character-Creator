import { describe, expect, test, vi } from 'vitest';
import { buildPresetPayload, RequestError, stripProfileReasoning, toRequestMessages } from '../request-payload.js';
import { Connection } from '../connection.js';

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
          // ST adds the current custom stopping strings
          stop: ['\nHelton:'],
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

  /** A Claude connection, as resolveConnection returns it */
  function connection(overrides: Record<string, any> = {}, mainApi = 'openai'): Connection {
    const merged = { ...profile, ...overrides };
    return { profile: merged, mainApi, source: 'claude', preset: presets[merged.preset] };
  }

  test("reads the preset with the profile's API when the preset was saved with another", async () => {
    const context = makeContext();
    const payload = await buildPresetPayload(context, connection(), messages, 512);
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

  test('sends only the given messages, never the preset prompts', async () => {
    const payload = await buildPresetPayload(makeContext(), connection(), messages, 512);
    expect(payload?.messages).toBe(messages);
  });

  test('leaves the proxy to ST when the profile has one', async () => {
    const withProxy = await buildPresetPayload(makeContext(), connection({ proxy: 'None' }), messages, 512);
    expect(withProxy).not.toHaveProperty('reverse_proxy');
    expect(withProxy).not.toHaveProperty('proxy_password');
    const withoutProxy = await buildPresetPayload(makeContext(), connection(), messages, 512);
    expect(withoutProxy).toMatchObject({ reverse_proxy: 'https://preset-proxy' });
  });

  test("leaves out ST's current stop strings", async () => {
    const payload = await buildPresetPayload(makeContext(), connection(), messages, 512);
    expect(payload).not.toHaveProperty('stop');
  });

  test("also builds the payload when the preset's API matches, so the stop strings are left out", async () => {
    const payload = await buildPresetPayload(makeContext(), connection({ preset: 'Claude Preset' }), messages, 512);
    expect(payload).toMatchObject({ reasoning_effort: 'high', source_used: 'claude' });
    expect(payload).not.toHaveProperty('stop');
  });

  test("leaves the request to ST when there is no preset, for Text Completion, or when building it isn't possible", async () => {
    const context = makeContext();
    await expect(
      buildPresetPayload(context, connection({ preset: undefined }), messages, 512),
    ).resolves.toBeUndefined();
    await expect(
      buildPresetPayload(context, connection({ preset: 'Missing' }), messages, 512),
    ).resolves.toBeUndefined();
    await expect(
      buildPresetPayload(context, connection({}, 'textgenerationwebui'), messages, 512),
    ).resolves.toBeUndefined();
    await expect(
      buildPresetPayload({ ...context, ChatCompletionService: {} }, connection(), messages, 512),
    ).resolves.toBeUndefined();
    expect(context.ChatCompletionService.presetToGeneratePayload).not.toHaveBeenCalled();
  });
});

describe('stripProfileReasoning', () => {
  const templates: Record<string, any> = {
    'Think XML': { prefix: '<think>', suffix: '</think>' },
    Custom: { prefix: '[[plan]]', suffix: '[[/plan]]' },
    Blank: { prefix: '', suffix: '' },
  };

  // Like ST's parseReasoningFromString: a leading block is removed and the rest trimmed
  const context = {
    getReasoningTemplateByName: (name: string) => {
      if (!templates[name]) throw new Error(`Unknown reasoning template name: "${name}"`);
      return templates[name];
    },
    parseReasoningFromString: (str: string, _options: any, template: any) => {
      if (!template.prefix || !template.suffix) return null;
      const start = str.trimStart();
      const end = start.indexOf(template.suffix);
      if (!start.startsWith(template.prefix) || end < 0) return { reasoning: '', content: str };
      return {
        reasoning: start.slice(template.prefix.length, end),
        content: start.slice(end + template.suffix.length).trim(),
      };
    },
  };

  test("removes a leading block written with the profile's template", () => {
    const profile = { 'reasoning-template': 'Custom' };
    expect(stripProfileReasoning(context, profile, '[[plan]]Keep it short.[[/plan]]\nA tall knight.')).toBe(
      'A tall knight.',
    );
  });

  test('leaves text without a block unchanged', () => {
    const profile = { 'reasoning-template': 'Think XML' };
    expect(stripProfileReasoning(context, profile, ' A tall knight.')).toBe(' A tall knight.');
  });

  test('leaves text unchanged for a blank, missing or deleted template, or without ST support', () => {
    const text = '<think>Plan</think>A tall knight.';
    expect(stripProfileReasoning(context, { 'reasoning-template': 'Blank' }, text)).toBe(text);
    expect(stripProfileReasoning(context, {}, text)).toBe(text);
    expect(stripProfileReasoning(context, { 'reasoning-template': 'Deleted' }, text)).toBe(text);
    expect(stripProfileReasoning({}, { 'reasoning-template': 'Think XML' }, text)).toBe(text);
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

  const consoleNote = "SillyTavern didn't pass on the provider's reason; it's in the SillyTavern server console.";

  test("lists what to check when ST didn't pass on the reason", () => {
    const error = new RequestError(profile, new Error('API request failed', { cause: new Error('Response not OK') }), {
      maxTokens: 327682,
      mainApi: 'openai',
    });
    expect(error.message).toBe(
      'CREC - Claude (claude-sonnet-5-5): The request failed. Check that Max Response Tokens (327682) is within ' +
        `the model's output limit, the profile's model exists and its API key is valid. ${consoleNote}`,
    );
  });

  test('asks Text Completion users to check the server', () => {
    const error = new RequestError({ name: 'Kobold' }, new Error('Response not OK'), {
      maxTokens: 512,
      mainApi: 'textgenerationwebui',
    });
    expect(error.message).toBe(
      'Kobold: The request failed. Check that the server is running, its model is loaded, and ' +
        `Max Response Tokens (512) is within its limit. ${consoleNote}`,
    );
  });

  test('explains the HTTP status that OpenAI-compatible sources pass on', () => {
    const glm = { name: 'GLM', model: 'glm-5.2' };
    const fail = (reason: string) =>
      new RequestError(glm, new Error('API request failed', { cause: new Error(reason) }), {
        maxTokens: 4096,
        mainApi: 'openai',
      }).message;
    expect(fail('Bad Request')).toBe(
      "GLM (glm-5.2): Bad Request (HTTP 400). Check that Max Response Tokens (4096) is within the model's output " +
        `limit, then the profile's model and its preset's settings. ${consoleNote}`,
    );
    expect(fail('Unauthorized')).toBe(
      `GLM (glm-5.2): Unauthorized (HTTP 401). Check the API key of the profile's connection. ${consoleNote}`,
    );
    expect(fail('Too Many Requests')).toContain('(HTTP 429). Rate limit or quota reached.');
    expect(fail('Service Unavailable')).toContain('(HTTP 503). The provider had a problem. Try again later.');
    expect(fail('Unknown error occurred')).toContain('The request failed. Check that Max Response Tokens (4096)');
  });

  test('reads the status of "Got response status"', () => {
    expect(new RequestError({ name: 'X' }, new Error('Got response status 404')).message).toBe(
      `X: Not Found (HTTP 404). Check the profile's model and API URL. ${consoleNote}`,
    );
    expect(new RequestError({ name: 'X' }, new Error('Got response status 418')).message).toContain(
      'X: The request failed (HTTP 418). Check that Max Response Tokens is within',
    );
  });

  test('works without a model', () => {
    expect(new RequestError({ name: 'Kobold' }, new Error('Network error')).message).toBe('Kobold: Network error');
  });
});
