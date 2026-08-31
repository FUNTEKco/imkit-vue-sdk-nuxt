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
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    placeholder?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    retry: () => any;
    error: () => any;
    load: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onRetry?: (() => any) | undefined;
    onError?: (() => any) | undefined;
    onLoad?: (() => any) | undefined;
}>, {
    alt: string;
    kind: "image" | "video";
    imgClass: string;
    variant: "thumb" | "full";
    imgStyle: string | false | import('vue').CSSProperties | StyleValue[] | null;
    noCallout: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
