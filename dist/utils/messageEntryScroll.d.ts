/** Follow a changing tail without restarting the entry's animation clock. */
export declare const createMessageEntryScroll: ({ getOffset, getTarget, getViewportSize, setOffset, onFinish, onCancel }: {
    getOffset: () => number;
    getTarget: () => number;
    getViewportSize: () => number;
    setOffset: (offset: number) => void;
    onFinish: () => void;
    onCancel: () => void;
}) => {
    start: (restart?: boolean) => void;
    cancel: () => void;
    isRunning: () => boolean;
};
