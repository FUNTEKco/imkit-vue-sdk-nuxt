export type RoomListHeadingKind = 'folders' | 'conversations';
export default class RoomListHeading {
    kind: RoomListHeadingKind;
    constructor(kind: RoomListHeadingKind);
}
