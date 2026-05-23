import { ComputedRef, Ref } from 'vue';
import { default as Message } from '../classes/message';
import { default as Room } from '../classes/room';
type UseMessageListStateOptions = {
    room: Ref<Room | undefined>;
    scrollEl: Ref<HTMLElement | null>;
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
export type UseMessageListStateReturn = {
    isInitialLoaded: Ref<boolean>;
    isLatestMessageVisible: Ref<boolean>;
    isNearBottom: () => boolean;
    isPrepending: Ref<boolean>;
    isRequesting: ComputedRef<boolean>;
    onVlScroll: (offset: number) => void;
    reloadData: (roomId: string, resetInitialLoaded?: boolean) => Promise<void>;
    scrollToBottom: () => Promise<void>;
    setVl: (el: unknown) => void;
    sortedMessages: ComputedRef<Message[]>;
    tobottom: () => Promise<void>;
    totop: () => Promise<void>;
    vl: Ref<VirtualizerLike | null>;
};
export declare const useMessageListState: ({ room, scrollEl }: UseMessageListStateOptions) => UseMessageListStateReturn;
export {};
