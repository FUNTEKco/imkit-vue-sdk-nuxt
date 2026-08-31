/**
 * Tag-colour derivation.
 *
 * Room tags store a single user-chosen hex colour
 * (`room.pref.tagColors[tag]`). Rendering that hex directly as a chip
 * background/foreground is theme-blind: a light wash reads as
 * near-invisible on a dark surface, and the raw hue can land under the
 * 4.5:1 AA floor as foreground text on either theme.
 *
 * This module converts the stored hex to OKLCH and re-emits four derived
 * colours — light background/foreground and dark background/foreground —
 * by overriding lightness (L) and clamping chroma (C), while leaving hue
 * (H) untouched. The stored hex itself is never mutated; only the derived
 * chip fill/label are computed here. The small solid "dot" swatch keeps
 * the raw stored colour unchanged — callers should use the original hex
 * for that, not anything from this module.
 *
 * Conversion is a hand-rolled sRGB -> linear -> OKLab -> OKLCH pipeline
 * (Björn Ottosson's OKLab, https://bottosson.github.io/posts/oklab/) with
 * gamut clipping on the way back out, so no colour library dependency is
 * added.
 */
export interface Rgb {
    r: number;
    g: number;
    b: number;
}
export interface Oklab {
    L: number;
    a: number;
    b: number;
}
export interface Oklch {
    L: number;
    C: number;
    H: number;
}
export interface TagPalette {
    /** Light-theme chip background, as a hex string. */
    lightBg: string;
    /** Light-theme chip foreground (label text), as a hex string. */
    lightFg: string;
    /** Dark-theme chip background, as a hex string. */
    darkBg: string;
    /** Dark-theme chip foreground (label text), as a hex string. */
    darkFg: string;
}
export declare function hexToRgb(hex: string): Rgb;
export declare function rgbToHex({ r, g, b }: Rgb): string;
export declare function oklabToOklch({ L, a, b }: Oklab): Oklch;
export declare function oklchToOklab({ L, C, H }: Oklch): Oklab;
export declare function hexToOklch(hex: string): Oklch;
/**
 * Convert OKLCH to a hex colour, binary-searching chroma down toward 0 at
 * fixed L/H if the requested colour falls outside the sRGB gamut. The
 * derivation table's clamped chroma values are small enough that this
 * rarely (if ever) has to move, but it keeps the function safe for any
 * input rather than relying on that being true by construction.
 */
export declare function oklchToHex(oklch: Oklch): string;
export declare function deriveTagPalette(hex?: string | null): TagPalette;
export declare function contrastRatio(hexA: string, hexB: string): number;
/**
 * The six tag presets. Hues are spread roughly 60 degrees apart around the
 * wheel so they stay distinguishable at a glance, and each is chosen with
 * enough source chroma that the clamped derivation in `deriveTagPalette`
 * doesn't collapse them all toward the same grey. See
 * `tests/utils/tagColor.test.ts` for the measured OKLCH and derived
 * fg-on-bg contrast of each, in both colour modes.
 */
export declare const TAG_PRESET_COLORS: Record<string, string>;
