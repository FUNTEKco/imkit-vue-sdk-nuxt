import { Ref } from 'vue';
export declare function usePointerDetection(): {
    hasFinePointer: Ref<boolean, boolean>;
};
export declare function useLongPress(target: Ref<HTMLElement | null>, callback: () => void, hasFinePointer: Ref<boolean>): {
    bindLongPress: () => void;
};
