import { default as Message } from './message';
export declare enum RoomType {
    Direct = "direct",
    Group = "group"
}
export type PinchatAiScope = 'all' | 'enterpoint';
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
    /**
     * Whether the payload's `roomType` was the out-of-enum `'custom'` sentinel.
     *
     * `type` cannot answer this. A custom room is resolved below into Group or
     * Direct, and the collapse is lossy: everything that is not explicitly
     * `extra.roomType === 'group'` becomes Direct, so a custom room and a real
     * 1:1 room end up indistinguishable. That resolution is deliberate and must
     * not be widened — every `type === RoomType.*` check in the SDK depends on
     * the field holding a real enum member.
     *
     * This records the origin alongside it instead, for the places that need to
     * treat a custom room as multi-party even though it resolved to Direct.
     * PinChat's rooms are all `custom`, so on that branch this is the difference
     * between showing a member list and not.
     */
    isCustomType: boolean;
    muted: boolean;
    isSuperuser: boolean;
    isMentioned: boolean;
    constructor(raw: RawRoom, uid: string);
    get isGroup(): boolean;
    get isPinchatAi(): boolean;
    get pinchatAiScope(): PinchatAiScope | null;
    isPinchatAiVisibleFor(roomTag: string): boolean;
    get memberIdsWithoutMeAndMyGroup(): string[];
    get displayName(): string;
    get linkName(): string;
    get avatars(): Avatar[];
}
export default Room;
