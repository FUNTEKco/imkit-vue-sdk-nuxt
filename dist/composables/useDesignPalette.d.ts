import { Ref } from 'vue';
/**
 * Applies the public design palette to an SDK root and mirrors it to portals.
 * The consumer remains responsible for binding the root's `dark` class.
 */
export declare function useDesignPalette(root: Readonly<Ref<HTMLElement | null>>, dark: Readonly<Ref<boolean>>): void;
