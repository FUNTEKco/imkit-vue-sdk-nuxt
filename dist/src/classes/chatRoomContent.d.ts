export interface ChatRoomContent {
    _id: string;
    appID: string;
    client: MediaClient;
    room: string;
    key: string;
    size: number;
    mimetype: string;
    originalName: string;
    fileType: string;
    tags: string[];
    createdAt: string;
    createdAtMS: number;
    updatedAt: string;
    updatedAtMS: number;
    preview: {
        _id: string;
        key: string;
        size: number;
        mimetype: string;
        originalName: string;
        fileType: string;
        signedUrl: string;
    } | null;
    __v: number;
}
export interface MediaClient {
    _id: string;
    id: string;
    avatarUrl: string;
    nickname: string;
    lastLoginTime: string;
    lastLoginTimeMS: number;
    lastActiveTime: string;
    lastActiveTimeMS: number;
}
export default ChatRoomContent;
