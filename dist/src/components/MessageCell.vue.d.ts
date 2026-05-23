import { default as Message } from '../classes/message';
type __VLS_Props = {
    source: Message;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "popover:open": (id: string) => any;
    "popover:close": (id: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onPopover:open"?: ((id: string) => any) | undefined;
    "onPopover:close"?: ((id: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    messageCellRef: HTMLDivElement;
}, any>;
export default _default;
