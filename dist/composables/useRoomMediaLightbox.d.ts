import { default as Message } from '../classes/message';
import { RoomMediaItem } from '../utils/roomMediaList';
export declare function useRoomMediaLightbox(getMessage: () => Message): {
    open: import('vue').Ref<boolean, boolean>;
    mediaIndex: import('vue').Ref<number, number>;
    mediaItems: import('vue').Ref<({
        key: string;
        messageId: string;
        roomId: string;
        senderName: string;
        createdAt: number;
        kind: "image";
        imageIndex: number;
        image: {
            id: string;
            width: number;
            height: number;
            thumbnailUrl: string;
            originalUrl: string;
        };
    } | {
        key: string;
        messageId: string;
        roomId: string;
        senderName: string;
        createdAt: number;
        kind: "video";
        video: {
            id: string;
            width: number;
            height: number;
            thumbnailUrl: string;
            originalUrl: string;
            duration: number;
            thumbnailId?: string | undefined;
            thumbnailFile: {
                id: string;
                file: {
                    readonly lastModified: number;
                    readonly name: string;
                    readonly webkitRelativePath: string;
                    readonly size: number;
                    readonly type: string;
                    arrayBuffer: () => Promise<ArrayBuffer>;
                    bytes: () => Promise<Uint8Array<ArrayBuffer>>;
                    slice: (start?: number, end?: number, contentType?: string) => Blob;
                    stream: () => ReadableStream<Uint8Array<ArrayBuffer>>;
                    text: () => Promise<string>;
                };
            } | null | undefined;
        };
    })[], RoomMediaItem[] | ({
        key: string;
        messageId: string;
        roomId: string;
        senderName: string;
        createdAt: number;
        kind: "image";
        imageIndex: number;
        image: {
            id: string;
            width: number;
            height: number;
            thumbnailUrl: string;
            originalUrl: string;
        };
    } | {
        key: string;
        messageId: string;
        roomId: string;
        senderName: string;
        createdAt: number;
        kind: "video";
        video: {
            id: string;
            width: number;
            height: number;
            thumbnailUrl: string;
            originalUrl: string;
            duration: number;
            thumbnailId?: string | undefined;
            thumbnailFile: {
                id: string;
                file: {
                    readonly lastModified: number;
                    readonly name: string;
                    readonly webkitRelativePath: string;
                    readonly size: number;
                    readonly type: string;
                    arrayBuffer: () => Promise<ArrayBuffer>;
                    bytes: () => Promise<Uint8Array<ArrayBuffer>>;
                    slice: (start?: number, end?: number, contentType?: string) => Blob;
                    stream: () => ReadableStream<Uint8Array<ArrayBuffer>>;
                    text: () => Promise<string>;
                };
            } | null | undefined;
        };
    })[]>;
    activeMediaItem: import('vue').ComputedRef<{
        key: string;
        messageId: string;
        roomId: string;
        senderName: string;
        createdAt: number;
        kind: "image";
        imageIndex: number;
        image: {
            id: string;
            width: number;
            height: number;
            thumbnailUrl: string;
            originalUrl: string;
        };
    } | {
        key: string;
        messageId: string;
        roomId: string;
        senderName: string;
        createdAt: number;
        kind: "video";
        video: {
            id: string;
            width: number;
            height: number;
            thumbnailUrl: string;
            originalUrl: string;
            duration: number;
            thumbnailId?: string | undefined;
            thumbnailFile: {
                id: string;
                file: {
                    readonly lastModified: number;
                    readonly name: string;
                    readonly webkitRelativePath: string;
                    readonly size: number;
                    readonly type: string;
                    arrayBuffer: () => Promise<ArrayBuffer>;
                    bytes: () => Promise<Uint8Array<ArrayBuffer>>;
                    slice: (start?: number, end?: number, contentType?: string) => Blob;
                    stream: () => ReadableStream<Uint8Array<ArrayBuffer>>;
                    text: () => Promise<string>;
                };
            } | null | undefined;
        };
    }>;
    selectedMedia: import('vue').ComputedRef<import('../classes/chatRoomContent').ChatRoomContent>;
    mediaCount: import('vue').ComputedRef<number>;
    canNavigatePrevious: import('vue').ComputedRef<boolean>;
    canNavigateNext: import('vue').ComputedRef<boolean>;
    openMessageMedia: (matches: (item: RoomMediaItem) => boolean) => void;
    previousMedia: () => Promise<void>;
    nextMedia: () => Promise<void>;
    close: () => void;
};
