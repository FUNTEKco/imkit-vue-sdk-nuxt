export type PaletteSeeds = {
    brand: string;
    neutral: string;
    text: string;
    ownBubble: string;
    danger: string;
    highlight: string;
};
export type DesignPalette = {
    light: PaletteSeeds;
    dark?: Partial<PaletteSeeds>;
};
/**
 * The six customer-editable colour seeds used to derive every semantic
 * colour token. Omit `dark` to derive both colour modes from `light`.
 */
export declare const palette: DesignPalette;
type Styles = {
    incomingMessageCell: string;
    outgoingMessageCell: string;
    roomListUnreadBadge: string;
    chatRoomHeader: string;
    sendButtonEnabled: string;
    sendButtonDisabled: string;
};
export default Styles;
