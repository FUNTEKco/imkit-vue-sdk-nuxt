type __VLS_Props = {
    isTestPreview?: boolean;
    pinchatLink?: string;
    chatStyle?: any;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        setting?(_: {}): any;
        'header-right'?(_: {}): any;
    };
    refs: {
        scrollEl: HTMLDivElement;
        headerEl: HTMLDivElement;
        input: HTMLDivElement;
        formatMenu: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            inputElement: HTMLDivElement | undefined;
        }> & Readonly<{
            "onFormat-applied"?: (() => any) | undefined;
        }>, {
            checkSelection: () => void;
            hideMenu: () => void;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            "format-applied": () => any;
        }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            inputElement: HTMLDivElement | undefined;
        }> & Readonly<{
            "onFormat-applied"?: (() => any) | undefined;
        }>, {
            checkSelection: () => void;
            hideMenu: () => void;
        }, {}, {}, {}, {}> | null;
        stickerButtonEl: HTMLButtonElement;
        emojiButtonEl: HTMLButtonElement;
        fileInput: HTMLInputElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    send: () => any;
    goBack: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSend?: (() => any) | undefined;
    onGoBack?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    scrollEl: HTMLDivElement;
    headerEl: HTMLDivElement;
    input: HTMLDivElement;
    formatMenu: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
        inputElement: HTMLDivElement | undefined;
    }> & Readonly<{
        "onFormat-applied"?: (() => any) | undefined;
    }>, {
        checkSelection: () => void;
        hideMenu: () => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "format-applied": () => any;
    }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        inputElement: HTMLDivElement | undefined;
    }> & Readonly<{
        "onFormat-applied"?: (() => any) | undefined;
    }>, {
        checkSelection: () => void;
        hideMenu: () => void;
    }, {}, {}, {}, {}> | null;
    stickerButtonEl: HTMLButtonElement;
    emojiButtonEl: HTMLButtonElement;
    fileInput: HTMLInputElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
