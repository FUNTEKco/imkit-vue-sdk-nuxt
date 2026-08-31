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
 * name element so a clipped row never loses it, and the name itself is
 * middle-truncated (see `middleTruncateByDisplayWidth`) rather than
 * end-truncated, so the tail — the part that actually disambiguates one
 * room name from another — survives too.
 */
export interface RoomTitleParts {
    /** Middle-truncated name (head + '…' + tail), or the full name if it fits
     * inside the truncation budget untouched. */
    truncatedName: string;
    /** ` (n)` for a group room, `''` for a direct room. Leading space
     * included so callers can concatenate it directly after the name. */
    countSuffix: string;
}
export declare function roomTitleParts(room: Room): RoomTitleParts;
