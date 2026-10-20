const codeBlockRegex = /```(?:\w+\n|\n)?([\s\S]*?)```/g;

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

/**
 * Reads a generated field from a plain-text response: a leading reasoning block is removed, and a response that is a
 * single code block is unwrapped. Anything else is kept verbatim (trimmed), including markup like `<START>`.
 */
export function parseFieldResponse(content: string): string {
  return unwrapCodeBlock(stripReasoningTags(content).trim());
}

/**
 * Checks if a continuation starts a new quote or action, e.g. `"Hi."` or `*Waves.*` after a finished sentence.
 * A `"` or `*` opens one when the existing text has an even number of them, otherwise it closes the open one.
 */
function startsNewQuote(existing: string, addition: string): boolean {
  const first = addition[0];
  if (first === '“' || first === '«') {
    return true;
  }
  return (first === '"' || first === '*') && existing.split(first).length % 2 === 1;
}

/**
 * Joins a continuation of the prefill to the existing text. Some models start a new sentence without the space after
 * the existing text, so a space is added between a sentence end and a letter or a new quote or action. Anything else
 * is joined as is, e.g. the rest of a cut-off word or a closing quote.
 */
function joinPrefillContinuation(existing: string, addition: string): string {
  return /[.!?…]["'”’»)\]*]*$/.test(existing) && (/^\p{L}/u.test(addition) || startsNewQuote(existing, addition))
    ? `${existing} ${addition}`
    : existing + addition;
}

/**
 * Merges the model's reply to a continue request (sent with the existing text as the prefill) into the existing text.
 * The result always starts with the existing text.
 * @param existing The text that was continued
 * @param reply The model's reply
 * @returns The continued text
 */
export function mergeContinuation(existing: string, reply: string): string {
  const trimmedExisting = existing.trim();
  reply = stripReasoningTags(reply);

  // The model ignored the prefill and wrote the whole text again
  const rewritten = parseFieldResponse(reply);
  if (rewritten.startsWith(trimmedExisting)) {
    return rewritten;
  }

  // The model continued the prefill. Leading whitespace is kept, it separates the new text from the existing.
  const continued = unwrapCodeBlock((trimmedExisting + reply).trim());
  if (continued.startsWith(trimmedExisting)) {
    return joinPrefillContinuation(trimmedExisting, continued.slice(trimmedExisting.length));
  }
  return trimmedExisting + continued;
}
