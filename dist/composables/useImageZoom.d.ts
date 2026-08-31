import { CSSProperties, Ref } from 'vue';
export declare const useImageZoom: (containerRef: Ref<HTMLElement | null>, options?: {
    maxScale?: number;
    doubleTapScale?: number;
}) => {
    imageStyle: import('vue').ComputedRef<CSSProperties>;
    isInteracting: Ref<boolean, boolean>;
    isZoomed: import('vue').ComputedRef<boolean>;
    onDoubleClick: (event: MouseEvent) => void;
    onPointerCancel: (event: PointerEvent) => void;
    onPointerDown: (event: PointerEvent) => void;
    onPointerMove: (event: PointerEvent) => void;
    onPointerUp: (event: PointerEvent) => void;
    reset: () => void;
    scale: Ref<number, number>;
    translateX: Ref<number, number>;
    translateY: Ref<number, number>;
};
