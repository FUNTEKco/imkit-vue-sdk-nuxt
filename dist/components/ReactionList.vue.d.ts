import { Reaction } from '../classes/message';
interface Props {
    reactions: Reaction[];
    /** Tooltip alignment: 'left' for others' messages, 'right' for own messages */
    align?: 'left' | 'right';
}
declare const __VLS_export: import('vue').DefineComponent<Props, {
    openSheet: (emoji?: string | null) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    selectEmoji: (emoji: string) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onSelectEmoji?: ((emoji: string) => any) | undefined;
}>, {
    align: "left" | "right";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
