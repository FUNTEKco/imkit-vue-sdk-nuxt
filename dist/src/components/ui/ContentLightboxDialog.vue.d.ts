import { default as ChatRoomContent } from '../../classes/chatRoomContent';
import { default as IMImage } from '../../classes/image';
import { default as IMVideo } from '../../classes/video';
type __VLS_Props = {
    open?: boolean;
    selectedMedia?: ChatRoomContent | null;
    previousMedia?: () => void;
    nextMedia?: () => void;
    mediaCount?: number;
    image?: IMImage | null;
    video?: IMVideo | null;
    roomId?: string | null;
    senderName?: string | null;
    createdAt?: string | number | null;
    showDownload?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
    "update:open": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClose?: (() => any) | undefined;
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
}>, {
    createdAt: string | number | null;
    image: IMImage | null;
    video: IMVideo | null;
    open: boolean;
    roomId: string | null;
    selectedMedia: ChatRoomContent | null;
    previousMedia: () => void;
    nextMedia: () => void;
    mediaCount: number;
    senderName: string | null;
    showDownload: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
