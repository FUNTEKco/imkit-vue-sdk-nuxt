import { default as QuickLRU } from 'quick-lru';
export declare const imageCache: QuickLRU<string, string>;
export declare const translationCache: QuickLRU<string, string>;
export declare const roomTagCache: Map<string, string[]>;
export declare const imageFailuresRef: import('vue').ShallowRef<Set<string>, Set<string>>;
export declare const addImageFailure: (url: string) => void;
export declare const removeImageFailure: (url: string) => void;
