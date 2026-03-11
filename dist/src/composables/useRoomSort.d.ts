export declare function useRoomSort(): {
    sortType: import('vue').Ref<"unread" | "time", "unread" | "time">;
    showSortMenu: import('vue').Ref<boolean, boolean>;
    isFirstLoading: import('vue').Ref<boolean, boolean>;
    setSortType: (type: "time" | "unread") => Promise<void>;
};
