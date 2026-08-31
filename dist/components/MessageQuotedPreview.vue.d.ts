type __VLS_Props = {
    available: boolean;
    replySenderName?: string;
    description: string;
    isIncoming: boolean;
    unavailable: boolean;
};
declare const __VLS_export: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    navigate: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onNavigate?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
