import { default as Autolinker } from 'autolinker/dist/Autolinker.js';
import { default as MarkdownIt } from 'markdown-it';
import { default as IMImage } from './image';
import { default as User } from './user';
import { default as IMVideo } from './video';
export declare enum MessageType {
    Text = "text",
    Image = "image",
    Mixed = "mixed",
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
    Typing = "typing",
    AIStreaming = "ai_streaming",
    PaymentSelect = "payment-select",
    Payment = "payment",
    Line = "line"
}
export interface Reaction {
    client: string;
    reaction: string;
}
export declare enum MessageStatus {
    Sending = "sending",
    Delivered = "delivered",
    Failed = "failed"
}
export type MessageTemplate = {
    quickReply: {
        items: any[];
    };
};
export default class Message {
    id: string;
    roomId: string;
    senderId: string;
    senderNickname: string;
    type: MessageType;
    status: MessageStatus;
    createdAt: number;
    updatedAt: number;
    editedAt: string | null;
    groupId: string;
    dateId: number;
    reactions: Reaction[];
    template?: MessageTemplate;
    text?: string;
    prev: Message | null;
    next: Message | null;
    payload: Record<string, unknown> | null;
    _string(uid: string, users: {
        [uid: string]: User;
    }, isGroup?: boolean): string;
    get string(): string;
    /**
     * Last-message preview that drops the sender name in 1-on-1 rooms.
     * Callers pass the owning room's type so the lookup stays reliable even when
     * the room-list payload omits a roomId on the message.
     */
    previewString(isGroup: boolean): string;
    /**
     * Label for the "latest message" banner inside an open room. It mirrors the
     * room-list preview, except group text/mixed messages — whose preview is the
     * raw body with no sender name — get a "Name: " prefix so it's clear who
     * spoke. Every other type's preview already names the sender (or is a 1-on-1,
     * which shows no name by design), so no prefix is added.
     */
    bannerLabel(isGroup: boolean): string;
    get isIncoming(): boolean;
    get isOutgoing(): boolean;
    get isSystem(): boolean;
    constructor(raw: any);
    static create(raw: any): Message | null;
    static createReactive(raw: any): Message | null;
    static fromPayload(payload: Record<string, unknown>, uid: string): Message | null;
}
export declare class TextMessage extends Message {
    text: string;
    translatedText: string | null;
    replyId: string | null;
    urls: string[];
    get string(): string;
    previewString(): string;
    static autolinker: Autolinker;
    static md: MarkdownIt;
    get html(): string;
    constructor(raw: any);
    static linkfy(text: string): string;
}
export declare class AIStreamingMessage extends Message {
    text: string;
    constructor(raw: any);
}
export declare class ImageMessage extends Message {
    images: IMImage[];
    constructor(raw: any);
}
export declare class MixedMessage extends Message {
    text: string;
    translatedText: string | null;
    replyId: string | null;
    urls: string[];
    images: IMImage[];
    get string(): string;
    get html(): string;
    previewString(): string;
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
    extra: Record<string, unknown>;
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
    _string(uid: string, users: {
        [uid: string]: User;
    }): string;
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
export declare class PaymentMessage extends Message {
    paymentId: string;
    paymentType: string;
    payer: {
        id: string;
        nickname: string;
    };
    payee: {
        id: string;
        nickname: string;
    };
    value: string;
    timestamp: number;
    availableMethods: string[];
    method: string;
    currency: string;
    remark: string;
    constructor(raw: any);
}
