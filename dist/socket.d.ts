import { Socket } from 'socket.io-client';
import { Store } from 'vuex';
import { default as Config } from './classes/config';

export interface ServerToClientEvents {
    'chat message': (res: Record<string, unknown>) => void;
}
export interface ClientToServerEvents {
    auth2: (token: string, header: {
        CLIENT_KEY: string;
        Authorization: string;
    }, callback: (res: Record<string, unknown>) => void) => void;
}
export declare function createSocket(config: Config, store: Store<any>): Socket<ServerToClientEvents, ClientToServerEvents>;
