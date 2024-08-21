import { Store } from 'vuex';
import { default as Config } from './classes/config';
import { AxiosInstance } from 'axios';
export declare function createAxios(config: Config, store: Store<any>): AxiosInstance;
