declare global {
    interface Window {
        __APP_CONFIG__?: Record<string, string | undefined>;
    }
}
export declare function runtimeEnv(key: string): string | undefined;
export declare function runtimeBooleanEnv(key: string, defaultValue: boolean): boolean;
