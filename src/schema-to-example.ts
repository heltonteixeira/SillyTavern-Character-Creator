/** An example JSON response for a JSON schema, for the "Revise Session (JSON Mode)" template. */
export function schemaToExample(schema: any): string {
  return JSON.stringify(generateExample(schema), null, 2);
}

function pickFirstDefined<T>(...vals: T[]): T | undefined {
  for (const v of vals) if (v !== undefined) return v;
  return undefined;
}

function nonNullType(t: any): any {
  // JSON Schema may specify ["string","null"]
  if (Array.isArray(t)) return t.find((x) => x !== 'null') ?? t[0];
  return t;
}

// Returns 0, or the closest value to it that satisfies the schema's bounds.
function numberExample(schema: any, isInteger: boolean): number {
  let value = 0;
  if (typeof schema.minimum === 'number' && value < schema.minimum) {
    value = isInteger ? Math.ceil(schema.minimum) : schema.minimum;
  }
  if (typeof schema.exclusiveMinimum === 'number' && value <= schema.exclusiveMinimum) {
    value = isInteger ? Math.floor(schema.exclusiveMinimum) + 1 : schema.exclusiveMinimum + 1;
  }
  if (typeof schema.maximum === 'number' && value > schema.maximum) {
    value = isInteger ? Math.floor(schema.maximum) : schema.maximum;
  }
  if (typeof schema.exclusiveMaximum === 'number' && value >= schema.exclusiveMaximum) {
    value = isInteger ? Math.ceil(schema.exclusiveMaximum) - 1 : schema.exclusiveMaximum - 1;
  }
  return value;
}

function generateExample(schema: any): any {
  if (!schema || typeof schema !== 'object') return null;

  // Prefer explicit example(s) or default first.
  const fromExamples = Array.isArray(schema.examples) ? schema.examples[0] : undefined;
  const preferred = pickFirstDefined(schema.example, fromExamples, schema.default);
  if (preferred !== undefined) return preferred;

  // Handle enum / const
  if (schema.const !== undefined) return schema.const;
  if (Array.isArray(schema.enum) && schema.enum.length) return schema.enum[0];

  // Handle anyOf/oneOf by taking the first option.
  const firstAlt = Array.isArray(schema.anyOf)
    ? schema.anyOf[0]
    : Array.isArray(schema.oneOf)
      ? schema.oneOf[0]
      : undefined;
  if (firstAlt) return generateExample(firstAlt);

  // Unwrap nullable type arrays like ["string","null"]
  const t = nonNullType(schema.type);

  switch (t) {
    case 'object': {
      const obj: Record<string, any> = {};
      const props = schema.properties || {};
      for (const key of Object.keys(props)) {
        obj[key] = generateExample(props[key]);
      }
      // additionalProperties
      if (schema.additionalProperties && typeof schema.additionalProperties === 'object') {
        obj.additionalProperty = generateExample(schema.additionalProperties);
      }
      return obj;
    }

    case 'array': {
      const itemSchema = schema.items ?? {};
      return [generateExample(itemSchema)];
    }

    case 'string': {
      // Try format-based sensible samples
      switch (schema.format) {
        case 'date-time':
          return new Date(0).toISOString();
        case 'date':
          return '1970-01-01';
        case 'time':
          return '00:00:00';
        case 'email':
          return 'user@example.com';
        case 'uri':
        case 'url':
          return 'https://example.com';
        case 'uuid':
          return '00000000-0000-0000-0000-000000000000';
        default:
          return schema.title || schema.description || 'string';
      }
    }

    case 'integer':
      return numberExample(schema, true);

    case 'number':
      return numberExample(schema, false);

    case 'boolean':
      return false;

    case 'null':
      return null;

    default: {
      // If no explicit type, infer from sub-keys
      if (schema.properties || schema.additionalProperties) return generateExample({ ...schema, type: 'object' });
      if (schema.items) return generateExample({ ...schema, type: 'array' });
      return null;
    }
  }
}
