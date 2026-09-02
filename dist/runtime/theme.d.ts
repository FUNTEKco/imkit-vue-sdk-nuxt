import { DesignPalette, PaletteSeeds } from '../classes/styles';
export declare const DESIGN_TOKEN_NAMES: readonly ["surface", "panel", "canvas", "surface-muted", "surface-hover", "surface-sunken", "field", "border", "border-strong", "content", "content-subtle", "content-muted", "content-faint", "accent", "accent-vivid", "accent-hover", "accent-subtle", "danger", "danger-vivid", "message", "message-border", "message-own", "message-own-content", "highlight", "highlight-content", "tooltip"];
export type DesignTokenName = (typeof DESIGN_TOKEN_NAMES)[number];
export type DesignTokens = Record<DesignTokenName, string>;
export declare function relativeLuminance(hex: string): number;
export declare function contrastRatio(foreground: string, background: string): number;
/** Derives the complete semantic colour-token set from six seed colours. */
export declare function deriveTokens(seeds: PaletteSeeds, dark: boolean): DesignTokens;
export declare function paletteSeeds(dark: boolean, source?: DesignPalette): PaletteSeeds;
/** Applies all derived tokens as inline CSS custom properties on an SDK root. */
export declare function applyPalette(root: HTMLElement, dark: boolean, source?: DesignPalette): DesignTokens;
/**
 * Adapt a per-link own-bubble colour to a colour mode.
 *
 * PinChat lets a customer pick the visitor's bubble colour, and it reaches the
 * SDK as `chatStyle.self`. Applied verbatim it only suits the mode it was
 * chosen in: the shipped presets are all pale pastels, so on a dark canvas they
 * measured 10-14:1 and the visitor's own messages glowed brighter than the
 * agent's. The configured TEXT colour has the same problem from the other side
 * — it bypasses the contrast floor this file enforces everywhere else.
 *
 * So the value is treated as a SEED and run through exactly what `deriveTokens`
 * does with `ownBubble`: hue is the identity, lightness belongs to the mode.
 * This lives here rather than at the call site so there is one definition of
 * that transform — a second copy would drift from the one above the moment
 * either is touched.
 *
 * Returns `undefined` for anything that is not a colour: `self.background` is a
 * customer string off the wire, and a bad value must leave the derived palette
 * standing rather than emit a broken token.
 */
export declare function deriveOwnBubble(seed: string, dark: boolean): {
    fill: string;
    content: string;
} | undefined;
