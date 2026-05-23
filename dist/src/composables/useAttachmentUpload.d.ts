import { Ref } from 'vue';
import { default as IMImage } from '../classes/image';
import { default as User } from '../classes/user';
import { default as IMVideo } from '../classes/video';
type FileMessagePayload = {
    roomId: string;
    messageType: 'file';
    file: File;
    originalUrl: string;
    extra: {
        mimeType: string;
        fileName: string;
        bytes: number;
        fileExtension: string | undefined;
    };
};
type UseAttachmentUploadOptions = {
    roomId: Ref<string>;
    users: Ref<Record<string, User>>;
    fileSizeLimit: Ref<number>;
    fileInput: Ref<HTMLInputElement | undefined>;
    onOversize: () => void;
    sendFile: (payload: FileMessagePayload) => Promise<unknown>;
    fetchPresignedUrlByPath: (path: string) => Promise<string | null>;
};
export declare const useAttachmentUpload: ({ roomId, users, fileSizeLimit, fileInput, onOversize, sendFile, fetchPresignedUrlByPath }: UseAttachmentUploadOptions) => {
    images: Ref<{
        id: string;
        width: number;
        height: number;
        thumbnailUrl: string;
        originalUrl: string;
    }[], IMImage[] | {
        id: string;
        width: number;
        height: number;
        thumbnailUrl: string;
        originalUrl: string;
    }[]>;
    imageFiles: Ref<{
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
    }[], File[] | {
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
    }[]>;
    videos: Ref<{
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
    }[], IMVideo[] | {
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
    }[]>;
    videoFiles: Ref<{
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
    }[], File[] | {
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
    }[]>;
    isLoadingFiles: Ref<boolean, boolean>;
    isLoadingVideo: Ref<boolean, boolean>;
    showImageLightbox: Ref<boolean, boolean>;
    selectedImageIndex: Ref<number, number>;
    showVideoLightbox: Ref<boolean, boolean>;
    selectedVideoUrl: Ref<string | null, string | null>;
    onFileChange: (event: Event) => Promise<void>;
    onDrop: (event: DragEvent) => Promise<void>;
    onPaste: (event: ClipboardEvent) => Promise<void>;
    removeImageAtIndex: (index: number) => void;
    removeVideoAtIndex: (index: number) => void;
    openImageLightbox: (index: number) => void;
    openVideoLightbox: (index: number) => void;
    handleVideoLightboxOpenChange: (val?: boolean) => void;
    previousImage: () => void;
    nextImage: () => void;
};
export {};
