type UseViewportHeightOptions = {
    /**
     * Also hold the layout viewport at the top for as long as the component is
     * mounted. Only a full-page SDK shell may ask for this — it makes the whole
     * document unscrollable. See `startViewportScrollLock`.
     */
    lockScroll?: boolean;
};
/**
 * Keeps `--imkit-viewport-height` current for as long as the calling component
 * is mounted. Call it from any SDK surface that sizes itself to the viewport;
 * see `src/runtime/viewportHeight.ts` for why `dvh` cannot be used instead.
 */
export declare function useViewportHeight({ lockScroll }?: UseViewportHeightOptions): void;
export {};
