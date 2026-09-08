import { MaybeRefOrGetter } from 'vue';
type UseViewportHeightOptions = {
    /**
     * Also hold the layout viewport at the top for as long as this resolves
     * true. Only a full-page SDK shell may ask for this — it makes the whole
     * document unscrollable. See `startViewportScrollLock`.
     *
     * A ref or getter is allowed because the caller may not know the answer at
     * all yet: ChatRoom and RoomList read it off `settings`, and a host that
     * renders the custom element and calls setConfig in the same commit — the
     * pinchat guest page — has not delivered its settings by the time the
     * element mounts. The value is tracked, so the lock engages whenever the
     * answer becomes true and is released again if it goes back to false.
     */
    lockScroll?: MaybeRefOrGetter<boolean>;
};
/**
 * Keeps `--imkit-viewport-height` current for as long as the calling component
 * is mounted. Call it from any SDK surface that sizes itself to the viewport;
 * see `src/runtime/viewportHeight.ts` for why `dvh` cannot be used instead.
 */
export declare function useViewportHeight({ lockScroll }?: UseViewportHeightOptions): void;
export {};
