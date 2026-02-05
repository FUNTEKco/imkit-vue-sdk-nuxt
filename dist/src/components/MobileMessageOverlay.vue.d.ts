import { Component, StyleValue } from 'vue';
import { default as Message } from '../classes/message';
import { RoomType } from '../classes/room';
type __VLS_Props = {
    visible: boolean;
    highlightRect: DOMRect | null;
    message: Message;
    messageContent: Component;
    messageBlockClass: string[];
    messageStyle: StyleValue;
    isOutgoing: boolean;
    canCopy: boolean;
    canReply: boolean;
    canTranslate: boolean;
    canEdit: boolean;
    isSuperuser: boolean;
    roomType: RoomType;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    edit: () => any;
    delete: () => any;
    copy: () => any;
    unsend: () => any;
    translate: () => any;
    reply: () => any;
    selectEmoji: (emoji: string) => any;
    dismiss: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onEdit?: (() => any) | undefined;
    onDelete?: (() => any) | undefined;
    onCopy?: (() => any) | undefined;
    onUnsend?: (() => any) | undefined;
    onTranslate?: (() => any) | undefined;
    onReply?: (() => any) | undefined;
    onSelectEmoji?: ((emoji: string) => any) | undefined;
    onDismiss?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    overlayRef: HTMLDivElement;
    actionMenuRef: HTMLDivElement;
}, any>;
export default _default;
