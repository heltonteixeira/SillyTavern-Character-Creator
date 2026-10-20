import { describe, test, expect } from 'vitest';
import { mergeContinuation, parseFieldResponse } from '../parsers.js';

describe('parseFieldResponse (plain text)', () => {
  test('returns the text, trimmed', () => {
    expect(parseFieldResponse('This is a test message.')).toBe('This is a test message.');
    expect(parseFieldResponse('  This has whitespace.  ')).toBe('This has whitespace.');
  });

  test('handles empty input', () => {
    expect(parseFieldResponse('')).toBe('');
    expect(parseFieldResponse('   ')).toBe('');
    expect(parseFieldResponse('```\n```')).toBe('');
  });

  test('unwraps a response that is a single code block', () => {
    expect(parseFieldResponse('```\nThis is inside a code block.\n```')).toBe('This is inside a code block.');
    expect(parseFieldResponse('```text\nThis is inside a text code block.\n```')).toBe(
      'This is inside a text code block.',
    );
  });

  test('keeps text around code blocks', () => {
    const input = 'Intro text\n```\nsnippet\n```\nOutro text';
    expect(parseFieldResponse(input)).toBe(input);
  });

  test('does not unwrap several code blocks', () => {
    const input = '```\none\n```\nmiddle\n```\ntwo\n```';
    expect(parseFieldResponse(input)).toBe(input);
  });

  test('keeps markup verbatim', () => {
    const input = '<START>\n{{user}}: "Hi & bye"\n{{char}}: <b>Bye.</b>';
    expect(parseFieldResponse(input)).toBe(input);
  });

  test('removes a leading reasoning block', () => {
    expect(parseFieldResponse('<think>\nPlan it.\n</think>\n\nA tall knight.')).toBe('A tall knight.');
    // Cut off while thinking: nothing is left
    expect(parseFieldResponse('<thinking>Still planning')).toBe('');
  });
});

describe('mergeContinuation (plain text)', () => {
  const existing = 'She said "hi" from C:\\temp';
  const ended = 'She left.';

  test('appends a continuation of the prefill', () => {
    expect(mergeContinuation(existing, ' and left.')).toBe(`${existing} and left.`);
    expect(mergeContinuation(`  ${existing}\n`, ' and left.')).toBe(`${existing} and left.`);
  });

  test('an empty reply keeps the text unchanged', () => {
    expect(mergeContinuation(existing, '')).toBe(existing);
    expect(mergeContinuation(existing, '  \n')).toBe(existing);
  });

  test('does not duplicate a reply that repeats the text', () => {
    expect(mergeContinuation(existing, `${existing} and left.`)).toBe(`${existing} and left.`);
    expect(mergeContinuation(existing, `\`\`\`\n${existing} and left.\n\`\`\``)).toBe(`${existing} and left.`);
  });

  test('ignores a leading reasoning block', () => {
    expect(mergeContinuation(existing, '<think>Continue it.</think> and left.')).toBe(`${existing} and left.`);
  });

  test('adds the missing space when a continuation starts a new sentence', () => {
    expect(mergeContinuation('She waves.', 'Then she leaves.')).toBe('She waves. Then she leaves.');
    expect(mergeContinuation('*She waves.*', 'Then she leaves.')).toBe('*She waves.* Then she leaves.');
    // The rest of a word, a closing quote or a number is joined as is
    expect(mergeContinuation('She wa', 'ves.')).toBe('She waves.');
    expect(mergeContinuation('She says "Hi.', '" Then leaves.')).toBe('She says "Hi." Then leaves.');
    expect(mergeContinuation('Version 2.', '5 is out.')).toBe('Version 2.5 is out.');
  });

  test('adds the missing space before a new quote or action, but not before a closing one', () => {
    expect(mergeContinuation('She steps into the clearing.', '"Another stray," she says.')).toBe(
      'She steps into the clearing. "Another stray," she says.',
    );
    expect(mergeContinuation('*She waves.*', '*Then she leaves.*')).toBe('*She waves.* *Then she leaves.*');
    expect(mergeContinuation('She smiles.', '“Welcome.”')).toBe('She smiles. “Welcome.”');
    // An open quote or action is closed without a space
    expect(mergeContinuation('She says "Hi.', '" Then leaves.')).toBe('She says "Hi." Then leaves.');
    expect(mergeContinuation('*She waves.', '* Then leaves.')).toBe('*She waves.* Then leaves.');
    expect(mergeContinuation('"Hi." She waves. "Bye.', '"')).toBe('"Hi." She waves. "Bye."');
  });

  test('keeps a line break the model starts with', () => {
    expect(mergeContinuation(ended, '\n\nA new paragraph.')).toBe(`${ended}\n\nA new paragraph.`);
  });

  test('always keeps the existing text', () => {
    const replies = ['New.', '\nmore\n```', '```\nNew.\n```', '', '{"response": "New."}', '<response>New.</response>'];
    for (const text of [existing, ended, '```\ncode', 'Ends with \\', 'Ends with ]]']) {
      for (const reply of replies) {
        expect(mergeContinuation(`  ${text}\n`, reply).startsWith(text), reply).toBe(true);
      }
    }
  });
});
