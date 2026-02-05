import { Reaction } from '../classes/message';
interface Props {
    reactions: Reaction[];
    /** Initial emoji to show when opening (if null, shows "All" tab) */
    initialEmoji?: string | null;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onClose?: (() => any) | undefined;
}>, {
    initialEmoji: string | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    tabsRef: HTMLDivElement;
}, any>;
export default _default;
