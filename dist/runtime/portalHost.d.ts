/**
 * Shared portal host for the SDK's floating UI (modals, dropdown menus,
 * bottom sheets/overlays).
 *
 * These layers portal/teleport to `<body>` deliberately, to escape ancestor
 * `overflow` clipping and stacking contexts — do NOT "fix" this by
 * re-parenting them into the SDK root; that would reintroduce clipping bugs.
 * But a plain `to="body"` also means they render OUTSIDE the SDK root, so
 * they never inherit the SDK root's `.dark` mode or its inline design-token
 * values unless those values are mirrored onto a body-level element.
 *
 * This module gives the SDK ONE element it owns in `<body>`, keeps that
 * element's `dark` class and design tokens in sync with whichever SDK root is
 * currently mounted, and every portal/teleport in the SDK targets that element
 * (`PORTAL_HOST_SELECTOR`) instead of `"body"`.
 *
 * This also supports a consumer who applies `.dark` to their OWN wrapper
 * (rather than relying on
 * `vue-dark-switch` putting it on `<html>`, as this repo's demo does) would
 * previously get modals/menus stuck in light mode, because those layers
 * never inherited `.dark` from anywhere. Mirroring the class explicitly onto
 * an owned host fixes that too.
 */
/** CSS selector every SDK portal/teleport should target instead of "body". */
export declare const PORTAL_HOST_SELECTOR = "#imkit-portal-host";
/**
 * Registers `sourceEl` (an SDK mount root — e.g. MainView's root `<div>`, or
 * the custom element's wrapper `<div>`) as the colour-mode and design-token
 * source for the shared portal host. It copies `.dark` and the derived CSS
 * custom properties immediately, then keeps both in sync at runtime.
 *
 * Call once per SDK mount, from that mount's root element, on mount/connect.
 * The latest registration is active. Call the returned cleanup function on
 * unmount/disconnect; removing the active source restores the previous one.
 * The host is removed only after every registered mount has cleaned up.
 */
export declare function registerPortalPaletteSource(sourceEl: Element): () => void;
