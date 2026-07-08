import { MessageStatus } from '../classes/message';
import { RoomType } from '../classes/room';
type __VLS_Props = {
    direction: 'outgoing' | 'incoming';
    showLoading: boolean;
    status: MessageStatus;
    isEdited: boolean;
    createdAt: number;
    numberOfRead: number;
    enableReadReceipt: boolean;
    roomType: RoomType;
};
declare const __VLS_export: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    showActions: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onShowActions?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
