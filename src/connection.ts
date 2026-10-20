/**
 * The connection profile a request goes through, and what CREC takes from it.
 *
 * A profile decides where a request goes and how it is sampled: API, model, endpoint, secret, proxy, prompt
 * post-processing, the preset's samplers and context size, the instruct template (Text Completion) and the reasoning
 * template (to parse responses). Everything CREC sends as prompt text comes from CREC's own templates: the preset's
 * prompts, stop strings, Start Reply With and regex preset are not used.
 */
export interface Connection {
  profile: any;
  /** `openai` (Chat Completion) or `textgenerationwebui` (Text Completion) */
  mainApi: string;
  /** The Chat Completion source, e.g. `claude` */
  source?: string;
  /** The profile's settings preset, if it has one that exists */
  preset?: any;
}

/**
 * Finds a connection profile and the API and preset it uses.
 * @throws If the profile doesn't exist or its API isn't supported
 */
export function resolveConnection(profileId: string, context: any = SillyTavern.getContext()): Connection {
  if (!profileId) {
    throw new Error('No connection profile selected.');
  }
  const service = context.ConnectionManagerRequestService;
  // Both throw a readable error, e.g. "Profile not found (ID: ...)"
  const profile = service.getProfile(profileId);
  const apiMap = service.validateProfile(profile);
  const mainApi: string = apiMap.selected;
  const preset = profile.preset
    ? context.getPresetManager?.(mainApi)?.getCompletionPresetByName(profile.preset)
    : undefined;
  return { profile, mainApi, source: apiMap.source, preset };
}

/**
 * The context size of the profile's preset, or undefined if it doesn't set one.
 */
export function getPresetContextSize(connection: Connection): number | undefined {
  const size = connection.mainApi === 'openai' ? connection.preset?.openai_max_context : connection.preset?.max_length;
  return typeof size === 'number' && size > 0 ? size : undefined;
}

/**
 * The context size CREC fills: the custom size, or the profile preset's size. Falls back to ST's current context size
 * when the preset has none.
 */
export function getContextSize(
  connection: Connection,
  settings: { maxContextType: string; maxContextValue: number },
  context: any = SillyTavern.getContext(),
): number {
  if (settings.maxContextType === 'custom' && settings.maxContextValue > 0) {
    return settings.maxContextValue;
  }
  return getPresetContextSize(connection) ?? Number(context.maxContext);
}
