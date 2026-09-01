export interface UseInfiniteScrollOptions {
    fetchAction: 'fetchRoomContentMedia' | 'fetchRoomContentFiles';
    stateKey: 'chatRoomContentMedia' | 'chatRoomContentFiles';
    rootMargin?: string;
    sentinelDelay?: number;
}
export declare function useInfiniteScroll(options: UseInfiniteScrollOptions): {
    tabRef: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
    sentinelRef: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
    isFetching: import('vue').Ref<boolean, boolean>;
    data: import('vue').ComputedRef<{
        _id: string;
        appID: string;
        client: {
            _id: string;
            id: string;
            avatarUrl: string;
            nickname: string;
            lastLoginTime: string;
            lastLoginTimeMS: number;
            lastActiveTime: string;
            lastActiveTimeMS: number;
        };
        room: string;
        key: string;
        signedUrl?: string | undefined;
        size: number;
        mimetype: string;
        originalName: string;
        fileType: string;
        tags: string[];
        createdAt: string;
        createdAtMS: number;
        updatedAt: string;
        updatedAtMS: number;
        preview: {
            _id: string;
            key: string;
            size: number;
            mimetype: string;
            originalName: string;
            fileType: string;
            signedUrl: string;
        } | null;
        __v: number;
    }[]>;
    loading: import('vue').ComputedRef<boolean>;
    loadingMore: import('vue').ComputedRef<boolean>;
    hasMore: import('vue').ComputedRef<boolean>;
    reset: () => void;
    setupObserver: (roomIdGetter: () => string | undefined) => void;
    cleanup: () => void;
};
