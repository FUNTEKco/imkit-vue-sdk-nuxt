import { default as Message } from './message';
import { default as MessageLinkedList } from './messageLinkedList';
export default class MessageMultiList {
    head: MessageLinkedList | null;
    tail: MessageLinkedList | null;
    main: MessageLinkedList | null;
    length: number;
    constructor(linkedList?: MessageLinkedList | null);
    numberOfMessages(): number;
    concate(linkedList: MessageLinkedList, anchorId?: string): boolean;
    private segmentContaining;
    finds(id: string): Message | undefined;
    hasSegment(segment: unknown): boolean;
    replace(targetId: string, message: Message): void;
    remove(id: string): void;
    private unlinkSegment;
    unshift(linkedList: MessageLinkedList, anchorId?: string): boolean;
    insert(linkedList: MessageLinkedList): void;
    merge(): void;
    isValid(): boolean;
}
