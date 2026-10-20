import { beforeEach, describe, expect, test, vi } from 'vitest';

// chat-history.ts reads ST's chat state through the lib's config module.
const config = vi.hoisted(() => ({
  this_chid: '0' as string | undefined,
  selected_group: '' as string,
  st_echo: vi.fn(),
  regex_placement: { USER_INPUT: 1, AI_OUTPUT: 2 },
  st_getRegexedString: vi.fn((text: string) => text),
}));
vi.mock('sillytavern-utils-lib', () => ({}));
vi.mock('sillytavern-utils-lib/config', () => config);

const { chatHistoryTrimmedMessage, fitToBudget, insertChatHistory, selectMessageRange, toHistoryMessages } =
  await import('../chat-history.js');

const chat = [
  { name: 'Ann', is_user: true, mes: 'Hi' },
  { name: 'Bob', is_user: false, mes: 'Hello' },
  { name: 'Ann', is_user: true, is_system: true, mes: 'hidden' },
  { name: 'Ann', is_user: true, mes: 'How are you?' },
  { name: 'Bob', is_user: false, mes: 'Fine.' },
];
const sameText = { includeNames: false, regex: (text: string) => text };

describe('selectMessageRange', () => {
  test('selects none, all, the first or last N, or an inclusive range', () => {
    expect(selectMessageRange({ type: 'none' }, 5)).toBeNull();
    expect(selectMessageRange({ type: 'all' }, 5)).toEqual([0, 5]);
    expect(selectMessageRange({ type: 'first', first: 2 }, 5)).toEqual([0, 2]);
    expect(selectMessageRange({ type: 'last', last: 2 }, 5)).toEqual([3, 5]);
    expect(selectMessageRange({ type: 'range', range: { start: 1, end: 3 } }, 5)).toEqual([1, 4]);
  });

  test('stays inside the chat', () => {
    expect(selectMessageRange({ type: 'first', first: 10 }, 5)).toEqual([0, 5]);
    expect(selectMessageRange({ type: 'last', last: 10 }, 5)).toEqual([0, 5]);
    expect(selectMessageRange({ type: 'range', range: { start: 3, end: 99 } }, 5)).toEqual([3, 5]);
    expect(selectMessageRange({ type: 'range', range: { start: 7, end: 9 } }, 5)).toBeNull();
    expect(selectMessageRange({ type: 'all' }, 0)).toBeNull();
  });
});

describe('toHistoryMessages', () => {
  test('skips hidden messages and maps user and character roles', () => {
    expect(toHistoryMessages(chat, [0, 5], sameText)).toEqual([
      { role: 'user', content: 'Hi' },
      { role: 'assistant', content: 'Hello' },
      { role: 'user', content: 'How are you?' },
      { role: 'assistant', content: 'Fine.' },
    ]);
  });

  test('adds names in group chats', () => {
    expect(toHistoryMessages(chat, [0, 2], { ...sameText, includeNames: true })).toEqual([
      { role: 'user', content: 'Ann: Hi' },
      { role: 'assistant', content: 'Bob: Hello' },
    ]);
  });

  test("applies the outgoing-prompt regex with the message's depth, and drops messages it empties", () => {
    const regex = vi.fn((text: string, _isUser: boolean, depth: number) => (depth === 1 ? '' : `${text}!`));
    expect(toHistoryMessages(chat, [3, 5], { includeNames: false, regex })).toEqual([
      { role: 'assistant', content: 'Fine.!' },
    ]);
    expect(regex.mock.calls).toEqual([
      ['How are you?', true, 1],
      ['Fine.', false, 0],
    ]);
  });
});

describe('fitToBudget', () => {
  const messages = ['aaaa', 'bb', 'cccccc'].map((content) => ({ role: 'user' as const, content }));
  const count = async (text: string) => text.length;

  test('keeps the newest messages that fit, in chat order', async () => {
    expect(await fitToBudget(messages, 8, count)).toEqual({ messages: messages.slice(1), dropped: 1 });
    expect(await fitToBudget(messages, 100, count)).toEqual({ messages, dropped: 0 });
    expect(await fitToBudget(messages, 5, count)).toEqual({ messages: [], dropped: 3 });
  });
});

describe('insertChatHistory', () => {
  const tokenCount = async (text: string) => text.length;

  beforeEach(() => {
    config.this_chid = '0';
    config.selected_group = '';
    config.st_echo.mockReset();
    (globalThis as any).SillyTavern = { getContext: () => ({ chat, getTokenCountAsync: tokenCount }) };
  });

  const base = [
    { role: 'system' as const, content: 'Guide' },
    { role: 'system' as const, content: '' }, // placeholder
    { role: 'user' as const, content: 'Task' },
  ];

  test('replaces the placeholder with the selected chat messages', async () => {
    const result = await insertChatHistory(base, 1, {
      selection: { type: 'last', last: 2 },
      contextSize: 1000,
      maxResponseTokens: 100,
    });
    expect(result).toEqual([
      base[0],
      { role: 'user', content: 'How are you?' },
      { role: 'assistant', content: 'Fine.' },
      base[2],
    ]);
  });

  test('keeps what fits after the response tokens and the other messages, and warns', async () => {
    // 1000 - 980 response - 9 for "Guide" and "Task" = 11 tokens: "Fine." (5) fits, "How are you?" (12) doesn't
    const result = await insertChatHistory(base, 1, {
      selection: { type: 'all' },
      contextSize: 1000,
      maxResponseTokens: 980,
    });
    expect(result).toEqual([base[0], { role: 'assistant', content: 'Fine.' }, base[2]]);
    expect(config.st_echo).toHaveBeenCalledWith(
      'warning',
      expect.stringContaining('Only the last 1 of 4 chat messages fit'),
    );
  });

  test('removes the placeholder when no messages are selected or no chat is open', async () => {
    const options = { selection: { type: 'all' as const }, contextSize: 1000, maxResponseTokens: 100 };
    expect(await insertChatHistory(base, 1, { ...options, selection: { type: 'none' } })).toEqual([base[0], base[2]]);
    config.this_chid = undefined;
    expect(await insertChatHistory(base, 1, options)).toEqual([base[0], base[2]]);
  });

  test('leaves messages without a placeholder unchanged', async () => {
    const options = { selection: { type: 'all' as const }, contextSize: 1000, maxResponseTokens: 100 };
    expect(await insertChatHistory(base, -1, options)).toBe(base);
  });
});

describe('chatHistoryTrimmedMessage', () => {
  test('says how many messages were sent and how to send more', () => {
    expect(chatHistoryTrimmedMessage(2, 5, 8000)).toBe(
      'Only the last 2 of 5 chat messages fit in the 8000-token context, so the older ones were left out. ' +
        'Raise "Max Context Tokens" or lower "Max Response Tokens" to send more.',
    );
    expect(chatHistoryTrimmedMessage(0, 1, 36000)).toBe(
      'No chat messages were sent: none of the 1 fit in the 36000-token context after the response tokens and the ' +
        'other prompts. Raise "Max Context Tokens" or lower "Max Response Tokens" to send more.',
    );
  });
});
