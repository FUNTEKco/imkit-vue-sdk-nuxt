type Settings = {
    paymentEnabled: boolean;
    linePayEnabled: boolean;
    stripeEnabled: boolean;
    paypalEnabled: boolean;
    locationInputEnabled: boolean;
    audioInputEnabled: boolean;
    fileInputEnabled: boolean;
    emojiInputEnabled: boolean;
    stickerInputEnabled: boolean;
    sendButtonEnabled: boolean;
    searchInRoomEnabled: boolean;
    showDirectChatRoomInfoButton: boolean;
    showGroupChatRoomInfoButton: boolean;
    autoSelectRoomWhenLoaded: boolean;
    autoOpenRoomInfoOnSelect?: boolean;
    customRoomInfoIframeURL: string;
    showLeaveRoomButton: boolean;
    showMemberActionMenu: boolean;
    massTextingEnabled: boolean;
    showDarkModeSwitch: boolean;
    enableReadReceipt: boolean;
    linkPreviewEnabled: boolean;
    fileUploadSizeLimit?: number;
    noRoomsImageURL?: string;
    noRoomsText?: string;
    /**
     * Copy for the desktop chat column while no room is open.
     *
     * Three-state, matching `noRoomsText`: `undefined` uses the built-in
     * translation, `''` hides the message entirely, any other string replaces
     * it. The message stays hidden regardless when the user has no chat rooms,
     * since there would be nothing to select.
     */
    noRoomSelectedText?: string;
    searchRoomPlaceholder?: string;
    showEndChatButton?: boolean;
    scrollAnchoringEnabled?: boolean;
    roomContentEnabled?: boolean;
    /**
     * The host's shell IS the page — it has built a full-page shell around the
     * SDK elements rather than embedding them in a document that scrolls. The
     * elements themselves need not each fill the viewport: the agent dashboard
     * sets this while showing the room list, the chat and the room-info panel
     * side by side inside one viewport-sized shell.
     *
     * A software keyboard shrinks the visible viewport without shrinking the
     * initial containing block, so the page keeps a scrollable range of exactly
     * the keyboard's height however short its content is, and the browser
     * spends that range scrolling the focused field into view — which drags
     * the header off the top and leaves the host's leftover full-height box as
     * blank space between the field and the keyboard. `MainView` already
     * pins the page for the SDK's own shell (see `startViewportScrollLock`);
     * this is how a host that assembles its own shell asks for the same thing.
     *
     * Read by every SDK surface that owns a text field a keyboard can cover —
     * `ChatRoom` (composer) and `RoomList` (search) — because a host shell can
     * mount either one alone.
     *
     * Defaults to false: pinning the document is wrong — and trapping — for a
     * component embedded in a host page that scrolls, which is every other
     * consumer.
     */
    fullPageEnabled?: boolean;
    fixedRoomEnabled: boolean;
    pinchatAiEnabled?: boolean;
    /**
     * The agent's room-management surfaces in the room-info panel: the quick
     * actions (pin, mute, block, in-room search) and the folder row.
     *
     * These organise an agent's own inbox. A visitor has one conversation and no
     * folders, so on the guest chat they are noise at best — "mute" sitting
     * beside a folder picker reads as the visitor's own notification settings,
     * which it is not. The guest page mounts the same <imkit-chat-room-info> as
     * the agent's, so the split is a setting rather than a second component.
     *
     * Defaults to true; only a host that opts out loses them.
     */
    roomManagementEnabled?: boolean;
    /**
     * The agent's online/offline line under the room name in the chat header.
     *
     * It answers "is anyone there to reply?", which is a VISITOR's question. In
     * an agent's own inbox it reads their own presence back at them, which is
     * noise — the room-level `extra.showOnlineStatus` flag was the only gate, and
     * that flag is about whether the visitor sees it.
     *
     * Defaults to true, so the room flag keeps working for hosts that want it.
     */
    agentPresenceEnabled?: boolean;
};
export default Settings;
