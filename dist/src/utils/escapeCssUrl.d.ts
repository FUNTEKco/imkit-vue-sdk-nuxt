/**
 * Escapes a URL for safe use in a CSS url("...") value.
 *
 * Escapes backslash first, then double-quote, so neither character can break
 * out of the CSS string and inject arbitrary declarations (M61).
 *
 * @param url - raw URL string (e.g. from user-controlled content)
 * @returns full CSS value: url("...") with special chars escaped
 */
export declare function escapeCssUrl(url: string): string;
