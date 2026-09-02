declare var __VLS_43: {}, __VLS_57: {}, __VLS_74: {};
type __VLS_Slots = {} & {
    quickActions?: (props: typeof __VLS_43) => any;
} & {
    default?: (props: typeof __VLS_57) => any;
} & {
    afterChatbotSwitch?: (props: typeof __VLS_74) => any;
};
declare const __VLS_base: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
