/**
 * Whether the chat header should show the agent's online/offline line, and
 * what it should say.
 *
 * Both flags live in `Room.extra`, which is `JSON.parse`d from the server's
 * `extParams` string and typed `Record<string, unknown>`. Nothing validates
 * their shape, so they are read for truthiness — which is also what the
 * pre-redesign template did — rather than compared against `true`.
 */
export type AgentPresence = {
    visible: boolean;
    online: boolean;
};
export declare function agentPresence(extra: Record<string, unknown> | undefined | null): AgentPresence;
