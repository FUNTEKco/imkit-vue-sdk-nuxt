import { ComputedRef } from 'vue';
import { MessageStatus } from '../classes/message';
interface MessageLoadingOptions {
    status: ComputedRef<MessageStatus>;
    isOutgoing: ComputedRef<boolean>;
    /** 延遲多久後顯示 loading (ms) */
    delay?: number;
    /** 最少顯示 loading 的時間 (ms) */
    minDuration?: number;
}
export declare function useMessageLoading(options: MessageLoadingOptions): {
    showLoading: import('vue').Ref<boolean, boolean>;
};
export {};
