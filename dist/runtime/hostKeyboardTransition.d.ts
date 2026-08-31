export declare const hostKeyboardTransition: {
    supported: Readonly<import('vue').Ref<boolean, boolean>>;
    visible: Readonly<import('vue').Ref<boolean, boolean>>;
    endSequence: Readonly<import('vue').Ref<number, number>>;
};
export declare const applyHostCapabilities: (payload: Record<string, unknown>) => void;
export declare const applyKeyboardTransitionEnd: (payload: Record<string, unknown>) => void;
export declare const addKeyboardTransitionEndListener: (listener: () => void) => (() => void);
export declare const _resetHostKeyboardTransitionForTests: () => void;
