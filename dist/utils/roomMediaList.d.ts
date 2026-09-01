import { default as IMImage } from '../classes/image';
import { default as Message } from '../classes/message';
import { default as IMVideo } from '../classes/video';
type RoomMediaMetadata = {
    key: string;
    messageId: string;
    roomId: string;
    senderName: string;
    createdAt: number;
};
export type RoomMediaItem = (RoomMediaMetadata & {
    kind: 'image';
    imageIndex: number;
    image: IMImage;
}) | (RoomMediaMetadata & {
    kind: 'video';
    video: IMVideo;
});
export declare function collectRoomMediaItems(messages: readonly Message[]): RoomMediaItem[];
export {};
