import { Ref } from 'vue';
/**
 * Keeps `target`'s viewport rect up to date while `active` is true.
 *
 * Callers that paint a fixed-position clone of an element (the mobile
 * long-press overlay) cannot use a single `getBoundingClientRect()` snapshot:
 * anything that reflows the page afterwards leaves the clone stranded at the
 * old coordinates. In an iOS webview, blurring the composer collapses the
 * software keyboard, which resizes the layout viewport and reflows the chat a
 * few frames after the menu opens (issue #18).
 */
export declare const useTrackedElementRect: (target: Ref<HTMLElement | null>, active: Ref<boolean>) => {
    rect: Ref<{
        height: number;
        width: number;
        x: number;
        y: number;
        readonly bottom: number;
        readonly left: number;
        readonly right: number;
        readonly top: number;
        toJSON: () => any;
    } | null, DOMRect | {
        height: number;
        width: number;
        x: number;
        y: number;
        readonly bottom: number;
        readonly left: number;
        readonly right: number;
        readonly top: number;
        toJSON: () => any;
    } | null>;
};
