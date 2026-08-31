declare const Dialog: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        open: {
            type: import('vue').PropType<boolean>;
            default: undefined;
        };
        defaultOpen: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        modal: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
    }>> & {
        "onUpdate:open"?: ((value: boolean) => any) | undefined;
    }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:open": (value: boolean) => void;
    }, import('vue').PublicProps, {
        defaultOpen: boolean;
        open: boolean;
        modal: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        open: {
            type: import('vue').PropType<boolean>;
            default: undefined;
        };
        defaultOpen: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        modal: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
    }>> & {
        "onUpdate:open"?: ((value: boolean) => any) | undefined;
    }, {}, {}, {}, {}, {
        defaultOpen: boolean;
        open: boolean;
        modal: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    open: {
        type: import('vue').PropType<boolean>;
        default: undefined;
    };
    defaultOpen: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    modal: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>> & {
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:open": (value: boolean) => void;
}, string, {
    defaultOpen: boolean;
    open: boolean;
    modal: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<{
        default: (props: {
            open: boolean;
        }) => any;
    }> & {
        default: (props: {
            open: boolean;
        }) => any;
    };
});
declare const DialogTriggerComponent: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        asChild: {
            type: import('vue').PropType<boolean>;
        };
        as: {
            type: import('vue').PropType<import('vue').Component | import('radix-vue').AsTag>;
            default: string;
        };
    }>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        as: import('radix-vue').AsTag | import('vue').Component;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        asChild: {
            type: import('vue').PropType<boolean>;
        };
        as: {
            type: import('vue').PropType<import('vue').Component | import('radix-vue').AsTag>;
            default: string;
        };
    }>>, {}, {}, {}, {}, {
        as: import('radix-vue').AsTag | import('vue').Component;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    asChild: {
        type: import('vue').PropType<boolean>;
    };
    as: {
        type: import('vue').PropType<import('vue').Component | import('radix-vue').AsTag>;
        default: string;
    };
}>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    as: import('radix-vue').AsTag | import('vue').Component;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
});
declare const DialogPortalComponent: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        to: {
            type: import('vue').PropType<string | HTMLElement>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        forceMount: {
            type: import('vue').PropType<boolean>;
        };
    }>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        to: {
            type: import('vue').PropType<string | HTMLElement>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        forceMount: {
            type: import('vue').PropType<boolean>;
        };
    }>>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    to: {
        type: import('vue').PropType<string | HTMLElement>;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    forceMount: {
        type: import('vue').PropType<boolean>;
    };
}>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
});
declare const DialogClose: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        asChild: {
            type: import('vue').PropType<boolean>;
        };
        as: {
            type: import('vue').PropType<import('vue').Component | import('radix-vue').AsTag>;
            default: string;
        };
    }>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        as: import('radix-vue').AsTag | import('vue').Component;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        asChild: {
            type: import('vue').PropType<boolean>;
        };
        as: {
            type: import('vue').PropType<import('vue').Component | import('radix-vue').AsTag>;
            default: string;
        };
    }>>, {}, {}, {}, {}, {
        as: import('radix-vue').AsTag | import('vue').Component;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    asChild: {
        type: import('vue').PropType<boolean>;
    };
    as: {
        type: import('vue').PropType<import('vue').Component | import('radix-vue').AsTag>;
        default: string;
    };
}>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    as: import('radix-vue').AsTag | import('vue').Component;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
});
declare const DialogOverlay: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    class: {
        type: null;
        default: undefined;
    };
}>, () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    class: {
        type: null;
        default: undefined;
    };
}>> & Readonly<{}>, {
    class: any;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const DialogContent: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    class: {
        type: null;
        default: undefined;
    };
    hideClose: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    class: {
        type: null;
        default: undefined;
    };
    hideClose: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    class: any;
    hideClose: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const DialogHeader: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    class: {
        type: null;
        default: undefined;
    };
}>, () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    class: {
        type: null;
        default: undefined;
    };
}>> & Readonly<{}>, {
    class: any;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const DialogFooter: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    class: {
        type: null;
        default: undefined;
    };
}>, () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    class: {
        type: null;
        default: undefined;
    };
}>> & Readonly<{}>, {
    class: any;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const DialogTitle: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    class: {
        type: null;
        default: undefined;
    };
}>, () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    class: {
        type: null;
        default: undefined;
    };
}>> & Readonly<{}>, {
    class: any;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const DialogDescription: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    class: {
        type: null;
        default: undefined;
    };
}>, () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    class: {
        type: null;
        default: undefined;
    };
}>> & Readonly<{}>, {
    class: any;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortalComponent as DialogPortal, DialogTitle, DialogTriggerComponent as DialogTrigger };
