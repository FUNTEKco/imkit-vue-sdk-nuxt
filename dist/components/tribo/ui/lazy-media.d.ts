import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    bucketName: {
        type: StringConstructor;
        default: string;
    };
    fileId: {
        type: StringConstructor;
        default: string;
    };
    previewFileId: {
        type: StringConstructor;
        default: string;
    };
    alt: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        required: true;
    };
    sender: {
        type: StringConstructor;
        default: string;
    };
    date: {
        type: StringConstructor;
        default: string;
    };
    onClick: {
        type: PropType<() => void>;
        required: true;
    };
    class: {
        type: null;
        default: undefined;
    };
}>, () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    bucketName: {
        type: StringConstructor;
        default: string;
    };
    fileId: {
        type: StringConstructor;
        default: string;
    };
    previewFileId: {
        type: StringConstructor;
        default: string;
    };
    alt: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        required: true;
    };
    sender: {
        type: StringConstructor;
        default: string;
    };
    date: {
        type: StringConstructor;
        default: string;
    };
    onClick: {
        type: PropType<() => void>;
        required: true;
    };
    class: {
        type: null;
        default: undefined;
    };
}>> & Readonly<{}>, {
    bucketName: string;
    fileId: string;
    class: any;
    alt: string;
    sender: string;
    date: string;
    previewFileId: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
