import { ActionTree, ActionContext } from 'vuex';
import { RootState } from '../../../store';
import { IMState } from './state';
import { IMActionTypes } from './action-types';
import { Mutations } from './mutations';
import { default as Room } from '../../../classes/room';
import { default as IMImage } from '../../../classes/image';
import { default as Message } from '../../../classes/message';
import { default as LinkPreview } from '../../../classes/linkPreview';

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(key: K, payload?: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>;
} & Omit<ActionContext<IMState, RootState>, 'commit'>;
export interface Actions {
    [IMActionTypes.increment](context: AugmentedActionContext): void;
    [IMActionTypes.fetchRooms](context: AugmentedActionContext, payload: {
        pageSize: number | undefined;
    }): void;
    [IMActionTypes.loadMessages](context: AugmentedActionContext, payload: {
        roomId: string;
        beforeMessageId: string | null;
        afterMessageId: string | null;
        targetMessageId: string | null;
    }): void;
    [IMActionTypes.fetchRoom](context: AugmentedActionContext, roomId: string): void;
    [IMActionTypes.updateLastRead](context: AugmentedActionContext, roomId: string): void;
    [IMActionTypes.handleMessageFromSocket](context: AugmentedActionContext, message: Message): void;
    [IMActionTypes.handleRoomFromSocket](context: AugmentedActionContext, room: Room): void;
    [IMActionTypes.handleLastReadFromSocket](context: AugmentedActionContext, event: {
        roomId: string;
        uid: string;
        messageId: string;
    }): void;
    [IMActionTypes.sendMessage](context: AugmentedActionContext, payload: Record<string, unknown>): void;
    [IMActionTypes.recallMessage](context: AugmentedActionContext, payload: Record<string, unknown>): void;
    [IMActionTypes.uploadMedia](context: AugmentedActionContext, payload: {
        id: string;
        file: File;
    }): Promise<string>;
    [IMActionTypes.uploadImage](context: AugmentedActionContext, payload: {
        image: IMImage;
        file: File;
    }): Promise<{
        originalUrl: string;
        thumbnailUrl: string;
    }>;
    [IMActionTypes.fetchLinkPreview](context: AugmentedActionContext, url: string): Promise<LinkPreview>;
    [IMActionTypes.handleLinkPreviews](context: AugmentedActionContext, messages: Message[]): void;
    [IMActionTypes.fetchVideoBlob](context: AugmentedActionContext, url: string): Promise<Blob>;
    [IMActionTypes.navigateToMessage](context: AugmentedActionContext, messageId: string): void;
    [IMActionTypes.updateRoomPrefs](context: AugmentedActionContext, payload: {
        roomId: string;
        prefs: Record<string, unknown>;
    }): void;
    [IMActionTypes.fetchPrefs](context: AugmentedActionContext): void;
    [IMActionTypes.fetchRoomsInFolders](context: AugmentedActionContext): void;
    [IMActionTypes.updatePref](context: AugmentedActionContext, payload: {
        key: string;
        value: Record<string, unknown>;
    }): void;
    [IMActionTypes.deletePref](context: AugmentedActionContext, key: string): void;
    [IMActionTypes.updateFolder](context: AugmentedActionContext, payload: {
        folderKey: string;
        name: string;
    }): void;
    [IMActionTypes.removeFolder](context: AugmentedActionContext, folderId: string): void;
    [IMActionTypes.handlePrefChangeFromSocket](context: AugmentedActionContext, payload: Record<string, unknown>): void;
    [IMActionTypes.handlePrefDeleteFromSocket](context: AugmentedActionContext, payload: string): void;
    [IMActionTypes.aggregateRoomsAndFolders](context: AugmentedActionContext): void;
    [IMActionTypes.removeMembers](context: AugmentedActionContext, payload: {
        roomId: string;
        uids: string[];
    }): void;
    [IMActionTypes.handleTypingFromSocket](context: AugmentedActionContext, payload: {
        room: string;
        sender: string;
    }): void;
    [IMActionTypes.insertUnreadMessage](context: AugmentedActionContext): void;
    [IMActionTypes.translate](context: AugmentedActionContext, text: string): Promise<string>;
    [IMActionTypes.searchRooms](context: AugmentedActionContext, keyword: string): void;
    [IMActionTypes.subscribe](context: AugmentedActionContext): void;
    [IMActionTypes.unsubscribe](context: AugmentedActionContext): void;
    [IMActionTypes.removeRoomFromFolder](context: AugmentedActionContext, roomId: string): void;
    [IMActionTypes.addRoomToFolder](context: AugmentedActionContext, payload: {
        roomId: string;
        folderId: string;
    }): void;
    [IMActionTypes.batchSendMessage](context: AugmentedActionContext, payload: Record<string, unknown>): void;
    [IMActionTypes.toggleNotification](context: AugmentedActionContext, roomId: string): void;
    [IMActionTypes.removeRoom](context: AugmentedActionContext, roomId: string): void;
}
export declare const actions: ActionTree<IMState, RootState> & Actions;
export {};
