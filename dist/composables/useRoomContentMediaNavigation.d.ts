import { default as ChatRoomContent } from '../classes/chatRoomContent';
export declare function useRoomContentMediaNavigation(getRoomId: () => string | undefined): {
    orderedMedia: import('vue').ComputedRef<ChatRoomContent[]>;
    selectedMedia: import('vue').ComputedRef<ChatRoomContent>;
    selectedMediaIndex: import('vue').ComputedRef<number>;
    mediaCount: import('vue').ComputedRef<number>;
    canNavigatePrevious: import('vue').ComputedRef<boolean>;
    canNavigateNext: import('vue').ComputedRef<boolean>;
    selectMedia: (media: ChatRoomContent | null) => void;
    previousMedia: () => Promise<void>;
    nextMedia: () => Promise<void>;
};
