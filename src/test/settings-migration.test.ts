import { describe, expect, test } from 'vitest';
import { DEFAULT_CHAR_CARD_DESCRIPTION, DEFAULT_OUTPUT_FORMAT_INSTRUCTIONS } from '../constants.js';
import {
  compareFormatVersions,
  mergeOutputFormatPrompts,
  migrateSettings,
  removeResponseFormatSettings,
  SettingsMigration,
  updateDefaultPrompts,
} from '../settings-migration.js';

const migrations: SettingsMigration[] = [
  { from: '*', to: 'F_1.4', action: (previous) => ({ ...previous, steps: ['* -> F_1.4'] }) },
  { from: 'F_1.4', to: 'F_1.9', action: (previous) => ({ ...previous, steps: [...previous.steps, 'F_1.4 -> F_1.9'] }) },
  {
    from: 'F_1.9',
    to: 'F_1.10',
    action: async (previous) => ({ ...previous, steps: [...(previous.steps ?? []), 'F_1.9 -> F_1.10'] }),
  },
];

describe('settings migration', () => {
  test('compares format versions numerically', () => {
    expect(compareFormatVersions('F_1.10', 'F_1.9')).toBeGreaterThan(0);
    expect(compareFormatVersions('F_1.4', 'F_1.10')).toBeLessThan(0);
    expect(compareFormatVersions('F_1.10', 'F_1.10')).toBe(0);
    expect(compareFormatVersions('F_2', 'F_1.10')).toBeGreaterThan(0);
  });

  test('does nothing for settings at the latest format version', async () => {
    expect(await migrateSettings({ formatVersion: 'F_1.10' }, migrations)).toBeUndefined();
  });

  test('migrates from F_1.9 to F_1.10', async () => {
    const settings = { formatVersion: 'F_1.9', value: 1 };

    expect(await migrateSettings(settings, migrations)).toEqual({
      formatVersion: 'F_1.10',
      value: 1,
      steps: ['F_1.9 -> F_1.10'],
    });
    expect(settings).toEqual({ formatVersion: 'F_1.9', value: 1 });
  });

  test('runs the wildcard migration for older versions, then the chain', async () => {
    expect(await migrateSettings({ formatVersion: 'F_1.2' }, migrations)).toEqual({
      formatVersion: 'F_1.10',
      steps: ['* -> F_1.4', 'F_1.4 -> F_1.9', 'F_1.9 -> F_1.10'],
    });
  });
});

describe('updating default prompts (F_1.10 -> F_1.11)', () => {
  // The XML/JSON format templates were updated here too; F_1.12 removes them.
  const newDefaults = {
    stDescription: DEFAULT_CHAR_CARD_DESCRIPTION,
    noneFormat: DEFAULT_OUTPUT_FORMAT_INSTRUCTIONS,
  };
  const f1_11: SettingsMigration = {
    from: 'F_1.10',
    to: 'F_1.11',
    action: (previous) => updateDefaultPrompts(previous, newDefaults),
  };
  const f1_10: SettingsMigration = {
    from: 'F_1.9',
    to: 'F_1.10',
    action: (previous) => ({ ...previous, steps: [...(previous.steps ?? []), 'F_1.9 -> F_1.10'] }),
  };

  const makeSettings = (formatVersion: string) => ({
    formatVersion,
    prompts: {
      stDescription: { label: 'ST', content: 'old default', isDefault: true },
      xmlFormat: { label: 'XML', content: 'old default', isDefault: true },
      jsonFormat: { label: 'JSON', content: 'my custom JSON format', isDefault: false },
      noneFormat: { label: 'None', content: 'old default', isDefault: true },
      reviseXmlPrompt: { label: 'Revise XML', content: 'my custom revise prompt', isDefault: false },
      taskDescription: { label: 'Task', content: 'task', isDefault: true },
    },
  });

  test('updates default prompts and keeps edited ones', () => {
    const settings = makeSettings('F_1.10');
    const result = updateDefaultPrompts(settings, newDefaults);

    expect(result.prompts.stDescription).toEqual({
      label: 'ST',
      content: DEFAULT_CHAR_CARD_DESCRIPTION,
      isDefault: true,
    });
    expect(result.prompts.noneFormat.content).toBe(DEFAULT_OUTPUT_FORMAT_INSTRUCTIONS);
    expect(result.prompts.xmlFormat).toEqual(settings.prompts.xmlFormat);
    expect(result.prompts.jsonFormat).toEqual(settings.prompts.jsonFormat);
    expect(result.prompts.reviseXmlPrompt).toEqual(settings.prompts.reviseXmlPrompt);
    expect(result.prompts.taskDescription).toEqual(settings.prompts.taskDescription);
    // The input is not modified
    expect(settings).toEqual(makeSettings('F_1.10'));
  });

  test('skips prompts that are missing', () => {
    const result = updateDefaultPrompts({ prompts: {} as Record<string, any> }, newDefaults);
    expect(result.prompts).toEqual({});
  });

  test('migrates from F_1.10 to F_1.11', async () => {
    const result = await migrateSettings(makeSettings('F_1.10'), [f1_10, f1_11]);

    expect(result?.formatVersion).toBe('F_1.11');
    expect(result?.prompts.noneFormat.content).toBe(DEFAULT_OUTPUT_FORMAT_INSTRUCTIONS);
    expect(result?.prompts.jsonFormat.content).toBe('my custom JSON format');
    expect((result as any).steps).toBeUndefined();
  });

  test('migrates from F_1.9 through F_1.10 to F_1.11', async () => {
    const result = await migrateSettings(makeSettings('F_1.9'), [f1_10, f1_11]);

    expect(result?.formatVersion).toBe('F_1.11');
    expect((result as any).steps).toEqual(['F_1.9 -> F_1.10']);
    expect(result?.prompts.stDescription.content).toBe(DEFAULT_CHAR_CARD_DESCRIPTION);
    expect(result?.prompts.reviseXmlPrompt.content).toBe('my custom revise prompt');
  });

  test('does nothing at F_1.11', async () => {
    expect(await migrateSettings(makeSettings('F_1.11'), [f1_10, f1_11])).toBeUndefined();
  });
});

describe('removing the response format settings (F_1.11 -> F_1.12)', () => {
  const settings = {
    formatVersion: 'F_1.11',
    profileId: 'p1',
    maxContextType: 'sampler',
    maxContextValue: 16384,
    outputFormat: 'json',
    defaultPromptEngineeringMode: 'native',
    prompts: {
      xmlFormat: { label: 'XML', content: 'xml', isDefault: true },
      jsonFormat: { label: 'JSON', content: 'my JSON format', isDefault: false },
      noneFormat: { label: 'Plain', content: 'my plain format', isDefault: false },
      reviseJsonPrompt: { label: 'Revise JSON', content: 'my revise JSON', isDefault: false },
      reviseXmlPrompt: { label: 'Revise XML', content: 'my revise XML', isDefault: false },
      myPrompt: { label: 'Mine', content: 'mine', isDefault: false },
    },
  };

  test('removes the format settings and XML/JSON format templates, and keeps everything else', () => {
    expect(removeResponseFormatSettings(settings)).toEqual({
      formatVersion: 'F_1.11',
      profileId: 'p1',
      maxContextType: 'profile',
      maxContextValue: 16384,
      prompts: {
        noneFormat: settings.prompts.noneFormat,
        reviseJsonPrompt: settings.prompts.reviseJsonPrompt,
        myPrompt: settings.prompts.myPrompt,
      },
    });
  });

  test('keeps a custom context size', () => {
    expect(removeResponseFormatSettings({ ...settings, maxContextType: 'custom' }).maxContextType).toBe('custom');
    expect(removeResponseFormatSettings({ ...settings, maxContextType: 'profile' }).maxContextType).toBe('profile');
  });

  test('does not modify the input', () => {
    const copy = structuredClone(settings);
    removeResponseFormatSettings(settings);
    expect(settings).toEqual(copy);
  });
});

describe('merging the output format prompts (F_1.12 -> F_1.13)', () => {
  const makeSettings = (noneFormat: string, outputFormat = '{{activeFormatInstructions}}') => ({
    formatVersion: 'F_1.12',
    prompts: {
      noneFormat: { label: 'Plain Text Format Description', content: noneFormat, isDefault: false },
      outputFormatInstructions: { label: 'Output Format Instructions', content: outputFormat, isDefault: true },
      myPrompt: { label: 'Mine', content: 'Before\n{{ activeFormatInstructions }}\nAfter $& $1', isDefault: false },
      taskDescription: { label: 'Task', content: 'task', isDefault: true },
    },
    mainContextTemplatePresets: {
      default: {
        prompts: [
          { promptName: 'outputFormatInstructions', enabled: true, role: 'system' },
          { promptName: 'noneFormat', enabled: false, role: 'system' },
        ],
      },
    },
  });

  test('moves the plain text format into the prompts that used it and removes it', () => {
    const settings = makeSettings('My format $1');
    const result = mergeOutputFormatPrompts(settings, DEFAULT_OUTPUT_FORMAT_INSTRUCTIONS);

    expect(result.prompts).not.toHaveProperty('noneFormat');
    expect(result.prompts.outputFormatInstructions).toEqual({
      label: 'Output Format Instructions',
      content: 'My format $1',
      isDefault: false,
    });
    expect(result.prompts.myPrompt.content).toBe('Before\nMy format $1\nAfter $& $1');
    expect(result.prompts.taskDescription).toEqual(settings.prompts.taskDescription);
    expect(result.mainContextTemplatePresets.default.prompts.map((p) => p.promptName)).toEqual([
      'outputFormatInstructions',
    ]);
    // The input is not modified
    expect(settings).toEqual(makeSettings('My format $1'));
  });

  test('keeps the output format default when both prompts were default', () => {
    const result = mergeOutputFormatPrompts(
      makeSettings(DEFAULT_OUTPUT_FORMAT_INSTRUCTIONS),
      DEFAULT_OUTPUT_FORMAT_INSTRUCTIONS,
    );
    expect(result.prompts.outputFormatInstructions.content).toBe(DEFAULT_OUTPUT_FORMAT_INSTRUCTIONS);
    expect(result.prompts.outputFormatInstructions.isDefault).toBe(true);
  });

  test('keeps an output format that no longer uses the variable', () => {
    const result = mergeOutputFormatPrompts(
      makeSettings('unused', 'My own format'),
      DEFAULT_OUTPUT_FORMAT_INSTRUCTIONS,
    );
    expect(result.prompts.outputFormatInstructions.content).toBe('My own format');
    expect(result.prompts.outputFormatInstructions.isDefault).toBe(false);
  });
});
