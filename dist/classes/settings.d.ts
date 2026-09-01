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
    fixedRoomEnabled: boolean;
    pinchatAiEnabled?: boolean;
};
export default Settings;
