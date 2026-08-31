import { Socket } from 'socket.io-client';
export interface ServerToClientEvents {
    'chat message': (res: Record<string, unknown>) => void;
}
export interface ClientToServerEvents {
    auth2: (token: string, header: {
        CLIENT_KEY: string;
        Authorization: string;
    }, callback: (res: Record<string, unknown>) => void) => void;
    typing: (roomId: string) => void;
}
export declare const getSocket: () => Socket<ServerToClientEvents, ClientToServerEvents>;
export declare const initSocket: () => Socket<ServerToClientEvents, ClientToServerEvents>;
export declare const _resetSocketForTests: () => void;
