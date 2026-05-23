import { default as IMImage } from '../../classes/image';
import { default as LinkPreview } from '../../classes/linkPreview';
import { default as Message } from '../../classes/message';
import { default as MessageLinkedList } from '../../classes/messageLinkedList';
import { default as Room } from '../../classes/room';
import { default as User } from '../../classes/user';
export declare const actions: {
    updateRoom(this: any, payload: Partial<Room> & {
        id: string;
    }): void;
    deleteRoom(this: any, roomId: string): void;
    fetchRooms(this: any, { pageSize }?: {
        pageSize?: number;
    }): Promise<Room[] | undefined>;
    fetchRoom(this: any, roomId: string): Promise<void>;
    fetchRoomsInFolders(this: any): Promise<void>;
    mergeInto(this: any, key: string, value: Record<string, unknown>): void;
    updateRoomPrefs(this: any, { roomId, prefs, roomTag }: {
        roomId: string;
        prefs: Record<string, unknown>;
        roomTag?: string;
    }): Promise<void>;
    fetchPrefs(this: any): Promise<void>;
    updatePref(this: any, { key, value }: {
        key: string;
        value: unknown;
    }): Promise<import('axios').AxiosResponse<any, any, {}>>;
    deletePref(this: any, key: string): Promise<import('axios').AxiosResponse<any, any, {}>>;
    updateFolder(this: any, payload: {
        folderKey: string;
        name: string;
    }): Promise<void>;
    removeFolder(this: any, folderId: string): Promise<void>;
    addRoomToFolder(this: any, payload: {
        roomId: string;
        folderId: string;
    }): Promise<void>;
    removeRoomFromFolder(this: any, payload: string | {
        roomId: string;
        folderId?: string;
    }): Promise<void>;
    setRoomTag(this: any, roomTag: string): void;
    aggregateRoomsAndFolders(this: any): Promise<void>;
    mergeUsers(this: any, users: Record<string, User>): void;
    updateLastRead(this: any, payload: string | {
        roomId: string;
        uid: string;
        messageId: string;
    }): Promise<void>;
    updateMessage(this: any, payload: Message): void;
    handleMessageFromSocket(this: any, payload: {
        message: Message;
        mentions?: string[];
    }): Promise<void>;
    handleRoomFromSocket(this: any, result: Record<string, unknown>): Promise<void>;
    handleLastReadFromSocket(this: any, event: {
        roomId: string;
        uid: string;
        messageId: string;
    }): Promise<void>;
    handlePrefChangeFromSocket(this: any, payload: {
        key: string;
        data: Record<string, unknown>[] | {
            children: {
                id: string;
            }[];
        };
    }): Promise<void>;
    handlePrefDeleteFromSocket(this: any, payload: string): Promise<void>;
    handleTypingFromSocket(this: any, payload: {
        room: string;
        sender: string;
        senderInfo: {
            _id: string;
            avatarUrl: string;
            isRobot: boolean;
            nickname: string;
        };
    }): Promise<void>;
    handleAIStreamingFromSocket(this: any, payload: {
        messageId: string;
        room: string;
        sender: string;
        text: string;
        senderInfo?: {
            _id: string;
            [key: string]: unknown;
        };
    }): Promise<void>;
    pushMessage(this: any, message: Message): void;
    replaceMessage(this: any, payload: {
        targetMessageId: string;
        message: Message;
    }): void;
    deleteMessages(this: any, messageIds: string[], roomId?: any): void;
    clearChatRoom(this: any): void;
    insertMessageLinkedList(this: any, linkedList: MessageLinkedList): void;
    concateMessageLinkedList(this: any, linkedList: MessageLinkedList): void;
    unshiftMessageLinkedList(this: any, linkedList: MessageLinkedList): void;
    loadMessages(this: any, { roomId, beforeMessageId, afterMessageId, targetMessageId }: {
        roomId: string;
        beforeMessageId?: string | null;
        afterMessageId?: string | null;
        targetMessageId?: string | null;
    }): Promise<any>;
    sendMessage(this: any, payload: Record<string, unknown>): Promise<Message | undefined>;
    retryMessage(this: any, localMessage: Message): Promise<Message | undefined>;
    batchSendMessage(payload: Record<string, unknown>): Promise<void>;
    recallMessage(this: any, payload: {
        roomId: string;
        _id: string;
    }): Promise<void>;
    editMessage(this: any, payload: {
        roomId: string;
        _id: string;
        message: string;
    }): Promise<void>;
    hideMessage(this: any, payload: {
        roomId: string;
        messageIds: string[];
    }): Promise<void>;
    deleteMessage(this: any, payload: {
        roomId: string;
        messageId: string;
    }): Promise<void>;
    uploadMedia(this: any, { id, file, roomId }: {
        id: string;
        roomId: string;
        file: File;
    }): Promise<string>;
    uploadImage(this: any, { image, file, roomId }: {
        roomId: string;
        image: IMImage;
        file: File;
    }): Promise<{
        originalUrl: any;
        thumbnailUrl: any;
    }>;
    fetchLinkPreview(this: any, url: string): Promise<LinkPreview>;
    handleLinkPreviews(this: any, messages: Message[]): Promise<void>;
    fetchVideoBlob(this: any, url: string): Promise<Blob>;
    fetchPresignedUrl(this: any, { bucketName, fileId }: {
        bucketName: string;
        fileId: string;
    }): Promise<any>;
    fetchPresignedUrlByPath(this: any, path: string): Promise<any>;
    navigateToMessage(this: any, messageId: string): Promise<void>;
    insertUnreadMessage(this: any, numberOfUnread: number): Promise<void>;
    removeUnreadMessage(this: any): Promise<void>;
    translate(this: any, text: string): Promise<string>;
    subscribe(this: any): Promise<void>;
    unsubscribe(this: any): Promise<void>;
    toggleNotification(this: any, roomId: string): Promise<void>;
    translateMessage(this: any, message: Message): Promise<void>;
    blockUser(this: any, { roomId, uid }: {
        roomId: string;
        uid: string;
    }): Promise<void>;
    unblockUser(this: any, { roomId, uid }: {
        roomId: string;
        uid: string;
    }): Promise<void>;
    getBlockList(this: any, roomId: string): Promise<void>;
    hideMessagesFromUserInRoom(this: any, roomId: string): Promise<void>;
    sendReaction(this: any, { messageId, reaction }: {
        messageId: string;
        reaction: string;
    }): Promise<void>;
    deleteReaction(this: any, { messageId, reaction }: {
        messageId: string;
        reaction: string;
    }): Promise<void>;
    removeMembers(this: any, { roomId, uids }: {
        roomId: string;
        uids: string[];
    }): Promise<void>;
    addLoadingLinkPreviews(this: any, urls: string[]): void;
    removeLoadingLinkPreview(this: any, url: string): void;
    searchRoomsByKeyword(this: any, keyword: string): Promise<void>;
};
