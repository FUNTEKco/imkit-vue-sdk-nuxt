declare const _default: import('vue').DefineComponent<__VLS_TypePropsToOption<{
    isTestPreview?: boolean;
    pinchatLink?: string;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    send: (...args: any[]) => void;
    goBack: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToOption<{
    isTestPreview?: boolean;
    pinchatLink?: string;
}>>> & {
    onSend?: ((...args: any[]) => any) | undefined;
    onGoBack?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;

type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
