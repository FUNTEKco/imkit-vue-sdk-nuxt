import { AxiosInstance } from 'axios';
export declare const fetchImageAsBase64: (url: string, onProgress?: (ratio: number) => void) => Promise<string>;
export declare const refreshS3PresignedUrl: (axios: AxiosInstance, s3Url: string) => Promise<string | null>;
export declare const resolveFilesProxyUrl: (axios: AxiosInstance, url: string) => Promise<string | null>;
