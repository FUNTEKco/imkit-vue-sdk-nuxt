type __VLS_Props = {
    title: string;
    confirmLabel: string;
    cancelLabel?: string;
    confirmVariant?: 'danger' | 'primary';
    loading?: boolean;
    disabled?: boolean;
    confirmTestId?: string;
    cancelTestId?: string;
    contentClass?: string;
    clickToClose?: boolean;
    escToClose?: boolean;
};
declare var __VLS_8: {}, __VLS_10: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
} & {
    extra?: (props: typeof __VLS_10) => any;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    confirm: () => any;
    cancel: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onConfirm?: (() => any) | undefined;
    onCancel?: (() => any) | undefined;
}>, {
    cancelLabel: string;
    confirmVariant: "danger" | "primary";
    loading: boolean;
    disabled: boolean;
    confirmTestId: string;
    cancelTestId: string;
    contentClass: string;
    clickToClose: boolean;
    escToClose: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
