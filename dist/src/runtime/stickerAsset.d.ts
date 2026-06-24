/**
 * Set the base the sticker assets are served from. Accepts the bundle's own
 * file URL (the directory is derived from it via `new URL`) or a directory URL.
 * An empty string restores root-relative resolution.
 */
export declare function setStickerBaseUrl(url: string): void;
/**
 * Resolve a root-relative sticker path (e.g. `/sticker/FunFunFamily/x.png`) to
 * an absolute URL against the configured base. With no base set, returns the
 * path root-relative (unchanged behaviour), so host-bundled consumers keep
 * serving stickers from their own site root.
 */
export declare function resolveStickerUrl(pathFromRoot: string): string;
