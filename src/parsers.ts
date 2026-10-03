import { XMLParser, XMLValidator } from 'fast-xml-parser';

const xmlParser = new XMLParser({
  ignoreAttributes: true,
  textNodeName: '#text',
  trimValues: true,
  allowBooleanAttributes: true,
});

// Keeps tag values as strings so they can be coerced per schema (e.g. "007" stays "007" for string fields).
const schemaXmlParser = new XMLParser({
  ignoreAttributes: true,
  textNodeName: '#text',
  trimValues: true,
  allowBooleanAttributes: true,
  parseTagValue: false,
});

export interface ParseOptions {
  schema?: any;
}

function coerceValue(value: any, schema: any): any {
  if (schema?.type === 'string' && typeof value !== 'string') {
    return String(value);
  }
  if ((schema?.type === 'integer' || schema?.type === 'number') && typeof value === 'string' && value.trim() !== '') {
    const num = Number(value);
    return Number.isFinite(num) ? num : value;
  }
  if (schema?.type === 'boolean' && (value === 'true' || value === 'false')) {
    return value === 'true';
  }
  return value;
}

function ensureArray(data: any, schema: any) {
  if (!schema || !data || !schema.properties) {
    return;
  }

  for (const key in schema.properties) {
    if (!data.hasOwnProperty(key)) continue;

    const propSchema = schema.properties[key];
    let propData = data[key];

    // Ensure the property is an array if the schema requires it and it's not one already.
    if (propSchema.type === 'array' && !Array.isArray(propData)) {
      // Unwrap <item> wrappers, e.g. <list><item>a</item><item>b</item></list>.
      if (
        typeof propData === 'object' &&
        propData !== null &&
        Object.keys(propData).length === 1 &&
        'item' in propData &&
        !propSchema.items?.properties?.item
      ) {
        propData = propData.item;
      }
      propData = Array.isArray(propData) ? propData : [propData];
    }
    if (propSchema.type === 'array') {
      // An empty tag (e.g. <list></list> or <list/>) means an empty list, not a list with an empty item.
      propData = propData.filter((item: any) => item !== '');
      data[key] = propData;
    }

    // Recurse into objects or arrays of objects.
    if (propSchema.type === 'object' && typeof propData === 'object' && propData !== null) {
      ensureArray(propData, propSchema);
    } else if (propSchema.type === 'array' && propSchema.items?.type === 'object' && Array.isArray(propData)) {
      propData.forEach((item) => ensureArray(item, propSchema.items));
    }

    // Coerce types to match schema, for both single properties and items within an array.
    if (propSchema.type === 'array') {
      data[key] = propData.map((item: any) => coerceValue(item, propSchema.items));
    } else {
      data[key] = coerceValue(propData, propSchema);
    }
  }
}

// Escapes `&` that doesn't start an entity, leaving CDATA sections untouched.
function escapeBareAmpersands(xml: string): string {
  return xml
    .split(/(<!\[CDATA\[[\s\S]*?\]\]>)/)
    .map((part, i) => (i % 2 === 1 ? part : part.replace(/&(?!(?:[a-zA-Z]+|#\d+|#x[0-9a-fA-F]+);)/g, '&amp;')))
    .join('');
}

const codeBlockRegex = /```(?:\w+\n|\n)?([\s\S]*?)```/g;
const responseOpenTagRegex = /<response(?:\s[^>]*)?>/;
const xmlEntities: Record<string, string> = { '&lt;': '<', '&gt;': '>', '&amp;': '&', '&quot;': '"', '&apos;': "'" };

function extractLastCodeBlock(content: string): string | null {
  let lastMatch: string | null = null;

  for (const match of content.matchAll(codeBlockRegex)) {
    lastMatch = match[1].trim();
  }

  return lastMatch;
}

/**
 * Unwraps the response only if it is a single code block, so text around or between code blocks is kept.
 */
function unwrapCodeBlock(content: string): string {
  const match = content.match(/^```(?:\w+\n|\n)?([\s\S]*?)```$/);
  return match && !match[1].includes('```') ? match[1].trim() : content;
}

/**
 * Decodes XML text content: CDATA sections are kept verbatim, everything else only gets the standard entities decoded.
 * An unterminated CDATA section runs to the end, and a stray trailing `]]>` is dropped.
 */
function decodeXmlText(text: string): string {
  const decodeEntities = (value: string) =>
    value.replace(/&(?:lt|gt|amp|quot|apos);/g, (entity) => xmlEntities[entity]);
  let rest = text.trim().replace(/]]>$/, '');
  let result = '';

  while (true) {
    const start = rest.indexOf('<![CDATA[');
    if (start === -1) {
      return result + decodeEntities(rest);
    }
    result += decodeEntities(rest.slice(0, start));
    rest = rest.slice(start + '<![CDATA['.length);
    const end = rest.indexOf(']]>');
    if (end === -1) {
      return result + rest;
    }
    result += rest.slice(0, end);
    rest = rest.slice(end + ']]>'.length);
  }
}

/**
 * Extracts the text of a single-field `<response>` element without parsing it as XML, since fields often contain
 * markup like `<START>` or `<b>`. Takes everything between the first `<response>` and the last `</response>`.
 * @returns The response text, or null if there is no `<response>` tag.
 */
function extractXmlResponse(content: string): string | null {
  let start = content.search(responseOpenTagRegex);
  if (start === -1) {
    return null;
  }

  // If the response itself is inside a code block (```xml), use the last code block with a response,
  // so example responses given before the real one (e.g. while thinking) are skipped.
  let isFenced = false;
  let lastFencedStart = -1;
  for (const match of content.matchAll(codeBlockRegex)) {
    if (match.index < start && start < match.index + match[0].length) {
      isFenced = true;
    }
    if (responseOpenTagRegex.test(match[1])) {
      lastFencedStart = match.index;
    }
  }
  if (isFenced && lastFencedStart !== -1) {
    start = lastFencedStart + content.slice(lastFencedStart).search(responseOpenTagRegex);
  }

  const innerStart = start + content.slice(start).match(responseOpenTagRegex)![0].length;
  const end = content.lastIndexOf('</response>');
  let inner: string;
  if (end >= innerStart) {
    inner = content.slice(innerStart, end);
  } else {
    // Missing closing tag (incomplete response). Drop a trailing closing tag that isn't opened inside, like </root>.
    inner = content.slice(innerStart).trimEnd();
    const strayTag = inner.match(/<\/([\w:.-]+)\s*>$/);
    if (strayTag && !inner.includes(`<${strayTag[1]}`)) {
      inner = inner.slice(0, strayTag.index);
    }
  }

  return decodeXmlText(inner).trim();
}

/**
 * Decodes the (possibly truncated) contents of a JSON string value, e.g. from an incomplete `"response": "...`.
 */
function decodeJsonStringFragment(fragment: string): string {
  let text = fragment.trimEnd();
  // Drop the closing quote (and brace, code block end) unless the quote is escaped
  const closing = text.match(/(\\*)"\s*}?\s*(?:```)?$/);
  if (closing && closing[1].length % 2 === 0) {
    text = text.slice(0, closing.index! + closing[1].length);
  }
  // Drop a dangling escape sequence cut off by truncation
  text = text.replace(/(^|[^\\])((?:\\\\)*)\\(?:u[0-9a-fA-F]{0,3})?$/, '$1$2');

  try {
    const escaped = text.replace(/[\u0000-\u001f]/g, (char) => JSON.stringify(char).slice(1, -1));
    return JSON.parse(`"${escaped}"`).trim();
  } catch {
    return text.trim();
  }
}

const leadingReasoningRegex = /^\s*<(think|thinking|reasoning)>[\s\S]*?(?:<\/\1>|$)/i;

/**
 * Removes a leading reasoning block (e.g. `<think>...</think>`) that some models put in the content.
 * An unclosed block (cut off while thinking) runs to the end.
 */
export function stripReasoningTags(content: string): string {
  return content.replace(leadingReasoningRegex, '');
}

/**
 * Formats the start of a response for error messages, e.g. `It starts with: "Sure, here..."…`.
 */
export function responseSnippet(content: string, length = 120): string {
  const text = content.trim().replace(/\s+/g, ' ');
  return `It starts with: "${text.slice(0, length)}"${text.length > length ? '…' : ''}`;
}

/**
 * Finds top-level `{...}` blocks with balanced braces, ignoring braces inside JSON strings.
 */
function findJsonObjectCandidates(text: string): string[] {
  const candidates: string[] = [];
  let from = 0;
  while (from < text.length) {
    let depth = 0;
    let start = -1;
    let inString = false;
    let escaped = false;
    for (let i = from; i < text.length; i++) {
      const char = text[i];
      if (depth === 0) {
        if (char === '{') {
          start = i;
          depth = 1;
        }
      } else if (inString) {
        if (escaped) {
          escaped = false;
        } else if (char === '\\') {
          escaped = true;
        } else if (char === '"') {
          inString = false;
        }
      } else if (char === '"') {
        inString = true;
      } else if (char === '{') {
        depth++;
      } else if (char === '}' && --depth === 0) {
        candidates.push(text.slice(start, i + 1));
      }
    }
    if (depth === 0) {
      break;
    }
    // An object that never closes (e.g. a stray `{` in prose): look for objects after its opening brace.
    from = start + 1;
  }
  return candidates;
}

/**
 * Parses JSON from a model response that may wrap it in prose or a code block.
 * Tries the whole text, then the last code block, then the last balanced top-level `{...}` that parses.
 * @throws The error of parsing the whole text (or the last code block), if nothing parses.
 */
export function extractJson(content: string): any {
  const text = stripReasoningTags(content).trim();
  const codeBlock = extractLastCodeBlock(text);
  let error: unknown;
  for (const candidate of codeBlock === null ? [text] : [text, codeBlock]) {
    try {
      return JSON.parse(candidate);
    } catch (e) {
      error = e;
    }
  }
  const candidates = findJsonObjectCandidates(text);
  for (let i = candidates.length - 1; i >= 0; i--) {
    try {
      return JSON.parse(candidates[i]);
    } catch {
      // Try the previous one
    }
  }
  throw error;
}

function extractStringValue(data: any): string {
  if (data === null || data === undefined) {
    return '';
  }
  if (typeof data !== 'object') {
    return String(data).trim();
  }
  if ('#text' in data) {
    return extractStringValue(data['#text']);
  }
  if ('response' in data) {
    return extractStringValue(data.response);
  }
  if ('message' in data) {
    return extractStringValue(data.message);
  }

  const firstValue = Object.values(data)[0];
  return extractStringValue(firstValue);
}

export function parseResponse(
  content: string,
  format: 'xml' | 'json' | 'none',
  options: ParseOptions = {},
): object | string {
  content = stripReasoningTags(content);
  // Extract content from inside code blocks, handling language identifiers
  const codeBlockContent = extractLastCodeBlock(content);
  let cleanedContent = codeBlockContent ?? content.trim();

  try {
    switch (format) {
      case 'xml':
        if (!options.schema) {
          // Single-field output is taken verbatim, it may contain markup or code blocks.
          const xmlResponse = extractXmlResponse(content);
          if (xmlResponse !== null) return xmlResponse;
        }
        // For 'continue' functionality, the XML might be incomplete. We parse what we can.
        // The validator is too strict for partial content, so we bypass it in those cases.
        // A simple heuristic: if it doesn't end with the closing root tag, it's likely partial.
        if (options.schema) {
          if (codeBlockContent === null) {
            // Drop an unclosed code block start (e.g. a cut-off response) and any text around the root element.
            cleanedContent = cleanedContent.replace(/^```\w*\s*/, '');
            const rootStart = cleanedContent.search(/<root(?:\s[^>]*)?>/);
            const rootEnd = cleanedContent.lastIndexOf('</root>');
            if (rootStart !== -1) {
              cleanedContent = cleanedContent.slice(
                rootStart,
                rootEnd > rootStart ? rootEnd + '</root>'.length : undefined,
              );
            }
          }
          cleanedContent = escapeBareAmpersands(cleanedContent);
          const validationResult = XMLValidator.validate(cleanedContent);
          if (validationResult !== true) {
            throw new Error(
              `Model response is not valid XML: ${validationResult.err.msg}. ${responseSnippet(content)}`,
            );
          }
        }
        let parsedXml = (options.schema ? schemaXmlParser : xmlParser).parse(cleanedContent);
        if (parsedXml.root) {
          parsedXml = parsedXml.root;
        } else if (parsedXml.response) {
          // Handle simple <response> tag for single-field generation
          return extractStringValue(parsedXml.response);
        }
        if (options.schema) {
          ensureArray(parsedXml, options.schema);
          return parsedXml;
        }
        return extractStringValue(parsedXml);

      case 'json':
        if (!options.schema) {
          // Look for the JSON object first, the response value may contain code blocks.
          const trimmedContent = content.trim();
          const objectStart = trimmedContent.indexOf('{');
          const objectEnd = trimmedContent.lastIndexOf('}');
          if (objectStart !== -1 && objectEnd > objectStart) {
            try {
              return extractStringValue(JSON.parse(trimmedContent.slice(objectStart, objectEnd + 1)));
            } catch {
              // Fall back to code block extraction
            }
          }
        }
        if (options.schema) {
          return extractJson(content);
        }
        return extractStringValue(JSON.parse(cleanedContent));

      case 'none':
        return unwrapCodeBlock(content.trim());

      default:
        throw new Error(`Unsupported format specified: ${format}`);
    }
  } catch (error: any) {
    // If parsing fails, it might be because the AI is streaming an incomplete structure.
    // For single-field generation, we can often just return the cleaned text.
    if (format !== 'none' && !options.schema) {
      const xmlResponse = extractXmlResponse(content);
      if (xmlResponse !== null) return xmlResponse;
      // Use the last "response" key, earlier ones may be examples
      const jsonMatch = content.match(/[\s\S]*"response":\s*"([\s\S]*)/);
      if (jsonMatch) return decodeJsonStringFragment(jsonMatch[1]);
    }

    console.error(`Error parsing response in format '${format}':`, error);
    console.error('Raw content received:', content);

    if (format === 'xml') {
      if (error.message.startsWith('Model response is not valid XML:')) {
        throw error;
      }
      throw new Error(`Model response is not valid XML: ${error.message}`);
    }
    if (format === 'json') {
      throw new Error(`Model response is not valid JSON (${error.message}). ${responseSnippet(content)}`);
    }
    throw new Error(`Failed to parse response as ${format}: ${error.message}`);
  }
}

/**
 * Gets the prefilled incomplete message for continuing generation
 * @param content The current content to continue from
 * @param format The expected format ('xml', 'json', 'none')
 * @returns Prefilled incomplete message in the specified format
 */
export function getPrefilled(content: string, format: 'xml' | 'json' | 'none'): string {
  const trimmedContent = content.trim();
  switch (format) {
    case 'xml':
      // CDATA keeps markup verbatim; an existing `]]>` is split across two sections so it survives the round trip.
      return `<response><![CDATA[${trimmedContent.replaceAll(']]>', ']]]]><![CDATA[>')}`;
    case 'json':
      return `{\n  "response": ${JSON.stringify(trimmedContent).slice(0, -1)}`;
    case 'none':
      return trimmedContent;
    default:
      throw new Error(`Unsupported format specified: ${format}`);
  }
}

const jsonResponseStartRegex = /^\{\s*"response"\s*:/;
// Replies that only close the prefilled structure, i.e. add no text
const closingOnlyRegex: Record<'xml' | 'json', RegExp> = {
  json: /^[\s"}]*(?:```\s*)?$/,
  xml: /^\s*(?:]]>)?\s*(?:<\/response>)?\s*(?:```\s*)?$/,
};

/**
 * Checks if a reply to a continue request is a complete response of its own, i.e. the model ignored the prefill.
 */
function isCompleteResponse(reply: string, existing: string, format: 'xml' | 'json' | 'none'): boolean {
  switch (format) {
    case 'xml':
      return responseOpenTagRegex.test(reply);
    case 'json':
      return (
        jsonResponseStartRegex.test(reply.trim()) ||
        Array.from(reply.matchAll(codeBlockRegex)).some((match) => jsonResponseStartRegex.test(match[1].trim()))
      );
    case 'none':
      // No structure to detect, only a reply that repeats the existing text.
      return reply.trim().startsWith(existing);
    default:
      return false;
  }
}

function isJsonStringFragment(text: string): boolean {
  try {
    JSON.parse(`"${text.replace(/[\u0000-\u001f]/g, (char) => JSON.stringify(char).slice(1, -1))}"`);
    return true;
  } catch {
    return false;
  }
}

/**
 * Checks if a reply to a JSON continue request is bare prose: it doesn't close the JSON object and can't be the rest
 * of the prefilled JSON string, e.g. because it has unescaped quotes.
 */
function isPlainTextReply(reply: string): boolean {
  // JSON objects (complete or not) and code blocks are not plain text
  if (/^\s*(?:```|\{\s*")/.test(reply) || /}\s*(?:```)?\s*$/.test(reply)) {
    return false;
  }
  // The model may close the prefilled string without the object, or be cut off in an escape sequence.
  const withoutEnd = reply.replace(/"\s*$/, '').replace(/(^|[^\\])((?:\\\\)*)\\(?:u[0-9a-fA-F]{0,3})?$/, '$1$2');
  return !isJsonStringFragment(reply) && !isJsonStringFragment(withoutEnd);
}

/**
 * Separator between the existing text and a separately written continuation (both trimmed):
 * a blank line after the end of a sentence (`.`, `!`, `?`, `…`, a closing quote or bracket, or `*` closing an action),
 * otherwise a single space.
 */
function getContinuationJoiner(existing: string, addition: string): string {
  if (!existing || !addition) {
    return '';
  }
  return /[.!?…"'”’»)\]*]$/.test(existing) ? '\n\n' : ' ';
}

/**
 * Joins a continuation of the prefill to the existing text. Some models start a new sentence without the space after
 * the existing text, so a space is added between a sentence end and a letter. Anything else is joined as is,
 * e.g. the rest of a cut-off word or a closing quote.
 */
function joinPrefillContinuation(existing: string, addition: string): string {
  return /[.!?…]["'”’»)\]*]*$/.test(existing) && /^\p{L}/u.test(addition)
    ? `${existing} ${addition}`
    : existing + addition;
}

/**
 * Merges the model's reply to a continue request (sent with the `getPrefilled` prefill) into the existing text.
 * The result always starts with the existing text.
 * @param existing The text that was continued
 * @param reply The model's reply
 * @param format The expected format ('xml', 'json', 'none')
 * @returns The continued text
 */
export function mergeContinuation(existing: string, reply: string, format: 'xml' | 'json' | 'none'): string {
  const trimmedExisting = existing.trim();
  reply = stripReasoningTags(reply);

  if (format !== 'none' && closingOnlyRegex[format].test(reply)) {
    return trimmedExisting;
  }

  if (format === 'json' && isPlainTextReply(reply)) {
    // The model wrote the continuation as plain text instead of JSON, so take it verbatim.
    const text = reply.trim();
    if (text.startsWith(trimmedExisting)) {
      return text;
    }
    return trimmedExisting + getContinuationJoiner(trimmedExisting, text) + text;
  }

  if (!isCompleteResponse(reply, trimmedExisting, format)) {
    // The model continued the prefill
    const continued = String(parseResponse(getPrefilled(existing, format) + reply, format));
    if (continued.startsWith(trimmedExisting)) {
      return joinPrefillContinuation(trimmedExisting, continued.slice(trimmedExisting.length));
    }
  }

  // The model wrote a response of its own. Keep it as is if it repeats the existing text, otherwise append it.
  const newText = String(parseResponse(reply, format));
  if (newText.startsWith(trimmedExisting)) {
    return newText;
  }
  return trimmedExisting + getContinuationJoiner(trimmedExisting, newText) + newText;
}
