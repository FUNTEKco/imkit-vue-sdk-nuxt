import { default as ChatRoomContent } from '../classes/chatRoomContent';
export declare const getChatRoomContentFileExtension: (file: Pick<ChatRoomContent, "fileType" | "originalName">) => string;
export declare const sortChatRoomContentMedia: (media: readonly ChatRoomContent[]) => ChatRoomContent[];
