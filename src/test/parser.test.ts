import { describe, test, expect } from 'vitest';
import { extractJson } from '../parsers.js';

describe('extractJson (revise session responses)', () => {
  test('parses plain JSON', () => {
    expect(extractJson('{"name": "Ann", "tags": ["a"]}')).toEqual({ name: 'Ann', tags: ['a'] });
  });

  test('parses fenced JSON after prose', () => {
    expect(extractJson('Here you go:\n```json\n{"name": "Ann", "tags": ["a"]}\n```')).toEqual({
      name: 'Ann',
      tags: ['a'],
    });
  });

  test('uses the last fenced code block', () => {
    const input = [
      '<think>',
      'I should respond like this:',
      '```json',
      '{"name": "Example"}',
      '```',
      '</think>',
      '```json',
      '{"name": "Mr Nice Guy"}',
      '```',
    ].join('\n');
    expect(extractJson(input)).toEqual({ name: 'Mr Nice Guy' });
  });

  test('parses the last JSON object after prose', () => {
    const input =
      'I could use {"name": "Bob"}, but {braces} aside, here it is:\n\n{"name": "Ann {x}", "tags": []}\nDone.';
    expect(extractJson(input)).toEqual({ name: 'Ann {x}', tags: [] });
    expect(extractJson('A stray { in prose.\n{"name": "Ann"}')).toEqual({ name: 'Ann' });
  });

  test('ignores a leading reasoning block', () => {
    expect(extractJson('<think>Maybe {"name": "Bob"}?</think>\n{"name": "Ann"}')).toEqual({ name: 'Ann' });
    expect(extractJson('<think>\nhmm\n</think>{"a": 1}')).toEqual({ a: 1 });
  });

  test('keeps escaped quotes and newlines in values', () => {
    expect(extractJson('{"response": "\\"Hi,\\" she said.\\n\\n*Waves.*"}')).toEqual({
      response: '"Hi," she said.\n\n*Waves.*',
    });
  });

  test('throws on invalid JSON', () => {
    expect(() => extractJson('{"name": "She said "no""}')).toThrow();
    expect(() => extractJson('No JSON here.')).toThrow();
  });
});
