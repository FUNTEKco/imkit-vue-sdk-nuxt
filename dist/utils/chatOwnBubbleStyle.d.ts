/**
 * Per-link colours for the visitor's own message bubble, as the pinchat guest
 * config pre-bakes them (`chat_bubble_color` -> `background`,
 * `chat_bubble_text_color` -> `color`, `chat_bubble_border_color` -> `border`).
 */
export type ChatOwnBubbleColors = {
    background?: string;
    color?: string;
    border?: string;
};
/**
 * Build the token overrides that make the own-message bubble follow a link's
 * configured colours.
 *
 * Returns `undefined` when the link configures nothing, so the derived palette
 * stands.
 *
 * This re-points `--color-message-own` / `--color-message-own-content` on the
 * chat root instead of passing a style down to MessageCell. The bubble is
 * already painted `bg-message-own text-message-own-content`, and the same
 * tokens reach every other surface that echoes the own bubble (the quoted
 * preview, the mobile action overlay), which a prop on one component would not.
 *
 * `border` is deliberately NOT consumed. The redesigned own bubble draws no
 * outline at all — adding one would change the geometry of every sent message,
 * including the squared corner of a grouped run — so there is nothing for the
 * value to colour. The default config sets it equal to `background`, so this is
 * invisible for a link that has not deliberately set the two apart.
 */
export declare function chatOwnBubbleStyle(self: ChatOwnBubbleColors | undefined | null, dark?: boolean): Record<string, string> | undefined;
