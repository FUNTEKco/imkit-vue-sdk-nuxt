import { App, Component } from 'vue';
import { Store } from 'vuex';
import { default as Config } from './classes/config';
declare const CHAT_ROOM_ELEMENT_NAME = "imkit-chat-room";
declare const ROOM_LIST_ELEMENT_NAME = "imkit-room-list";
declare const CHAT_ROOM_INFO_ELEMENT_NAME = "imkit-chat-room-info";
declare const MODALS_CONTAINER_ELEMENT_NAME = "imkit-modals-container";
declare const ROOM_AWARE_OBSERVED_ATTRIBUTES: readonly ["token", "api-base-url", "client-key", "room-tag", "theme", "room-id"];
type AttrName = (typeof ROOM_AWARE_OBSERVED_ATTRIBUTES)[number];
interface IMKitElementImperativeAPI {
    setConfig(config: Partial<Config>): void;
    setRoomTag(tag: string): void;
    getStore(): Store<unknown> | undefined;
    readonly imkitReady: boolean;
}
declare abstract class IMKitElementBase extends HTMLElement implements IMKitElementImperativeAPI {
    protected app?: App;
    protected store?: Store<unknown>;
    protected mountPoint?: HTMLDivElement;
    protected overrides: Partial<Config>;
    protected themeState: {
        theme: string | null;
    };
    private storeUnsubscribe?;
    private actionUnsubscribe?;
    private _imkitReady;
    protected abstract getElementLabel(): string;
    /** Override to swap the inner Vue component. Return null for elements that
     *  only need the modals container (e.g. <imkit-modals-container>). */
    protected getRootComponent(): Component | null;
    /** Render an inline ModalsContainer next to the root component. Off for
     *  <imkit-chat-room-info> since the page already has a sibling
     *  <imkit-modals-container>. On for everyone else. */
    protected includesInlineModals(): boolean;
    /** Auto-hide the root component when there's no selected room. Used by
     *  <imkit-chat-room-info> to match v1's `v-if="selectedRoomId"`. */
    protected hideRootWhenNoSelectedRoom(): boolean;
    /** Hook fired after the inner Vue app has mounted. */
    protected onAfterMount?(store: Store<unknown>): void;
    /** Public: set by the base class once mount() resolves. React consumers
     *  can read this synchronously to recover from missing the imkit-ready
     *  event (event-only signaling races against React effect phases). */
    get imkitReady(): boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null): void;
    protected currentAttrs(): Partial<Record<AttrName, string>>;
    protected mount(): void;
    protected unmount(): void;
    private bridgeStoreEvents;
    setConfig(config: Partial<Config>): void;
    setRoomTag(tag: string): void;
    getStore(): Store<unknown> | undefined;
}
interface IMKitChatRoomElement extends IMKitElementImperativeAPI {
    sendMessage(text: string): Promise<void>;
}
declare class ChatRoomElement extends IMKitElementBase implements IMKitChatRoomElement {
    static get observedAttributes(): readonly string[];
    protected getRootComponent(): Component;
    protected getElementLabel(): string;
    sendMessage(text: string): Promise<void>;
}
declare class RoomListElement extends IMKitElementBase {
    static get observedAttributes(): readonly string[];
    protected getRootComponent(): Component;
    protected getElementLabel(): string;
    protected onAfterMount(store: Store<unknown>): void;
}
declare class ChatRoomInfoElement extends IMKitElementBase {
    static get observedAttributes(): readonly string[];
    protected getRootComponent(): Component;
    protected getElementLabel(): string;
    protected includesInlineModals(): boolean;
    protected hideRootWhenNoSelectedRoom(): boolean;
}
declare class ModalsContainerElement extends IMKitElementBase {
    static get observedAttributes(): readonly string[];
    protected getRootComponent(): null;
    protected getElementLabel(): string;
    protected includesInlineModals(): boolean;
}
export { CHAT_ROOM_ELEMENT_NAME, CHAT_ROOM_INFO_ELEMENT_NAME, ChatRoomElement, ChatRoomInfoElement, MODALS_CONTAINER_ELEMENT_NAME, ModalsContainerElement, ROOM_LIST_ELEMENT_NAME, RoomListElement };
export default ChatRoomElement;
