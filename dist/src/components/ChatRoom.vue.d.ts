declare function __VLS_template(): {
    slots: {
        setting?(_: {}): any;
    };
    refs: {
        vl: any;
        input: HTMLTextAreaElement;
        fileInput: HTMLInputElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    isTestPreview?: boolean;
    pinchatLink?: string;
    chatStyle?: any;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    send: (...args: any[]) => void;
    goBack: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<{
    isTestPreview?: boolean;
    pinchatLink?: string;
    chatStyle?: any;
}> & Readonly<{
    onSend?: ((...args: any[]) => any) | undefined;
    onGoBack?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
