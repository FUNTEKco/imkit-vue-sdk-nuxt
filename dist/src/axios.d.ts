import { AxiosInstance } from 'axios';
import { Store } from 'vuex';
import { default as Config } from './classes/config';
export declare function createAxios(config: Config, store: Store<any>): AxiosInstance;
