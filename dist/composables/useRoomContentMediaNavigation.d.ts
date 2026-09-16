import { default as ChatRoomContent } from '../classes/chatRoomContent';
import { default as Message } from '../classes/message';
export declare function useRoomContentMediaNavigation(getRoomId: () => string | undefined, getAdditionalMessages?: () => readonly Message[], collection?: 'Media' | 'Preview'): {
    orderedMedia: import('vue').ComputedRef<ChatRoomContent[]>;
    newestFirstMedia: import('vue').ComputedRef<ChatRoomContent[]>;
    sortNewestFirst: (media: readonly ChatRoomContent[]) => ChatRoomContent[];
    getMediaCreatedAt: (media: ChatRoomContent) => number;
    selectedMedia: import('vue').ComputedRef<ChatRoomContent>;
    selectedMediaIndex: import('vue').ComputedRef<number>;
    mediaCount: import('vue').ComputedRef<number>;
    canNavigateNext: import('vue').ComputedRef<boolean>;
    canNavigatePrevious: import('vue').ComputedRef<boolean>;
    selectMedia: (media: ChatRoomContent | null) => void;
    nextMedia: () => Promise<void>;
    previousMedia: () => Promise<void>;
};
