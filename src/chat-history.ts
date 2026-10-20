import { Message } from 'sillytavern-utils-lib';
import { regex_placement, selected_group, st_echo, st_getRegexedString, this_chid } from 'sillytavern-utils-lib/config';
import { ContextToSend } from './settings.js';

export type MessageSelection = ContextToSend['messages'];

/**
 * The chat messages to include, as `[start, end)` indexes into the chat, or null for none.
 * "First" and "Last" take that many messages; "Range" is inclusive on both ends, like the UI shows it.
 */
export function selectMessageRange(selection: MessageSelection, chatLength: number): [number, number] | null {
  let start = 0;
  let end = chatLength;
  switch (selection.type) {
    case 'none':
      return null;
    case 'first':
      end = Math.min(chatLength, selection.first ?? 10);
      break;
    case 'last':
      start = Math.max(0, chatLength - (selection.last ?? 10));
      break;
    case 'range':
      start = Math.max(0, selection.range?.start ?? 0);
      end = Math.min(chatLength, (selection.range?.end ?? 10) + 1);
      break;
  }
  return start < end ? [start, end] : null;
}

/**
 * Keeps the newest messages that fit in `budget` tokens, in chat order.
 * @returns The kept messages and how many were dropped
 */
export async function fitToBudget(
  messages: Message[],
  budget: number,
  countTokens: (text: string) => Promise<number>,
): Promise<{ messages: Message[]; dropped: number }> {
  const kept: Message[] = [];
  let used = 0;
  for (let i = messages.length - 1; i >= 0; i--) {
    used += await countTokens(messages[i].content as string);
    if (used > budget) {
      break;
    }
    kept.unshift(messages[i]);
  }
  return { messages: kept, dropped: messages.length - kept.length };
}

/**
 * Turns chat messages into request messages: hidden (system) messages are skipped, user messages get the user role,
 * and names are added in group chats. The text is what ST sends to the model in a chat, with the regex scripts for
 * outgoing prompts applied.
 */
export function toHistoryMessages(
  chat: any[],
  [start, end]: [number, number],
  { includeNames, regex }: { includeNames: boolean; regex: (text: string, isUser: boolean, depth: number) => string },
): Message[] {
  const messages: Message[] = [];
  for (let i = start; i < end; i++) {
    const message = chat[i];
    if (!message || message.is_system || typeof message.mes !== 'string') {
      continue;
    }
    const text = regex(message.mes, !!message.is_user, chat.length - i - 1);
    if (!text.trim()) {
      continue;
    }
    messages.push({
      role: message.is_user ? 'user' : 'assistant',
      content: includeNames && message.name ? `${message.name}: ${text}` : text,
    });
  }
  return messages;
}

/**
 * Replaces the chat history placeholder in `messages` with the selected chat messages that fit in the context.
 * Only chat messages are added: no preset prompts, character card, World Info or other extensions' prompts.
 * The budget is the context size minus the response tokens and the other messages.
 * @param placeholderIndex Index of the placeholder in `messages`, or -1 if there is none
 * @returns A new array without the placeholder
 */
export async function insertChatHistory<T extends Message>(
  messages: T[],
  placeholderIndex: number,
  {
    selection,
    contextSize,
    maxResponseTokens,
  }: { selection: MessageSelection; contextSize: number; maxResponseTokens: number },
): Promise<T[]> {
  if (placeholderIndex === -1) {
    return messages;
  }
  const before = messages.slice(0, placeholderIndex);
  const after = messages.slice(placeholderIndex + 1);

  const context: any = SillyTavern.getContext();
  const chat: any[] = context.chat ?? [];
  const range = this_chid !== undefined || selected_group ? selectMessageRange(selection, chat.length) : null;
  if (!range) {
    return [...before, ...after];
  }

  const countTokens = async (text: string) => (text ? await context.getTokenCountAsync(text) : 0);
  let used = 0;
  for (const message of [...before, ...after]) {
    used += await countTokens(typeof message.content === 'string' ? message.content : '');
  }
  const budget = contextSize - maxResponseTokens - used;

  const history = toHistoryMessages(chat, range, {
    includeNames: !!selected_group,
    regex: (text, isUser, depth) =>
      st_getRegexedString(text, isUser ? regex_placement.USER_INPUT : regex_placement.AI_OUTPUT, {
        isPrompt: true,
        depth,
      }),
  });
  const fitted = await fitToBudget(history, budget, countTokens);
  if (fitted.dropped > 0) {
    st_echo('warning', chatHistoryTrimmedMessage(fitted.messages.length, history.length, contextSize));
  }
  return [...before, ...(fitted.messages as T[]), ...after];
}

/**
 * Explains chat messages left out because they didn't fit in the context.
 */
export function chatHistoryTrimmedMessage(kept: number, total: number, contextSize: number): string {
  const hint = 'Raise "Max Context Tokens" or lower "Max Response Tokens" to send more.';
  return kept === 0
    ? `No chat messages were sent: none of the ${total} fit in the ${contextSize}-token context after the response ` +
        `tokens and the other prompts. ${hint}`
    : `Only the last ${kept} of ${total} chat messages fit in the ${contextSize}-token context, so the older ones ` +
        `were left out. ${hint}`;
}
