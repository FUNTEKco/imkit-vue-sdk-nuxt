/** Keep virtual-row painting and navigation on the same animation clock. */
export declare const createMessageNavigationScroll: ({ getOffset, getMaxOffset, setOffset, onCancel }: {
    getOffset: () => number;
    getMaxOffset: () => number;
    setOffset: (offset: number) => void;
    onCancel: () => void;
}) => {
    start: (offset: number, { followTail }?: {
        followTail?: boolean;
    }) => boolean;
    cancel: () => void;
    finish: () => void;
    isRunning: () => boolean;
};
