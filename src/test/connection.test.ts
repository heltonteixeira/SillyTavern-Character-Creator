import { describe, expect, test } from 'vitest';
import { getContextSize, getPresetContextSize, resolveConnection } from '../connection.js';

const presets: Record<string, Record<string, any>> = {
  openai: { Default: { chat_completion_source: 'openai', openai_max_context: 32000 }, Empty: {} },
  textgenerationwebui: { Kobold: { max_length: 8192 } },
};
const profiles: Record<string, any> = {
  glm: { id: 'glm', name: 'CREC - GLM', api: 'zai', preset: 'Default' },
  kobold: { id: 'kobold', name: 'Kobold', api: 'koboldcpp', preset: 'Kobold' },
  bare: { id: 'bare', name: 'Bare', api: 'zai' },
};

const context = {
  maxContext: 4096,
  ConnectionManagerRequestService: {
    getProfile: (id: string) => {
      if (!profiles[id]) throw new Error(`Profile not found (ID: ${id})`);
      return profiles[id];
    },
    validateProfile: (profile: any) =>
      profile.api === 'koboldcpp'
        ? { selected: 'textgenerationwebui', type: 'koboldcpp' }
        : { selected: 'openai', source: 'zai' },
  },
  getPresetManager: (api: string) => ({ getCompletionPresetByName: (name: string) => presets[api]?.[name] }),
};

describe('resolveConnection', () => {
  test("finds the profile, its API and its preset for the profile's API type", () => {
    expect(resolveConnection('glm', context)).toEqual({
      profile: profiles.glm,
      mainApi: 'openai',
      source: 'zai',
      preset: presets.openai.Default,
    });
    expect(resolveConnection('kobold', context)).toMatchObject({
      mainApi: 'textgenerationwebui',
      preset: presets.textgenerationwebui.Kobold,
    });
    expect(resolveConnection('bare', context).preset).toBeUndefined();
  });

  test('explains a missing profile', () => {
    expect(() => resolveConnection('', context)).toThrow('No connection profile selected.');
    expect(() => resolveConnection('gone', context)).toThrow('Profile not found (ID: gone)');
  });
});

describe('context size', () => {
  test("uses the preset's context size, the custom size, or ST's current one", () => {
    const glm = resolveConnection('glm', context);
    const kobold = resolveConnection('kobold', context);
    const bare = resolveConnection('bare', context);
    expect(getPresetContextSize(glm)).toBe(32000);
    expect(getPresetContextSize(kobold)).toBe(8192);
    expect(getPresetContextSize(bare)).toBeUndefined();

    const profileSize = { maxContextType: 'profile', maxContextValue: 16384 };
    expect(getContextSize(glm, profileSize, context)).toBe(32000);
    expect(getContextSize(bare, profileSize, context)).toBe(4096);
    expect(getContextSize(glm, { maxContextType: 'custom', maxContextValue: 16384 }, context)).toBe(16384);
  });
});
