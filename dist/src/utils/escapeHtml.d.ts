/**
 * Escape a string so it can be safely interpolated into HTML that will later
 * be rendered via `v-html` / `innerHTML`. Replaces the five reserved
 * characters with their entity equivalents.
 *
 * Use this for any user-controlled text (chat peer nicknames, file names,
 * message content, etc.) that ends up inside an HTML template literal.
 */
export declare const escapeHtml: (str: string) => string;
