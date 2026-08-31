import { Component } from 'vue';
/**
 * The inside of an action-menu row: glyph, label, and an optional trailing
 * slot. Deliberately NOT the row itself — each menu keeps its own container,
 * because they are not the same control:
 *
 *  - the message menu and the room-list menu render radix `DropdownMenuItem`s
 *    inside a `DropdownMenuContent`;
 *  - `MobileMessageOverlay` is a long-press sheet with its own overlay,
 *    positioning and dismissal, so wrapping it in a radix DropdownMenu just to
 *    borrow item styling would drag in modal focus-trapping,
 *    outside-pointer-event handling and floating positioning that fight what
 *    the sheet already does.
 *
 * What they DO share is the part that broke three times in one round: the
 * glyph's colour has to follow the item's danger state. It sits on the icon
 * element, and a child's own declaration beats the colour inherited from the
 * row, so any menu that writes a muted class there silently renders a grey
 * glyph beside a red label. Fixing the message menu did not fix the room list;
 * fixing the room list did not fix the mobile sheet; and a source guard
 * written in between missed the sheet entirely because it keyed on
 * `DropdownMenuItem`.
 *
 * Binding both colours to one prop here makes that class of bug
 * unrepresentable rather than merely guarded. `tests/dangerMenuIconColour.ts`
 * stays as cheap insurance for any menu that still hand-rolls its row.
 */
type __VLS_Props = {
    icon: Component;
    label: string;
    danger?: boolean;
    /**
     * `touch` is for the mobile sheet: a 48px row (Android's minimum target,
     * and above iOS's 44pt) with a proportionally larger glyph. The compact
     * size is the desktop pointer default.
     */
    size?: 'compact' | 'touch';
};
declare var __VLS_6: {};
type __VLS_Slots = {} & {
    trailing?: (props: typeof __VLS_6) => any;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    size: "compact" | "touch";
    danger: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
