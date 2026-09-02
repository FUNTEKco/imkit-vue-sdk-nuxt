/**
 * Per-link header colours, as the pinchat guest config pre-bakes them
 * (`chat_header_color` -> `background`, `chat_header_text_color` -> `color`).
 */
export type ChatHeaderColors = {
    background?: string;
    color?: string;
};
/**
 * Build the inline style for the chat header from a link's own colours.
 *
 * Returns `undefined` when the link configures nothing, so the caller can fall
 * back to the global `styles.chatRoomHeader`.
 *
 * The header re-points `--color-content`, `--color-content-muted`, and
 * `--color-content-subtle` for its own subtree rather than colouring each
 * control. Everything inside is painted with those semantic tokens, so one
 * override reaches the back arrow, title, preview subtitle, online line, and
 * every action button at once. The nine per-element bindings this replaces
 * were dropped wholesale by the messenger redesign, which is how a configured
 * header colour came to be ignored.
 *
 * The `accent` family goes with them, and for a different reason. The room-info
 * toggle paints its ENGAGED state `bg-accent-subtle text-accent`, and the focus
 * ring is `accent-vivid` — all three are the WORKSPACE brand, which has nothing
 * to do with the link's. Overriding only the content tokens left the pressed
 * button sitting green-on-green inside an orange header.
 *
 * Engaged INVERTS the header's two colours: the fill becomes the foreground and
 * the icon becomes the background. A translucent wash was tried first and does
 * not work, because the fill and the icon would both derive from the same
 * colour — on a link configured black-on-orange, a black engaged wash put a
 * black icon on a darkened orange pill. Inverting is legible whichever way
 * round the link's two colours are.
 *
 * `--color-surface-hover` goes too. It is a near-white fill sized for the app
 * chrome; on a dark brand header it flashes an almost-white disc behind the
 * hovered icon. Hover stays a wash — it is a hint, not a state — but tinted
 * with the FOREGROUND so it lightens a dark header and darkens a light one.
 */
export declare function chatHeaderStyle(header: ChatHeaderColors | undefined | null): Record<string, string> | undefined;
