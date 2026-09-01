import { default as ChatRoomContent } from '../../classes/chatRoomContent';
import { default as Folder } from '../../classes/folder';
import { default as LinkPreview } from '../../classes/linkPreview';
import { default as Message } from '../../classes/message';
import { default as MessageMultiList } from '../../classes/messageMultiList';
import { default as Room } from '../../classes/room';
import { default as User } from '../../classes/user';
import { SearchType } from '../../enums/searchType';
export type TypingStatus = {
    kind: 'expires';
    timeoutId: number;
} | {
    kind: 'until-message';
    messageId: string;
    timeoutId: number;
};
export type ImkitState = {
    isRequesting: {
        [api: string]: Date | null;
    };
    users: {
        [uid: string]: User;
    };
    rooms: {
        [id: string]: Room;
    };
    sortedRooms: Room[];
    numberOfFetchedRooms: number;
    numberOfTotalRooms: number;
    uploadProgresses: {
        [id: string]: number;
    };
    downloadProgresses: {
        [id: string]: number;
    };
    linkPreviews: {
        [url: string]: LinkPreview;
    };
    loadingLinkPreviews: Set<string>;
    actionMenuRoomId: string;
    folders: {
        [id: string]: Folder;
    };
    sortedFolderIds: string[];
    roomIdsInFolders: {
        [roomId: string]: boolean;
    };
    selectedRoomIdsForCreateFolder: {
        [roomId: string]: Date;
    };
    selectedFolderId: string;
    searchKeyword: string;
    searchType: SearchType;
    searchRooms: {
        [type: string]: Room[] | Folder[];
    };
    roomTag: string;
    sortBy: string;
    sortUnreadFirst: number;
    stickyUnreadRoomIds: {
        [id: string]: true;
    };
    deliveringMessages: Map<string, Message>;
    processingMessages: Map<string, Message>;
    selectedRoomId: string;
    messageMultiLists: Map<string, MessageMultiList>;
    numberOfTotalMessages: Map<string, number>;
    replyId: string;
    editingMessageId: string;
    navigationTargetId: string;
    isRoomInfoVisible: boolean;
    isRoomContentVisible: boolean;
    isTyping: {
        [uid: string]: TypingStatus;
    };
    isSearchInRoomMode: boolean;
    messageSearchKeyword: string;
    searchedMessageIds: Map<string, string[]>;
    blockedUsers: {
        [uid: string]: boolean;
    };
    activeActionMessageId: string;
    isNavigatingToMessage: boolean;
    sessionEpoch: number;
    reconnectResyncTick: number;
    lastReconnectResyncAt: number;
    trailingReconnectResyncTimer: ReturnType<typeof setTimeout> | null;
    aggregateCoalesceTimer: ReturnType<typeof setTimeout> | null;
    chatRoomContentMedia: ChatRoomContent[];
    chatRoomContentFiles: ChatRoomContent[];
    chatRoomContentMediaRoomId: string;
    chatRoomContentFilesRoomId: string;
    chatRoomContentMediaLoading: boolean;
    chatRoomContentFilesLoading: boolean;
    chatRoomContentMediaOffset: number;
    chatRoomContentMediaTotalCount: number;
    chatRoomContentMediaHasMore: boolean;
    chatRoomContentMediaLoadingMore: boolean;
    chatRoomContentFilesOffset: number;
    chatRoomContentFilesTotalCount: number;
    chatRoomContentFilesHasMore: boolean;
    chatRoomContentFilesLoadingMore: boolean;
};
export declare const createState: () => ImkitState;
