import { Component } from 'vue';
import { UseModalOptions, UseModalReturnType } from 'vue-final-modal';
/**
 * Drop-in replacement for vue-final-modal's `useModal`.
 *
 * `vue-final-modal`'s `<ModalsContainer />` renders each dynamic modal's
 * `component` directly, forwarding only `options.attrs` (plus
 * modelValue/open/close wiring) onto it — `options.teleportTo` is NOT
 * forwarded, so it cannot be set from the `useModal()` call site as a
 * top-level option. Every modal component in this SDK (`AvatarModal.vue`,
 * `UnauthorizedModal.vue`, etc.) wraps a single root `<vue-final-modal
 * teleport-to="...">` element and does not declare its own `teleportTo`
 * prop, so any attrs we don't claim fall through onto that root element via
 * Vue's default attribute inheritance. Putting `teleportTo` under `attrs`
 * here relies on exactly that fallthrough to reach every modal's real
 * `<vue-final-modal>` element — the same reason `vue-final-modal` defaults
 * `teleportTo` to `'body'`, escaping the SDK root and rendering under
 * whatever colour-mode classes happen to be on `<body>` (see the portal-host doc
 * comment in `../runtime/portalHost.ts`). This wrapper points every
 * SDK-owned modal at the shared portal host instead. Callers may still pass
 * their own `attrs.teleportTo` to override.
 */
export declare function useImkitModal<T extends Component = Component>(options: UseModalOptions<T>): UseModalReturnType<T>;
