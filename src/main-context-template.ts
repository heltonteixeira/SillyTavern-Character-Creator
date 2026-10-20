import type { MainContextTemplatePreset } from './settings.js';

/** The template entry where the selected chat messages go. It has no prompt of its own. */
export const CHAT_HISTORY_PROMPT = 'chatHistory';

/**
 * Adds a prompt to the top of the template, switched off, like ST's Prompt Manager.
 * Does nothing if the template already has it. Returns an updated copy.
 */
export function insertPrompt(preset: MainContextTemplatePreset, promptName: string): MainContextTemplatePreset {
  if (preset.prompts.some((p) => p.promptName === promptName)) return preset;
  return { ...preset, prompts: [{ promptName, enabled: false, role: 'system' }, ...preset.prompts] };
}

/** Takes a prompt out of the template. The prompt itself is kept. Returns an updated copy. */
export function removePrompt(preset: MainContextTemplatePreset, promptName: string): MainContextTemplatePreset {
  return { ...preset, prompts: preset.prompts.filter((p) => p.promptName !== promptName) };
}

/** Takes a deleted prompt out of every template. Returns an updated copy. */
export function removePromptFromAll(
  presets: Record<string, MainContextTemplatePreset>,
  promptName: string,
): Record<string, MainContextTemplatePreset> {
  return Object.fromEntries(Object.entries(presets).map(([name, preset]) => [name, removePrompt(preset, promptName)]));
}

/** `baseId`, or `baseId` with a number added if a prompt (or the chat history entry) already uses it. */
export function uniquePromptId(baseId: string, existingIds: string[]): string {
  const base = baseId || 'prompt';
  let id = base;
  for (let i = 2; existingIds.includes(id) || id === CHAT_HISTORY_PROMPT; i++) {
    id = `${base}${i}`;
  }
  return id;
}
