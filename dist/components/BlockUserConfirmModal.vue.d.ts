/**
 * Block confirmation, on LeaveGroupConfirmModal.vue's shell — deliberately
 * NOT a third dialog shape.
 *
 * Only BLOCKING is confirmed. Unblocking is the correction path for a
 * mistaken block, so putting a dialog in front of it would make the mistake
 * harder to undo than to make; it executes on one click from
 * ChatRoomInfo.vue. This mirrors the same asymmetry RoomCell.vue's
 * hide/unhide pair already documents.
 *
 * `mode: 'error'` opens straight into the error branch. That is how a failed
 * UNBLOCK surfaces: it has no confirm step to fall back into, but it still
 * needs to tell the user the request failed rather than silently reverting.
 * The error copy is therefore written about the block STATUS ("couldn't
 * update"), not about the block direction, so one string set covers both.
 */
type __VLS_Props = {
    roomId: string;
    uid: string;
    mode?: 'confirm' | 'error';
};
declare const __VLS_export: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    mode: "confirm" | "error";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
