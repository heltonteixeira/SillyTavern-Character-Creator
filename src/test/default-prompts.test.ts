import { describe, expect, test } from 'vitest';
import * as Handlebars from 'handlebars';
import { z } from 'zod';
import { DEFAULT_CHAR_CARD_DESCRIPTION, DEFAULT_NONE_FORMAT_DESC, DEFAULT_REVISE_JSON_PROMPT } from '../constants.js';
import { extractJson, parseFieldResponse } from '../parsers.js';
import { schemaToExample } from '../schema-to-example.js';

describe('default prompts', () => {
  test('the output format asks for the plain field text without code blocks', () => {
    expect(DEFAULT_NONE_FORMAT_DESC).not.toContain('```');
    expect(DEFAULT_NONE_FORMAT_DESC).not.toContain('triple backticks');
    const example = DEFAULT_NONE_FORMAT_DESC.split('Example:\n')[1];
    expect(parseFieldResponse(example)).toBe('Generated content for the field goes here.');
  });

  test('example dialogue format starts each example with <START>', () => {
    const section = DEFAULT_CHAR_CARD_DESCRIPTION.split('#### 6. Example Dialogue')[1].split('#### 7.')[0];
    const exampleLines = section.split('\n').map((line) => line.trim());
    const userLines = exampleLines.filter((line) => line.startsWith('{{user}}:'));

    expect(userLines).toHaveLength(2);
    for (const userLine of userLines) {
      expect(exampleLines[exampleLines.indexOf(userLine) - 1]).toBe('<START>');
    }
  });

  test('the revise JSON example parses back and matches the schema', () => {
    const schema = z.object({
      justification: z.string().describe('Why the changes were made.'),
      response: z.string().describe('The new content & more.'),
    });
    const jsonSchema = z.toJSONSchema(schema);
    const prompt = Handlebars.compile(DEFAULT_REVISE_JSON_PROMPT, { noEscape: true, strict: true })({
      schema: JSON.stringify(jsonSchema, null, 2),
      example_response: schemaToExample(jsonSchema),
    });

    const example = prompt.split('**EXAMPLE OF A PERFECT RESPONSE:**')[1];
    expect(schema.parse(extractJson(example))).toEqual({
      justification: 'Why the changes were made.',
      response: 'The new content & more.',
    });
  });
});
