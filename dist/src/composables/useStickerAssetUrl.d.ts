import { ComputedRef } from 'vue';
export declare function useStickerAssetUrl(): {
    resolveStickerUrl: ComputedRef<(relativePath: string) => string>;
};
