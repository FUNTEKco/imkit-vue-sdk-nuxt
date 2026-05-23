import { StyleValue } from 'vue';
type __VLS_Props = {
    url: string;
    alt?: string;
    variant?: 'thumb' | 'full';
    kind?: 'image' | 'video';
    imgClass?: string;
    imgStyle?: StyleValue;
    noCallout?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        placeholder?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    retry: () => any;
    error: () => any;
    load: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onRetry?: (() => any) | undefined;
    onError?: (() => any) | undefined;
    onLoad?: (() => any) | undefined;
}>, {
    imgClass: string;
    alt: string;
    variant: "thumb" | "full";
    kind: "image" | "video";
    imgStyle: string | false | import('vue').CSSProperties | StyleValue[] | null;
    noCallout: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
