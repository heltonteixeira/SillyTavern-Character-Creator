import { describe, expect, test, vi } from 'vitest';
import { z } from 'zod';
import { schemaToExample } from '../schema-to-example.js';
import { createGlobalResponseSchema, FieldSpecificResponseSchema } from '../revise-types.js';

// `makeStructuredRequest` pulls in SillyTavern runtime modules, so replace them with minimal stubs.
const mockSettings = vi.hoisted(() => ({ prompts: {} as Record<string, { label: string; content: string }> }));
vi.mock('sillytavern-utils-lib', () => ({}));
vi.mock('sillytavern-utils-lib/config', () => ({ st_echo: vi.fn() }));
vi.mock('../settings.js', () => ({ settingsManager: { getSettings: () => mockSettings } }));

const { makeStructuredRequest } = await import('../request.js');

const globalSchema = createGlobalResponseSchema(['description', 'personality', 'draft_1'], ['draft_1']);
const globalJsonSchema = z.toJSONSchema(globalSchema);

describe('revise schema examples', () => {
  test('JSON example for the global schema passes validation', () => {
    const example = JSON.parse(schemaToExample(globalJsonSchema));
    expect(example.greetings_to_change[0].index).toBe(1);
    expect(example.greetings_to_remove).toEqual([1]);
    expect(globalSchema.safeParse(example).success).toBe(true);
  });

  test('example for the field schema passes validation', () => {
    const jsonSchema = z.toJSONSchema(FieldSpecificResponseSchema);
    expect(FieldSpecificResponseSchema.safeParse(JSON.parse(schemaToExample(jsonSchema))).success).toBe(true);
  });

  test('honors numeric bounds', () => {
    expect(schemaToExample({ type: 'integer', minimum: 3 })).toBe('3');
    expect(schemaToExample({ type: 'integer', exclusiveMinimum: 0 })).toBe('1');
    expect(schemaToExample({ type: 'integer', exclusiveMinimum: 0.5 })).toBe('1');
    expect(schemaToExample({ type: 'number', exclusiveMinimum: 0 })).toBe('1');
    expect(schemaToExample({ type: 'integer', maximum: -2 })).toBe('-2');
    expect(schemaToExample({ type: 'integer', minimum: -5, maximum: 5 })).toBe('0');
  });
});

describe('revise prompt template rendering', () => {
  test('names the template when it uses an unknown variable', async () => {
    mockSettings.prompts.reviseJsonPrompt = {
      label: 'Revise Session (JSON Mode)',
      content: 'Hello {{char}}\n{{example_response}}',
    };
    // The native request is rejected, so the template is used
    (globalThis as any).SillyTavern = {
      getContext: () => ({
        ConnectionManagerRequestService: {
          getProfile: (id: string) => ({ id, name: 'Test' }),
          validateProfile: () => ({ selected: 'openai', source: 'custom' }),
          sendRequest: vi.fn().mockRejectedValue(new Error('Bad request')),
        },
      }),
    };

    const request = makeStructuredRequest('profile', [], globalSchema, 'GlobalRevision', 100);
    await expect(request).rejects.toThrow('Revise Session (JSON Mode)');
    await expect(request).rejects.toThrow('"char" not defined');
    await expect(request).rejects.toThrow('example_response, schema');
  });
});
