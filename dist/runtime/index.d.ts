import { default as Config } from '../classes/config';
import { getAxios, initAxios } from './axios';
import { getConfig, setConfig } from './config';
import { getSocket, initSocket } from './socket';
import { getUid, setUid } from './uid';
export { getAxios, getConfig, getSocket, getUid, initAxios, initSocket, setConfig, setUid };
export declare const initRuntime: (config: Config, uid: string) => void;
