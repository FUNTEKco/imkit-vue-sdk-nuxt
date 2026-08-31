/**
 * Publishes the usable viewport height as the `--imkit-viewport-height` custom
 * property on `<html>`, for every full-height SDK surface to size itself from.
 *
 * **`dvh` cannot do this job in an iOS webview.** Measured on iPhone 17 Pro /
 * iOS 26.5 (issue #20), focusing the composer in a WKWebView produces:
 *
 * | t (ms) | `innerHeight` | `100dvh` | `visualViewport.height` | `scrollY` |
 * | -----: | ------------: | -------: | ----------------------: | --------: |
 * |      0 |           729 |      729 |                     729 |         0 |
 * |    257 |           729 |      729 |                     408 |         0 |
 * |    291 |           408 |      729 |                     408 |       321 |
 *
 * The software keyboard shrinks the visual viewport, and ~35ms later WebKit
 * shrinks the layout viewport too — but `dvh` tracks NEITHER. It answers 729
 * throughout, because the keyboard is an "interactive widget" and the default
 * `interactive-widget=resizes-visual` leaves viewport units alone. So a root
 * sized `h-dvh` stays 729 tall inside a 408 tall layout viewport, the document
 * becomes scrollable, and WebKit scrolls it by the keyboard height to reveal
 * the focused composer — which is what pushes the chat header off screen.
 *
 * The declarative fix, `interactive-widget=resizes-content` in the viewport
 * meta, is unimplemented in WebKit (bug 259770, still NEW as of 2026-07), so
 * this has to be measured in JS.
 *
 * **The table above is a host that leaves its web view full height.** A host
 * that shrinks the web view for the keyboard instead — tribo's iOS app does
 * since this issue — moves the layout viewport itself, and `dvh` then follows
 * it about 12ms behind `innerHeight`. Measured that way the roots would be
 * nearly right with plain `h-dvh`, which makes this file look redundant if
 * tribo is the only place it is ever checked. It is not: mobile Safari, the
 * pinchat web component and any host that has not made that native change
 * still report the pre-keyboard height forever, and that is the case with the
 * lost header. Do not delete this on the strength of a tribo-only trace.
 *
 * Written on `document.documentElement` rather than on each SDK root so that
 * teleported layers — modals, dropdown menus, the shared portal host — inherit
 * it too. It is one namespaced custom property; nothing else on the host page
 * is touched. The static `100dvh` fallback lives in `src/style.css` and takes
 * over whenever no SDK surface is mounted.
 */
/**
 * Starts tracking, and returns the matching stop function.
 *
 * Refcounted: several SDK surfaces can be mounted at once (`MainView` plus the
 * `ChatRoom` inside it, or two custom elements side by side) and each may call
 * this, but only one set of listeners is ever bound. The property is removed —
 * restoring the `100dvh` fallback — once the last caller has stopped.
 */
export declare function startViewportHeightTracking(): () => void;
/**
 * Holds the layout viewport at the top, and returns the matching stop
 * function.
 *
 * Sizing the SDK root to the measured height is necessary but not sufficient:
 * a software keyboard does not shrink the initial containing block, only the
 * unobscured height, so the page keeps a scrollable range of exactly the
 * keyboard height (729 - 408 = 321, the `scrollY` in the trace above) no
 * matter how short its content is. WebKit spends that range revealing the
 * focused composer, which drags the chat header off screen — the shorter root
 * just means blank space follows it down.
 *
 * Only a full-page SDK shell may call this. It makes the whole document
 * unscrollable, which is right for a shell that is exactly one viewport tall
 * and clips its own overflow, and wrong for an SDK component embedded in a
 * host page that scrolls. The `scrollY === 0` guard is what stops the
 * scroll listener from recursing.
 */
export declare function startViewportScrollLock(): () => void;
