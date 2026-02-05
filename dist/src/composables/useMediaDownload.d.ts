/** Common MIME types used in media download */
export declare const MIME_TYPES: {
    readonly IMAGE_JPEG: "image/jpeg";
    readonly VIDEO_MP4: "video/mp4";
    readonly OCTET_STREAM: "application/octet-stream";
};
export interface DownloadOptions {
    url: string;
    fileName?: string;
    fallbackId?: string;
    mimeType?: string;
    cachedDataUrl?: string;
    /** 使用 signed URL 下載（適合大檔案如影片） */
    useSignedUrl?: boolean;
    /** 已取得的 signed URL（如果有的話） */
    signedUrl?: string;
}
export declare function useMediaDownload(): {
    isDownloading: import('vue').Ref<boolean, boolean>;
    downloadProgresses: import('vue').ComputedRef<any>;
    download: (options: DownloadOptions) => Promise<void>;
};
