import { default as Message } from '../classes/message';
type MessageEntryAnimation = {
    origin: 'local' | 'incoming';
    createdAt: number;
    played: boolean;
};
export declare const markMessageEntryAnimation: (message: Message, origin?: MessageEntryAnimation["origin"]) => void;
export declare const transferMessageEntryAnimation: (source: Message, target: Message) => void;
export declare const getMessageEntryAnimation: (message: Message) => MessageEntryAnimation | undefined;
export {};
