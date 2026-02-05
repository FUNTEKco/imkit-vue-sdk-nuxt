/**
 * Convert ArrayBuffer to base64 string (no data: prefix).
 *
 * Uses chunking to avoid call stack limits and to reduce memory churn vs
 * per-byte string concatenation.
 */
export declare const arrayBufferToBase64: (buffer: ArrayBuffer) => string;
