import { default as Message } from './message';
export declare enum RoomType {
    Direct = "direct",
    Group = "group"
}
type Avatar = {
    url: string;
    name: string;
};
export interface RawRoomMember {
    _id: string;
    clientType?: string;
    members?: {
        _id: string;
    }[];
}
export interface RawRoom {
    [key: string]: unknown;
    members?: RawRoomMember[];
}
type RoomPref = {
    tags: string[];
    tagColors: {
        [tag: string]: string;
    };
    sticky: boolean;
    hidden: boolean;
    summary?: string;
} | null;
declare class Room {
    id: string;
    name: string;
    type: RoomType;
    createdAt: number;
    updatedAt: number;
    memberIds: string[];
    isOutgoingGroupSender: {
        [id: string]: boolean;
    };
    coverUrl: string;
    lastMessage: Message | null;
    numberOfUnread: number;
    lastReadMessageId: {
        [uid: string]: string;
    };
    pref: RoomPref;
    roomTags: string[];
    extra: Record<string, unknown>;
    muted: boolean;
    isSuperuser: boolean;
    isMentioned: boolean;
    constructor(raw: RawRoom, uid: string);
    get isGroup(): boolean;
    get isPinchatAi(): boolean;
    get memberIdsWithoutMeAndMyGroup(): string[];
    get displayName(): string;
    get linkName(): string;
    get avatars(): Avatar[];
}
export default Room;
