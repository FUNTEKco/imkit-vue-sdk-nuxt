import { GetterTree } from 'vuex';
import { default as Room } from '../../../classes/room';
import { RootState } from '../../../store';
import { IMState } from './state';
export type Getters = {
    doubleCount(state: IMState): number;
    roomsInSelectedFolder(state: IMState): Room[];
};
export declare const getters: GetterTree<IMState, RootState> & Getters;
