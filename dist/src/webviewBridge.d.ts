export type ImkitWebviewEvent = {
    type: 'imkit:enterRoom';
    roomId: string;
} | {
    type: 'imkit:leaveRoom';
    roomId: string;
};
type WebkitMessageHandler = {
    postMessage: (msg: unknown) => void;
};
declare global {
    interface Window {
        webkit?: {
            messageHandlers?: Record<string, WebkitMessageHandler | undefined>;
        };
        imkit?: {
            postMessage?: (json: string) => void;
        };
        ReactNativeWebView?: {
            postMessage: (msg: string) => void;
        };
    }
}
export declare function installWebviewBridge(): () => void;
export {};
