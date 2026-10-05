import { default as Message } from '../classes/message';
export declare const registerNotificationRoomView: (currentVisibleRoom: () => string | undefined) => (() => void);
export declare const stopNotificationSound: () => void;
export declare const initNotificationSound: () => void;
export declare const notifyIncomingMessage: (message: Message, previousLastMessage?: Message | null) => void;
