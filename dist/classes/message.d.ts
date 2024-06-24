import { default as Autolinker } from 'autolinker/dist/Autolinker.js';
import { default as IMImage } from './image';
import { default as IMVideo } from './video';
import { default as User } from './user';

export declare enum MessageType {
    Text = "text",
    Image = "image",
    Sticker = "sticker",
    Video = "video",
    File = "file",
    Template = "template",
    Flex = "flex",
    Location = "location",
    Audio = "audio",
    Recall = "recall",
    JoinRoom = "joinRoom",
    LeaveRoom = "leaveRoom",
    AddMember = "addMember",
    DeleteMember = "deleteMember",
    AddMembers = "addMembers",
    Announcement = "announcement",
    Typing = "typing"
}
export default class Message {
    id: string;
    roomId: string;
    senderId: string;
    type: MessageType;
    createdAt: number;
    updatedAt: number;
    groupId: string;
    dateId: number;
    prev: Message | null;
    next: Message | null;
    _string(uid: string, users: {
        [uid: string]: User;
    }): string;
    get string(): string;
    get isIncoming(): boolean;
    get isOutgoing(): boolean;
    get isSystem(): boolean;
    constructor(raw: any);
    static fromRaw(raw: any): Message | null;
    static fromPayload(payload: Record<string, unknown>, uid: string): Message | null;
}
export declare class TextMessage extends Message {
    text: string;
    translatedText: string | null;
    replyId: string | null;
    urls: string[];
    html: string;
    get string(): string;
    static autolinker: Autolinker;
    constructor(raw: any);
    static linkfy(text: string): string;
}
export declare class ImageMessage extends Message {
    images: IMImage[];
    constructor(raw: any);
}
export declare class StickerMessage extends Message {
    stickerId: string;
    stickerUrl: string;
    constructor(raw: any);
}
export declare class VideoMessage extends Message {
    video: IMVideo;
    constructor(raw: any);
}
export declare enum TemplateMessageType {
    Buttons = "buttons",
    Confirm = "confirm",
    Carousel = "carousel",
    ImageCarousel = "image_carousel"
}
export declare class TemplateMessage extends Message {
    template: any;
    templateType: TemplateMessageType;
    constructor(raw: any);
}
export declare enum FlexMessageType {
    Bubble = "bubble",
    Carousel = "carousel"
}
export declare class FlexMessage extends Message {
    contents: any;
    flexType: FlexMessageType;
    constructor(raw: any);
}
export declare class LocationMessage extends Message {
    address: string;
    latitude: number;
    longitude: number;
    constructor(raw: any);
}
export declare class SystemMessage extends Message {
    members: User[];
    constructor(raw: any);
}
export declare class FileMessage extends Message {
    url: string;
    mimeType: string;
    fileName: string;
    bytes: number;
    fileExtension: string;
    constructor(raw: any);
}
export declare class AudioMessage extends Message {
    url: string;
    mimeType: string;
    fileName: string;
    bytes: number;
    fileExtension: string;
    duration: number;
    constructor(raw: any);
}
