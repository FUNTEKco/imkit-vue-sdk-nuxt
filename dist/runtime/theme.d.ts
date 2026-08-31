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
