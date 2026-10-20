export interface SettingsMigration {
  /** Format version to migrate from, or `'*'` to migrate from any older version. */
  from: string;
  to: string;
  action(previous: any): any;
}

/**
 * Compares format versions like `F_1.9` and `F_1.10` by their numeric parts, so `F_1.10` is newer than `F_1.9`.
 * Returns a negative number if `a` is older than `b`, a positive number if newer, 0 if equal.
 */
export function compareFormatVersions(a: string, b: string): number {
  const partsA = a.match(/\d+/g)?.map(Number) ?? [];
  const partsB = b.match(/\d+/g)?.map(Number) ?? [];
  for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
    const diff = (partsA[i] ?? 0) - (partsB[i] ?? 0);
    if (diff !== 0) return diff;
  }
  return 0;
}

/**
 * Runs migrations starting from `settings.formatVersion`, like the strategy loop of `ExtensionSettingsManager`,
 * but compares versions numerically (the manager compares them as strings, so `'F_1.10' > 'F_1.9'` is false).
 *
 * A migration whose `from` matches the current version wins; otherwise the first `'*'` migration newer than the
 * current version runs. Returns the migrated copy, or `undefined` if no migration applied.
 */
export async function migrateSettings<T extends { formatVersion: string }>(
  settings: T,
  migrations: SettingsMigration[],
): Promise<T | undefined> {
  let result: T | undefined;
  let current = settings.formatVersion;
  while (true) {
    const isNewer = (migration: SettingsMigration) => compareFormatVersions(migration.to, current) > 0;
    const migration =
      migrations.find((m) => m.from === current && isNewer(m)) ?? migrations.find((m) => m.from === '*' && isNewer(m));
    if (!migration) return result;

    result = await migration.action(result ?? structuredClone(settings));
    result!.formatVersion = migration.to;
    current = migration.to;
  }
}

/**
 * Sets each prompt in `defaults` to its new default content, unless the user edited it (`isDefault` is false).
 * Returns an updated copy, `settings` is not modified.
 */
export function updateDefaultPrompts<T extends { prompts: Record<string, any> }>(
  settings: T,
  defaults: Record<string, string>,
): T {
  const prompts = { ...settings.prompts };
  for (const [key, content] of Object.entries(defaults)) {
    if (prompts[key]?.isDefault) {
      prompts[key] = { ...prompts[key], content };
    }
  }
  return { ...settings, prompts };
}

/**
 * F_1.11 -> F_1.12: the response format is chosen by the task (plain text for fields, JSON for revise sessions), so the
 * format settings and the XML/JSON format templates go. "Use active preset" for the context size depended on ST's
 * current settings; the profile's preset replaces it. Returns an updated copy.
 */
export function removeResponseFormatSettings<T extends Record<string, any>>(settings: T): T {
  const { outputFormat, defaultPromptEngineeringMode, ...rest } = settings;
  const { xmlFormat, jsonFormat, reviseXmlPrompt, ...prompts } = settings.prompts ?? {};
  return {
    ...rest,
    maxContextType: settings.maxContextType === 'custom' ? 'custom' : 'profile',
    prompts,
  } as unknown as T;
}

/**
 * F_1.12 -> F_1.13: "Output Format Instructions" was only `{{activeFormatInstructions}}`, which pulled in the plain text
 * format prompt (`noneFormat`). Its text now goes where that variable was, in every prompt that uses it, and `noneFormat`
 * goes, from the templates too. Returns an updated copy.
 */
export function mergeOutputFormatPrompts<T extends Record<string, any>>(settings: T, defaultContent: string): T {
  const { noneFormat, ...prompts } = settings.prompts ?? {};
  const formatText: string = noneFormat?.content ?? defaultContent;
  const variable = /\{\{\{?\s*activeFormatInstructions\s*\}?\}\}/g;
  for (const [key, prompt] of Object.entries<any>(prompts)) {
    if (typeof prompt?.content === 'string' && prompt.content.match(variable)) {
      prompts[key] = { ...prompt, content: prompt.content.replace(variable, () => formatText) };
    }
  }
  if (prompts.outputFormatInstructions) {
    prompts.outputFormatInstructions = {
      ...prompts.outputFormatInstructions,
      isDefault: prompts.outputFormatInstructions.content === defaultContent,
    };
  }
  const mainContextTemplatePresets = Object.fromEntries(
    Object.entries<any>(settings.mainContextTemplatePresets ?? {}).map(([name, preset]) => [
      name,
      { ...preset, prompts: (preset.prompts ?? []).filter((p: any) => p.promptName !== 'noneFormat') },
    ]),
  );
  return { ...settings, prompts, mainContextTemplatePresets } as T;
}
