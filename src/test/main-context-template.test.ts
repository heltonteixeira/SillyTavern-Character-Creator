import { describe, expect, test } from 'vitest';
import {
  CHAT_HISTORY_PROMPT,
  insertPrompt,
  removePrompt,
  removePromptFromAll,
  uniquePromptId,
} from '../main-context-template.js';
import type { MainContextTemplatePreset } from '../settings.js';

const template = (): MainContextTemplatePreset => ({
  prompts: [
    { promptName: CHAT_HISTORY_PROMPT, enabled: true, role: 'system' },
    { promptName: 'taskDescription', enabled: true, role: 'user' },
  ],
});

describe('main context template', () => {
  test('inserts a prompt at the top, switched off', () => {
    const result = insertPrompt(template(), 'plist');
    expect(result.prompts.map((p) => p.promptName)).toEqual(['plist', CHAT_HISTORY_PROMPT, 'taskDescription']);
    expect(result.prompts[0]).toEqual({ promptName: 'plist', enabled: false, role: 'system' });
  });

  test('inserting a prompt the template already has changes nothing', () => {
    const preset = template();
    expect(insertPrompt(preset, 'taskDescription')).toBe(preset);
  });

  test('removes a prompt from one template without changing the original', () => {
    const preset = template();
    expect(removePrompt(preset, 'taskDescription').prompts.map((p) => p.promptName)).toEqual([CHAT_HISTORY_PROMPT]);
    expect(preset.prompts).toHaveLength(2);
  });

  test('removes a deleted prompt from every template', () => {
    const presets = { a: insertPrompt(template(), 'plist'), b: template() };
    const result = removePromptFromAll(presets, 'plist');
    expect(result.a.prompts.map((p) => p.promptName)).toEqual([CHAT_HISTORY_PROMPT, 'taskDescription']);
    expect(result.b.prompts).toEqual(presets.b.prompts);
  });

  test('makes prompt IDs unique', () => {
    expect(uniquePromptId('plist', ['taskDescription'])).toBe('plist');
    expect(uniquePromptId('plist', ['plist', 'plist2'])).toBe('plist3');
    expect(uniquePromptId('chatHistory', [])).toBe('chatHistory2');
    expect(uniquePromptId('', [])).toBe('prompt');
  });
});
