import { default as Room } from '../classes/room';
/**
 * Room title split into a truncating NAME and a never-truncating COUNT
 * (round 12, item 2). Group rooms get a member count — `Team-14 (3)` —
 * direct rooms none. Shared by RoomCell.vue (room-list row) and
 * ChatRoom.vue (chat header) so the two can never drift: same parenthesis
 * style, same source (`memberIds.length`) for the count.
 *
 * The two pieces are rendered as SEPARATE elements by callers, not
 * concatenated into one string: the count is pinned outside the truncating
 * name element so a clipped row never loses it.
 *
 * Only the room-list row middle-truncates. See `roomCountSuffix` for why the
 * chat header does not.
 */
export interface RoomTitleParts {
    /** Middle-truncated name (head + '…' + tail), or the full name if it fits
     * inside the truncation budget untouched. */
    truncatedName: string;
    /** ` (n)` for a group room, `''` for a direct room. Leading space
     * included so callers can concatenate it directly after the name. */
    countSuffix: string;
}
/**
 * The count half on its own, for callers that render the name untruncated.
 *
 * `middleTruncateByDisplayWidth`'s budget is a fixed character count sized
 * for the room-list row, which is ~320px wide and always will be. The chat
 * header is not: it spans the whole chat column, which is the full viewport
 * on a guest page. Applying the row's budget there middle-truncated names
 * that had hundreds of spare pixels beside them (`Taipei Pickle…ll Club`).
 * The header element already carries `overflow-hidden text-ellipsis` inside
 * a `min-w-0` flex parent, so CSS clips it — at the real boundary — on the
 * narrow widths where clipping is actually needed.
 */
export declare function roomCountSuffix(room: Room): string;
export declare function roomTitleParts(room: Room): RoomTitleParts;
