import { describe, expect, test } from 'vitest';
import { z } from 'zod';
import { parseResponse } from '../parsers.js';
import { createGlobalResponseSchema } from '../revise-types.js';

const globalSchema = createGlobalResponseSchema(['description', 'personality', 'draft_1'], ['draft_1']);
const globalJsonSchema = z.toJSONSchema(globalSchema);

function parseGlobalXml(xml: string) {
  const parsed = parseResponse(xml, 'xml', { schema: globalJsonSchema });
  const result = globalSchema.safeParse(parsed);
  expect(result.success, JSON.stringify(result.error?.issues)).toBe(true);
  return result.data;
}

describe('revise XML parsing with schema', () => {
  test('parses repeated elements as arrays', () => {
    const xml = [
      '```xml',
      '<root>',
      '<justification><![CDATA[Updated two fields.]]></justification>',
      '<fields_to_change><field>description</field><value><![CDATA[New description]]></value></fields_to_change>',
      '<fields_to_change><field>personality</field><value><![CDATA[New personality]]></value></fields_to_change>',
      '<greetings_to_add><![CDATA[Hello]]></greetings_to_add>',
      '<greetings_to_add><![CDATA[Hi]]></greetings_to_add>',
      '<greetings_to_remove>2</greetings_to_remove>',
      '<greetings_to_remove>3</greetings_to_remove>',
      '</root>',
      '```',
    ].join('\n');

    expect(parseGlobalXml(xml)).toEqual({
      justification: 'Updated two fields.',
      fields_to_change: [
        { field: 'description', value: 'New description' },
        { field: 'personality', value: 'New personality' },
      ],
      greetings_to_add: ['Hello', 'Hi'],
      greetings_to_remove: [2, 3],
    });
  });

  test('parses a single repeated element as an array', () => {
    const xml =
      '<root><justification>x</justification>' +
      '<fields_to_change><field>description</field><value>y</value></fields_to_change>' +
      '<greetings_to_add>Hello</greetings_to_add>' +
      '<greetings_to_remove>2</greetings_to_remove>' +
      '<greetings_to_change><index>1</index><value>Changed</value></greetings_to_change>' +
      '</root>';

    expect(parseGlobalXml(xml)).toEqual({
      justification: 'x',
      fields_to_change: [{ field: 'description', value: 'y' }],
      greetings_to_add: ['Hello'],
      greetings_to_remove: [2],
      greetings_to_change: [{ index: 1, value: 'Changed' }],
    });
  });

  test('unwraps a single <item> in arrays', () => {
    const xml =
      '<root><justification>x</justification>' +
      '<fields_to_change><item><field>description</field><value>y</value></item></fields_to_change>' +
      '<greetings_to_add><item>Hello</item></greetings_to_add>' +
      '<greetings_to_remove><item>2</item></greetings_to_remove>' +
      '<draft_fields_to_remove><item>draft_1</item></draft_fields_to_remove>' +
      '</root>';

    expect(parseGlobalXml(xml)).toEqual({
      justification: 'x',
      fields_to_change: [{ field: 'description', value: 'y' }],
      greetings_to_add: ['Hello'],
      greetings_to_remove: [2],
      draft_fields_to_remove: ['draft_1'],
    });
  });

  test('unwraps multiple <item> elements in arrays', () => {
    const xml =
      '<root><justification>x</justification>' +
      '<fields_to_change>' +
      '<item><field>description</field><value><![CDATA[a]]></value></item>' +
      '<item><field>personality</field><value><![CDATA[b]]></value></item>' +
      '</fields_to_change>' +
      '<greetings_to_add><item>Hello</item><item>Hi</item></greetings_to_add>' +
      '<greetings_to_remove><item>1</item><item>3</item></greetings_to_remove>' +
      '<greetings_to_change><item><index>2</index><value>Changed</value></item></greetings_to_change>' +
      '</root>';

    expect(parseGlobalXml(xml)).toEqual({
      justification: 'x',
      fields_to_change: [
        { field: 'description', value: 'a' },
        { field: 'personality', value: 'b' },
      ],
      greetings_to_add: ['Hello', 'Hi'],
      greetings_to_remove: [1, 3],
      greetings_to_change: [{ index: 2, value: 'Changed' }],
    });
  });

  test('accepts bare ampersands in text', () => {
    const xml =
      '<root><justification>ok &amp; done</justification>' +
      '<fields_to_change><field>description</field><value>Tom & Jerry &#38; friends</value></fields_to_change>' +
      '</root>';

    expect(parseGlobalXml(xml)).toEqual({
      justification: 'ok & done',
      fields_to_change: [{ field: 'description', value: 'Tom & Jerry & friends' }],
    });
  });

  test('keeps CDATA content verbatim', () => {
    const xml =
      '<root><justification>ok</justification>' +
      '<fields_to_change><field>description</field><value><![CDATA[Tom & Jerry &amp; <b>friends</b>]]></value></fields_to_change>' +
      '</root>';

    expect(parseGlobalXml(xml)).toEqual({
      justification: 'ok',
      fields_to_change: [{ field: 'description', value: 'Tom & Jerry &amp; <b>friends</b>' }],
    });
  });

  test('still rejects malformed XML', () => {
    const xml = '<root><justification>ok</justification><fields_to_change><field>description</field></root>';
    expect(() => parseResponse(xml, 'xml', { schema: globalJsonSchema })).toThrow('Model response is not valid XML');
  });
});
