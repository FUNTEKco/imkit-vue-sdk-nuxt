import { LucideIcon } from 'lucide-vue-next';
import { MaybeRefOrGetter } from 'vue';
export type ActionType = 'reply' | 'copy' | 'translate' | 'edit' | 'unsend' | 'delete'
/**
 * Opens the reaction sheet. Its only other entry point is a 500ms
 * long-press bound to `touchstart` in ReactionList.vue, so before this
 * item existed the sheet was unreachable with a mouse — the whole panel
 * had no desktop trigger at all.
 *
 * Assembled next to the react entry in MessageActionButtons.vue rather
 * than here, because like that one it is gated on message STATE (are there
 * any reactions to look at) rather than on a permission.
 */
 | 'viewReactions';
export interface ActionItem {
    type: ActionType;
    icon: LucideIcon;
    labelKey: string;
    danger?: boolean;
}
/**
 * A fixed group of related items (e.g. "primary" reply/copy/edit actions,
 * vs. the standalone "delete" action). Groups may be empty — visibility is
 * expressed by omitting an item from a group's `items`, not by a `visible`
 * flag on the item — and it is the caller's job (via `flattenMenuGroups`) to
 * only draw a separator between two groups that both have items.
 */
export interface ActionGroup {
    key: string;
    items: ActionItem[];
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
export declare function useMessageActionItems(options: MessageActionOptions): import('vue').ComputedRef<ActionGroup[]>;
export type MenuEntry<T> = {
    kind: 'separator';
} | {
    kind: 'item';
    item: T;
};
/**
 * Flattens a sequence of fixed groups into a render list, inserting a
 * separator only on the boundary between two groups that both have at least
 * one item. A separator is therefore structurally incapable of rendering
 * first, last, or beside another separator: it never exists as an element in
 * its own right, only as the gap between two non-empty groups.
 *
 * This replaces the previous scheme, which emitted one separator
 * unconditionally after a fixed "react" group and another per-item via a
 * `dividerBefore` flag on the next fixed item. Whenever the group in between
 * (reply/copy/edit) was entirely hidden by permissions, both separators
 * still rendered — back to back, with nothing between them.
 */
export declare function flattenMenuGroups<T>(groups: {
    items: T[];
}[]): MenuEntry<T>[];
