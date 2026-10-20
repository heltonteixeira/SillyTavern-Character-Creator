import { ExtensionSettingsManager, Message } from 'sillytavern-utils-lib';
import { parseFieldResponse, mergeContinuation } from './parsers.js';
import { Character } from 'sillytavern-utils-lib/types';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import { name1, st_echo } from 'sillytavern-utils-lib/config';
import { ExtensionSettings, MessageRole, settingsManager } from './settings.js';

import * as Handlebars from 'handlebars';
import './handlebars-helpers.js';
import { protectMacros, renderPrompt } from './prompt-render.js';
import { sendRawRequest } from './request.js';
import { emptyResponseMessage, isEmptyResponse, truncatedTextWarning } from './llm-response.js';
import { buildFieldList, CHARACTER_FIELDS, CharacterFieldName, getFieldLabel, selectSentFields } from './field-list.js';
import { getContextSize, resolveConnection } from './connection.js';
import { insertChatHistory, MessageSelection } from './chat-history.js';

export const globalContext = SillyTavern.getContext();

export { CHARACTER_FIELDS, type CharacterFieldName };

export const CHARACTER_LABELS: Record<CharacterFieldName, string> = {
  name: 'Name',
  description: 'Description',
  personality: 'Personality',
  scenario: 'Scenario',
  first_mes: 'First Message',
  mes_example: 'Example Dialogue',
};

export interface CharacterField {
  prompt: string;
  value: string;
  label: string;
}

export interface Session {
  selectedCharacterIndexes: string[];
  selectedWorldNames: string[];
  fields: Record<string, CharacterField>;
  draftFields: Record<string, CharacterField>;
  lastLoadedCharacterId: string;
}

/**
 * Sent before the prefill of a continue request, so the model knows to add text instead of closing or rewriting it.
 */
export const CONTINUE_INSTRUCTION =
  'Continue the current text of the {{targetField}} field from exactly where it stops. Output only the new text that comes after it. Do not repeat, rewrite or summarize the existing text.';

// @ts-ignore
const dumbSettings = new ExtensionSettingsManager<ExtensionSettings>('dumb', {}).getSettings();

export interface RunCharacterFieldGenerationParams {
  profileId: string;
  userPrompt: string;
  /** The chat messages to send, for the chat history block */
  messageSelection: MessageSelection;
  continueFrom?: string;
  session: Session;
  allCharacters: Character[];
  entriesGroupByWorldName: Record<string, WIEntry[]>;
  promptSettings: typeof dumbSettings.prompts;
  mainContextList: {
    promptName: string;
    role: MessageRole;
  }[];
  includeUserMacro: boolean;
  maxResponseToken: number;
  targetField: CharacterFieldName | string;
}

export async function runCharacterFieldGeneration({
  profileId,
  userPrompt,
  messageSelection,
  continueFrom,
  session,
  allCharacters,
  entriesGroupByWorldName,
  promptSettings,
  mainContextList,
  includeUserMacro,
  maxResponseToken,
  targetField,
}: RunCharacterFieldGenerationParams): Promise<string> {
  const connection = resolveConnection(profileId);

  const templateData: Record<string, any> = {};

  templateData['char'] = protectMacros(session.fields.name.value) || '{{char}}';
  templateData['user'] = includeUserMacro && name1 ? name1 : '{{user}}';
  templateData['persona'] = '{{persona}}'; // ST going to replace this with the actual persona description

  templateData['targetField'] = targetField;
  // User-authored content is sent verbatim, see prompt-render.ts
  templateData['targetLabel'] = protectMacros(getFieldLabel(targetField, session.fields, session.draftFields));
  templateData['userInstructions'] = protectMacros(userPrompt.trim());
  templateData['fieldSpecificInstructions'] = protectMacros(
    session.draftFields[targetField]?.prompt ?? session.fields[targetField as CharacterFieldName]?.prompt,
  );

  // Add Definitions of Selected Characters (if enabled and characters selected)
  {
    const charactersData: Array<Character> = [];
    session.selectedCharacterIndexes.forEach((charIndex) => {
      const charIndexNumber = parseInt(charIndex);
      const char = allCharacters[charIndexNumber];
      if (char) {
        charactersData.push(char);
      }
    });

    templateData['characters'] = protectMacros(charactersData);
  }

  // Add Definitions of Selected Lorebooks (World Info)
  {
    const lorebooksData: Record<string, WIEntry[]> = {};
    Object.entries(entriesGroupByWorldName)
      .filter(
        ([worldName, entries]) =>
          entries.length > 0 &&
          session.selectedWorldNames.includes(worldName) &&
          entries.some((entry) => !entry.disable),
      )
      .forEach(([worldName, entries]) => {
        lorebooksData[worldName] = entries.filter((entry) => !entry.disable);
      });

    templateData['lorebooks'] = protectMacros(lorebooksData);
  }

  // Add Current Field Values (if enabled)
  {
    // Separate core fields, alternate greetings, and draft fields for template context
    const coreFields: Record<string, string> = {};
    const alternateGreetingsFields: Record<string, string> = {};
    const draftFields: Record<string, string> = {};

    const dontSendOtherGreetings = settingsManager.getSettings().contextToSend.dontSendOtherGreetings;
    const sentFields = selectSentFields(session.fields, targetField, dontSendOtherGreetings);

    Object.entries(sentFields).forEach(([fieldName, field]) => {
      if (CHARACTER_FIELDS.includes(fieldName as CharacterFieldName)) {
        coreFields[field.label] = field.value;
      } else if (fieldName.startsWith('alternate_greetings_')) {
        alternateGreetingsFields[fieldName] = field.value;
      }
    });

    Object.entries(session.draftFields || {}).forEach(([_fieldName, field]) => {
      draftFields[field.label] = field.value;
    });

    const allFields: Record<string, any> = {};
    if (Object.keys(coreFields).length > 0) {
      allFields.core = coreFields;
    }
    if (Object.keys(alternateGreetingsFields).length > 0) {
      allFields.alternate_greetings = alternateGreetingsFields;
    }
    if (Object.keys(draftFields).length > 0) {
      allFields.draft = draftFields;
    }

    templateData['fields'] = protectMacros(allFields);
    // Every sent field with its ID and label, see FieldListItem in field-list.ts
    templateData['fieldList'] = protectMacros(buildFieldList(sentFields, session.draftFields));
  }

  let messages: Message[] = [];
  let chatHistoryIndex = -1;
  {
    for (const mainContext of mainContextList) {
      // Chat history is exception, since it is not a template. It is filled in once the other messages are known.
      if (mainContext.promptName === 'chatHistory') {
        chatHistoryIndex = messages.length;
        messages.push({ role: 'system', content: '' });
        continue;
      }

      let newTemplateData = structuredClone(templateData);
      if (mainContext.promptName === 'stDescription') {
        newTemplateData['char'] = '{{char}}';
        newTemplateData['user'] = '{{user}}';
      }

      const prompt = promptSettings[mainContext.promptName];
      if (!prompt) {
        continue;
      }
      const message: Message = {
        role: mainContext.role,
        content: renderPrompt(prompt.content, newTemplateData, globalContext.substituteParams),
      };
      if (message.content) {
        messages.push(message);
      }
    }

    // If we're continuing from previous content, ask for a continuation and add the content as an assistant message
    if (continueFrom) {
      messages.push({
        role: 'user',
        content: Handlebars.compile(CONTINUE_INSTRUCTION, { noEscape: true })(templateData),
      });
      messages.push({
        role: 'assistant',
        content: continueFrom.trim(),
      });
    }
  }

  messages = await insertChatHistory(messages, chatHistoryIndex, {
    selection: messageSelection,
    contextSize: getContextSize(connection, settingsManager.getSettings()),
    maxResponseTokens: maxResponseToken,
  });

  const response = await sendRawRequest(profileId, messages, maxResponseToken);
  // An empty reply to a continue request only means nothing was added, unless it was cut off.
  if (isEmptyResponse(response) && (!continueFrom || response.truncated)) {
    throw new Error(emptyResponseMessage(response));
  }
  if (response.truncated) {
    st_echo('warning', truncatedTextWarning(response));
  }

  // For "continue" requests, the model should only return the new part, but some models ignore the prefill.
  if (continueFrom) {
    const continued = mergeContinuation(continueFrom, response.text);
    if (continued.trim() === continueFrom.trim()) {
      st_echo('warning', "The model didn't add any text. Try again or use a different model.");
      return continueFrom;
    }
    return continued;
  }

  return parseFieldResponse(response.text);
}
