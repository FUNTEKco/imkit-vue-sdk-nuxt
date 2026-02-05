import { MessageStatus } from '../classes/message';
type __VLS_Props = {
    direction: 'outgoing' | 'incoming';
    canCopy: boolean;
    canReply: boolean;
    canTranslate: boolean;
    canEdit: boolean;
    isSuperuser: boolean;
    isGroupRoom: boolean;
    status: MessageStatus;
    compactMode?: boolean;
};
type __VLS_PublicProps = {
    'dropdownOpen'?: boolean;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    edit: () => any;
    delete: () => any;
    copy: () => any;
    unsend: () => any;
    translate: () => any;
    reply: () => any;
    selectEmoji: (emoji: string) => any;
    retry: () => any;
    deleteFailedMessage: () => any;
    "update:dropdownOpen": (...args: unknown[]) => any;
    dismiss: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onEdit?: (() => any) | undefined;
    onDelete?: (() => any) | undefined;
    onCopy?: (() => any) | undefined;
    onUnsend?: (() => any) | undefined;
    onTranslate?: (() => any) | undefined;
    onReply?: (() => any) | undefined;
    onSelectEmoji?: ((emoji: string) => any) | undefined;
    onRetry?: (() => any) | undefined;
    onDeleteFailedMessage?: (() => any) | undefined;
    "onUpdate:dropdownOpen"?: ((...args: unknown[]) => any) | undefined;
    onDismiss?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
