/**
 * Escape a string so it can be safely interpolated into HTML that will later
 * be rendered via `v-html` / `innerHTML`. Replaces the five reserved
 * characters with their entity equivalents.
 *
 * Use this for any user-controlled text (chat peer nicknames, file names,
 * message content, etc.) that ends up inside an HTML template literal.
 *
 * Callers pass untyped peer JSON fields (fileName, fileExtension, nickname,
 * uid) that are typed `string` but can be undefined/missing at runtime, so the
 * input is coerced here — a bare `.replace` on undefined would throw and crash
 * the consuming `html` computed.
 */
export declare const escapeHtml: (str: string | null | undefined) => string;
