import { default as Message } from '../classes/message';
type __VLS_Props = {
    source: Message;
    actionClaimLocked?: boolean;
    ownBubbleStyle?: Record<string, string>;
};
declare const __VLS_export: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "popover:open": (id: string) => any;
    "popover:close": (id: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onPopover:open"?: ((id: string) => any) | undefined;
    "onPopover:close"?: ((id: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
