export interface UseRoomSearchOptions {
    fetchTask: () => Promise<void>;
}
export declare function useRoomSearch({ fetchTask }: UseRoomSearchOptions): {
    searchKeyword: import('vue').Ref<string, string>;
    searchInput: import('vue').Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
    isCompositting: import('vue').Ref<boolean, boolean>;
    isAPIRequesting: import('vue').Ref<boolean, boolean>;
    searchRooms: () => Promise<void>;
    clearSearch: () => void;
};
