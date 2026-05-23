import { App } from 'vue';
import { ModalsContainer } from 'vue-final-modal';
import { default as Config } from './classes/config';
import { default as Message } from './classes/message';
import { default as User } from './classes/user';
import { default as ChatRoom } from './components/ChatRoom.vue';
import { default as ChatRoomInfo } from './components/ChatRoomInfo.vue';
import { default as RoomList } from './components/RoomList.vue';
type Options = {
    config: Config;
};
export { clearSignedUrlCache } from './runtime/signedUrlStore';
export { useImkitStore, type ImkitStore } from './stores/imkit';
export { ChatRoom, ChatRoomInfo, Message, ModalsContainer, RoomList, User };
export declare const installAppLevel: (app: App) => void;
declare const _default: {
    install: (app: App, options: Options & {
        store?: unknown;
    }) => Promise<void>;
};
export default _default;
