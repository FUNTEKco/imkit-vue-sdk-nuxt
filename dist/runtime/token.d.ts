/**
 * Resolve the IMKIT auth token.
 *
 * - No `getToken` provider configured: returns the static `config.token` as-is
 *   (legacy behaviour, unchanged).
 * - Provider configured: asks the host app for the token. `forceRefresh` is
 *   passed through so the host can mint a new token after an auth failure.
 *
 * The resolved non-empty token is written back to `config.token` so the rest of
 * the SDK (header building, socket auth) keeps reading from a single source.
 */
export declare const resolveToken: (forceRefresh?: boolean) => Promise<string>;
export declare const _resetTokenRefreshForTests: () => void;
