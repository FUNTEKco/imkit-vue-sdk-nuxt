import { default as ChatRoomContent } from '../classes/chatRoomContent';
import { RoomMediaItem } from './roomMediaList';
export declare const getChatRoomContentFileExtension: (file: Pick<ChatRoomContent, "fileType" | "originalName">) => string;
export declare const indexRoomMedia: (messageMedia: readonly RoomMediaItem[]) => Map<string, {
    createdAt: number;
    index: number;
    messageId: string;
    mediaIndex: number;
}>;
export declare const getChatRoomContentMediaTime: (media: ChatRoomContent) => number;
export declare const sortChatRoomContentMedia: (media: readonly ChatRoomContent[], messageMedia?: readonly RoomMediaItem[], sortOrder?: "asc" | "desc") => ChatRoomContent[];
