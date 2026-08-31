type __VLS_Props = {
    sortType: 'time' | 'unread';
    showDarkModeSwitch: boolean;
    massTextingEnabled: boolean;
};
declare var __VLS_6: {}, __VLS_20: {}, __VLS_90: {}, __VLS_141: {};
type __VLS_Slots = {} & {
    leading?: (props: typeof __VLS_6) => any;
} & {
    'menu-trigger'?: (props: typeof __VLS_20) => any;
} & {
    'menu-extra'?: (props: typeof __VLS_90) => any;
} & {
    trailing?: (props: typeof __VLS_141) => any;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    createFolder: () => any;
    massTexting: () => any;
    sort: (type: "unread" | "time") => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onCreateFolder?: (() => any) | undefined;
    onMassTexting?: (() => any) | undefined;
    onSort?: ((type: "unread" | "time") => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
