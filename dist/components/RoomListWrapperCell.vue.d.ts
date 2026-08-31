import { default as Folder } from './../classes/folder';
import { default as Room } from './../classes/room';
import { default as RoomListHeading } from './../classes/roomListHeading';
type __VLS_Props = {
    source: Room | Folder | RoomListHeading;
};
declare const __VLS_export: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "manage-folders": () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onManage-folders"?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
