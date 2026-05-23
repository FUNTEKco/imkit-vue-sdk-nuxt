export declare const parseSignedUrlExpiry: (url: string) => number | null;
export interface SignedUrlEntry {
    signedUrl: string;
    expiresAt: number;
    cachedAt: number;
}
export declare const getSignedUrlEntry: (canonicalUrl: string) => SignedUrlEntry | null;
export declare const getSignedUrl: (canonicalUrl: string) => string | null;
export declare const setSignedUrl: (canonicalUrl: string, signedUrl: string) => void;
export declare const dropSignedUrl: (canonicalUrl: string) => void;
export declare const isOnCooldown: (canonicalUrl: string) => boolean;
export declare const markCooldown: (canonicalUrl: string) => void;
export declare const clearSignedUrlCache: () => void;
export declare const _resetSignedUrlStoreForTests: () => void;
