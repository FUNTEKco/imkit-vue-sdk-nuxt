import { default as IMImage } from '../classes/image';
/**
 * Calculate display dimensions for an image in a grid layout.
 * Maintains aspect ratio for single images, uses fixed size for grids.
 */
export declare const calculateImageSize: (index: number, image: IMImage, totalImages: number) => {
    width: string;
    height: string;
};
