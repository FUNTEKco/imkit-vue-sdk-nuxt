/**
 * Display-width-aware middle truncation (round 12, item 2).
 *
 * The room-list row and the chat-room header both need to keep the HEAD and
 * TAIL of a long room name — the tail is what disambiguates ("Team Alpha"
 * vs "Team Beta", "產品開發群組北區" vs "產品開發群組南區") — while the
 * member `(n)` count stays outside the truncating element entirely so it is
 * never clipped.
 *
 * A plain character count degrades badly for Latin text: a CJK glyph reads
 * as roughly twice the width of a Latin one, so "4 head chars / 2 tail
 * chars" keeps a full CJK word pair but only a couple of Latin letters.
 * Instead we budget in DISPLAY-WIDTH UNITS — a wide/fullwidth codepoint
 * (per Unicode's East Asian Width property, UAX #11) counts as 2 units,
 * everything else counts as 1 — and keep the first 13 units and the last 7.
 *
 * This is a UNIT BUDGET, not a pixel/DOM overflow measurement: a name is
 * rendered whole whenever its total display width already fits inside the
 * head+tail budget (nothing would be hidden by truncating), and is
 * middle-truncated to exactly `headUnits` + '…' + `tailUnits` otherwise. It
 * does not query the DOM or measure actual rendered pixel width.
 *
 * The budget was 8+4 until 2026-08-17, which cut names far earlier than the
 * row needed: measured in the 350px room list, a name truncated at 8+4
 * ended at x=218 while the timestamp began at x=301 — 83px of empty column
 * between them. 13+7 spends that space, leaving roughly the 8px breathing
 * room the row was asked for.
 *
 * BEWARE what this budget cannot do. Because it never measures the DOM, it
 * cannot actually guarantee any particular gap: it is calibrated against
 * the room list's fixed 350px column, and the same function also feeds the
 * chat-room header, which is far wider and therefore now truncates later
 * than it strictly must. It also cannot see the `(n)` count, the mute icon
 * or a long timestamp, each of which eats into the same line. A name that
 * overruns despite the budget falls back to the CSS `truncate` on the
 * element, so the failure mode is an end-ellipsis rather than a collision.
 * If an exact gap is ever required, this has to become a measured
 * (ResizeObserver-backed) width rather than a larger constant.
 */
/** A wide/fullwidth codepoint counts as 2 display-width units, everything
 * else (including narrow Latin, combining marks, ASCII) counts as 1. */
export declare function charDisplayWidth(char: string): 1 | 2;
export declare function displayWidth(text: string): number;
/**
 * Middle-truncates `text` to the first `headUnits` display-width units, an
 * ellipsis, and the last `tailUnits` display-width units — but only when
 * `text`'s total display width exceeds `headUnits + tailUnits`. A wide
 * character that would straddle a boundary (push the running width over the
 * budget) is excluded rather than split.
 */
export declare function middleTruncateByDisplayWidth(text: string, headUnits?: number, tailUnits?: number): string;
