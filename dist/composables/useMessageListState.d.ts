import { ComputedRef, Ref } from 'vue';
import { default as Message } from '../classes/message';
import { default as Room } from '../classes/room';
type UseMessageListStateOptions = {
    room: Ref<Room | undefined>;
    scrollEl: Ref<HTMLElement | null>;
    isMessageMenuOpen?: Ref<boolean> | ComputedRef<boolean>;
};
type ScrollAlign = 'start' | 'center' | 'end' | 'nearest';
type VirtualizerLike = {
    readonly scrollOffset: number;
    readonly scrollSize: number;
    readonly viewportSize: number;
    scrollToIndex: (index: number, opts?: {
        align?: ScrollAlign;
        smooth?: boolean;
        offset?: number;
    }) => void;
    scrollTo: (offset: number) => void;
};
type ScrollToBottomOptions = {
    animation?: 'entry' | 'native';
    restartEntry?: boolean;
};
export type UseMessageListStateReturn = {
    jumpToLatest: () => Promise<void>;
    isInitialLoaded: Ref<boolean>;
    isLatestMessageVisible: Ref<boolean>;
    isNearBottom: () => boolean;
    isPrepending: Ref<boolean>;
    isRequesting: ComputedRef<boolean>;
    isScrollToBottomVisible: ComputedRef<boolean>;
    messageListKey: Ref<number>;
    onVlScroll: (offset: number) => void;
    onVlScrollEnd: () => void;
    reloadData: (roomId: string, resetInitialLoaded?: boolean) => Promise<void>;
    scrollToBottom: (options?: ScrollToBottomOptions) => Promise<void>;
    setVl: (el: unknown) => void;
    sortedMessages: ComputedRef<Message[]>;
    tobottom: () => Promise<void>;
    totop: () => Promise<void>;
    vl: Ref<VirtualizerLike | null>;
};
export declare const useMessageListState: ({ room, scrollEl, isMessageMenuOpen }: UseMessageListStateOptions) => UseMessageListStateReturn;
export {};
