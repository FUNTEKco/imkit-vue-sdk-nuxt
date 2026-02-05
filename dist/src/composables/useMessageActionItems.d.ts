import { LucideIcon } from 'lucide-vue-next';
import { MaybeRefOrGetter } from 'vue';
export type ActionType = 'reply' | 'copy' | 'translate' | 'edit' | 'unsend' | 'delete';
export interface ActionItem {
    type: ActionType;
    icon: LucideIcon;
    labelKey: string;
    visible: boolean;
    danger?: boolean;
    dividerBefore?: boolean;
}
export interface MessageActionOptions {
    canReply: MaybeRefOrGetter<boolean>;
    canCopy: MaybeRefOrGetter<boolean>;
    canTranslate?: MaybeRefOrGetter<boolean>;
    canEdit: MaybeRefOrGetter<boolean>;
    isOutgoing: MaybeRefOrGetter<boolean>;
    isSuperuser: MaybeRefOrGetter<boolean>;
    isGroupRoom: MaybeRefOrGetter<boolean>;
}
export declare function useMessageActionItems(options: MessageActionOptions): import('vue').ComputedRef<ActionItem[]>;
