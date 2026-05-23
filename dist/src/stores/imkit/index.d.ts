import { Pinia } from 'pinia';
import { ImkitState } from './state';
export declare const useImkitStore: import('pinia').StoreDefinition<"imkit", ImkitState, {
    roomsInSelectedFolder: (state: {
        isRequesting: {
            [api: string]: Date | null;
        };
        users: {
            [uid: string]: import('../../lib').User;
        };
        rooms: {
            [id: string]: import('../../classes/room').default;
        };
        sortedRooms: {
            id: string;
            name: string;
            type: import('../../classes/room').RoomType;
            createdAt: number;
            updatedAt: number;
            memberIds: string[];
            isOutgoingGroupSender: {
                [id: string]: boolean;
            };
            coverUrl: string;
            lastMessage: {
                id: string;
                roomId: string;
                senderId: string;
                senderNickname: string;
                type: import('../../classes/message').MessageType;
                status: import('../../classes/message').MessageStatus;
                createdAt: number;
                updatedAt: number;
                editedAt: string | null;
                groupId: string;
                dateId: number;
                reactions: {
                    client: string;
                    reaction: string;
                }[];
                template?: {
                    quickReply: {
                        items: any[];
                    };
                } | undefined;
                text?: string | undefined;
                prev: /*elided*/ any | null;
                next: /*elided*/ any | null;
                payload: Record<string, unknown> | null;
                _string: (uid: string, users: {
                    [uid: string]: import('../../lib').User;
                }) => string;
                readonly string: string;
                readonly isIncoming: boolean;
                readonly isOutgoing: boolean;
                readonly isSystem: boolean;
            } | null;
            numberOfUnread: number;
            lastReadMessageId: {
                [uid: string]: string;
            };
            pref: {
                tags: string[];
                tagColors: {
                    [tag: string]: string;
                };
                sticky: boolean;
                hidden: boolean;
            } | null;
            roomTags: string[];
            extra: Record<string, unknown>;
            muted: boolean;
            isSuperuser: boolean;
            isMentioned: boolean;
            readonly memberIdsWithoutMeAndMyGroup: string[];
            readonly displayName: string;
            readonly avatars: {
                url: string;
                name: string;
            }[];
        }[];
        numberOfFetchedRooms: number;
        numberOfTotalRooms: number;
        uploadProgresses: {
            [id: string]: number;
        };
        downloadProgresses: {
            [id: string]: number;
        };
        linkPreviews: {
            [url: string]: import('../../classes/linkPreview').default;
        };
        loadingLinkPreviews: Set<string> & Omit<Set<string>, keyof Set<any>>;
        actionMenuRoomId: string;
        actionMenuFolderId: string;
        folders: {
            [id: string]: import('../../classes/folder').default;
        };
        sortedFolderIds: string[];
        roomIdsInFolders: {
            [roomId: string]: boolean;
        };
        selectedRoomIdsForCreateFolder: {
            [roomId: string]: Date;
        };
        selectedFolderId: string;
        searchKeyword: string;
        searchType: import('../../enums/searchType').SearchType;
        searchRooms: {
            [type: string]: import('../../classes/room').default[] | import('../../classes/folder').default[];
        };
        roomTag: string;
        sortBy: string;
        sortUnreadFirst: number;
        stickyUnreadRoomIds: {
            [id: string]: true;
        };
        deliveringMessages: Map<string, {
            id: string;
            roomId: string;
            senderId: string;
            senderNickname: string;
            type: import('../../classes/message').MessageType;
            status: import('../../classes/message').MessageStatus;
            createdAt: number;
            updatedAt: number;
            editedAt: string | null;
            groupId: string;
            dateId: number;
            reactions: {
                client: string;
                reaction: string;
            }[];
            template?: {
                quickReply: {
                    items: any[];
                };
            } | undefined;
            text?: string | undefined;
            prev: /*elided*/ any | null;
            next: /*elided*/ any | null;
            payload: Record<string, unknown> | null;
            _string: (uid: string, users: {
                [uid: string]: import('../../lib').User;
            }) => string;
            readonly string: string;
            readonly isIncoming: boolean;
            readonly isOutgoing: boolean;
            readonly isSystem: boolean;
        }> & Omit<Map<string, import('../../lib').Message>, keyof Map<any, any>>;
        processingMessages: Map<string, {
            id: string;
            roomId: string;
            senderId: string;
            senderNickname: string;
            type: import('../../classes/message').MessageType;
            status: import('../../classes/message').MessageStatus;
            createdAt: number;
            updatedAt: number;
            editedAt: string | null;
            groupId: string;
            dateId: number;
            reactions: {
                client: string;
                reaction: string;
            }[];
            template?: {
                quickReply: {
                    items: any[];
                };
            } | undefined;
            text?: string | undefined;
            prev: /*elided*/ any | null;
            next: /*elided*/ any | null;
            payload: Record<string, unknown> | null;
            _string: (uid: string, users: {
                [uid: string]: import('../../lib').User;
            }) => string;
            readonly string: string;
            readonly isIncoming: boolean;
            readonly isOutgoing: boolean;
            readonly isSystem: boolean;
        }> & Omit<Map<string, import('../../lib').Message>, keyof Map<any, any>>;
        selectedRoomId: string;
        messageMultiLists: Map<string, {
            head: {
                head: {
                    id: string;
                    roomId: string;
                    senderId: string;
                    senderNickname: string;
                    type: import('../../classes/message').MessageType;
                    status: import('../../classes/message').MessageStatus;
                    createdAt: number;
                    updatedAt: number;
                    editedAt: string | null;
                    groupId: string;
                    dateId: number;
                    reactions: {
                        client: string;
                        reaction: string;
                    }[];
                    template?: {
                        quickReply: {
                            items: any[];
                        };
                    } | undefined;
                    text?: string | undefined;
                    prev: /*elided*/ any | null;
                    next: /*elided*/ any | null;
                    payload: Record<string, unknown> | null;
                    _string: (uid: string, users: {
                        [uid: string]: import('../../lib').User;
                    }) => string;
                    readonly string: string;
                    readonly isIncoming: boolean;
                    readonly isOutgoing: boolean;
                    readonly isSystem: boolean;
                } | null;
                tail: {
                    id: string;
                    roomId: string;
                    senderId: string;
                    senderNickname: string;
                    type: import('../../classes/message').MessageType;
                    status: import('../../classes/message').MessageStatus;
                    createdAt: number;
                    updatedAt: number;
                    editedAt: string | null;
                    groupId: string;
                    dateId: number;
                    reactions: {
                        client: string;
                        reaction: string;
                    }[];
                    template?: {
                        quickReply: {
                            items: any[];
                        };
                    } | undefined;
                    text?: string | undefined;
                    prev: /*elided*/ any | null;
                    next: /*elided*/ any | null;
                    payload: Record<string, unknown> | null;
                    _string: (uid: string, users: {
                        [uid: string]: import('../../lib').User;
                    }) => string;
                    readonly string: string;
                    readonly isIncoming: boolean;
                    readonly isOutgoing: boolean;
                    readonly isSystem: boolean;
                } | null;
                length: number;
                map: Map<string, {
                    id: string;
                    roomId: string;
                    senderId: string;
                    senderNickname: string;
                    type: import('../../classes/message').MessageType;
                    status: import('../../classes/message').MessageStatus;
                    createdAt: number;
                    updatedAt: number;
                    editedAt: string | null;
                    groupId: string;
                    dateId: number;
                    reactions: {
                        client: string;
                        reaction: string;
                    }[];
                    template?: {
                        quickReply: {
                            items: any[];
                        };
                    } | undefined;
                    text?: string | undefined;
                    prev: /*elided*/ any | null;
                    next: /*elided*/ any | null;
                    payload: Record<string, unknown> | null;
                    _string: (uid: string, users: {
                        [uid: string]: import('../../lib').User;
                    }) => string;
                    readonly string: string;
                    readonly isIncoming: boolean;
                    readonly isOutgoing: boolean;
                    readonly isSystem: boolean;
                }> & Omit<Map<string, import('../../lib').Message>, keyof Map<any, any>>;
                messageGroups: Map<string, {
                    id: string;
                    roomId: string;
                    senderId: string;
                    senderNickname: string;
                    type: import('../../classes/message').MessageType;
                    status: import('../../classes/message').MessageStatus;
                    createdAt: number;
                    updatedAt: number;
                    editedAt: string | null;
                    groupId: string;
                    dateId: number;
                    reactions: {
                        client: string;
                        reaction: string;
                    }[];
                    template?: {
                        quickReply: {
                            items: any[];
                        };
                    } | undefined;
                    text?: string | undefined;
                    prev: /*elided*/ any | null;
                    next: /*elided*/ any | null;
                    payload: Record<string, unknown> | null;
                    _string: (uid: string, users: {
                        [uid: string]: import('../../lib').User;
                    }) => string;
                    readonly string: string;
                    readonly isIncoming: boolean;
                    readonly isOutgoing: boolean;
                    readonly isSystem: boolean;
                }[]> & Omit<Map<string, import('../../lib').Message[]>, keyof Map<any, any>>;
                firstMessageOfDate: Map<number, {
                    id: string;
                    roomId: string;
                    senderId: string;
                    senderNickname: string;
                    type: import('../../classes/message').MessageType;
                    status: import('../../classes/message').MessageStatus;
                    createdAt: number;
                    updatedAt: number;
                    editedAt: string | null;
                    groupId: string;
                    dateId: number;
                    reactions: {
                        client: string;
                        reaction: string;
                    }[];
                    template?: {
                        quickReply: {
                            items: any[];
                        };
                    } | undefined;
                    text?: string | undefined;
                    prev: /*elided*/ any | null;
                    next: /*elided*/ any | null;
                    payload: Record<string, unknown> | null;
                    _string: (uid: string, users: {
                        [uid: string]: import('../../lib').User;
                    }) => string;
                    readonly string: string;
                    readonly isIncoming: boolean;
                    readonly isOutgoing: boolean;
                    readonly isSystem: boolean;
                }> & Omit<Map<number, import('../../lib').Message>, keyof Map<any, any>>;
                prev: /*elided*/ any | null;
                next: /*elided*/ any | null;
                append: (message: import('../../lib').Message) => void;
                insertMessageToGroup: (message: import('../../lib').Message) => void;
                remove: (id: string) => void;
                replace: (id: string, message: import('../../lib').Message) => void;
                concate: (linkedList: import('../../classes/messageLinkedList').default) => void;
                unshift: (linkedList: import('../../classes/messageLinkedList').default) => void;
                resetHead: (id: string) => void;
                resetTail: (id: string) => void;
                canCombine: (linkedList: import('../../classes/messageLinkedList').default) => boolean;
                combine: (linkedList: import('../../classes/messageLinkedList').default) => void;
                array: () => import('../../lib').Message[];
                finds: (id: string) => import('../../lib').Message | undefined;
                contains: (id: string) => boolean;
                isValid: () => boolean;
            } | null;
            tail: {
                head: {
                    id: string;
                    roomId: string;
                    senderId: string;
                    senderNickname: string;
                    type: import('../../classes/message').MessageType;
                    status: import('../../classes/message').MessageStatus;
                    createdAt: number;
                    updatedAt: number;
                    editedAt: string | null;
                    groupId: string;
                    dateId: number;
                    reactions: {
                        client: string;
                        reaction: string;
                    }[];
                    template?: {
                        quickReply: {
                            items: any[];
                        };
                    } | undefined;
                    text?: string | undefined;
                    prev: /*elided*/ any | null;
                    next: /*elided*/ any | null;
                    payload: Record<string, unknown> | null;
                    _string: (uid: string, users: {
                        [uid: string]: import('../../lib').User;
                    }) => string;
                    readonly string: string;
                    readonly isIncoming: boolean;
                    readonly isOutgoing: boolean;
                    readonly isSystem: boolean;
                } | null;
                tail: {
                    id: string;
                    roomId: string;
                    senderId: string;
                    senderNickname: string;
                    type: import('../../classes/message').MessageType;
                    status: import('../../classes/message').MessageStatus;
                    createdAt: number;
                    updatedAt: number;
                    editedAt: string | null;
                    groupId: string;
                    dateId: number;
                    reactions: {
                        client: string;
                        reaction: string;
                    }[];
                    template?: {
                        quickReply: {
                            items: any[];
                        };
                    } | undefined;
                    text?: string | undefined;
                    prev: /*elided*/ any | null;
                    next: /*elided*/ any | null;
                    payload: Record<string, unknown> | null;
                    _string: (uid: string, users: {
                        [uid: string]: import('../../lib').User;
                    }) => string;
                    readonly string: string;
                    readonly isIncoming: boolean;
                    readonly isOutgoing: boolean;
                    readonly isSystem: boolean;
                } | null;
                length: number;
                map: Map<string, {
                    id: string;
                    roomId: string;
                    senderId: string;
                    senderNickname: string;
                    type: import('../../classes/message').MessageType;
                    status: import('../../classes/message').MessageStatus;
                    createdAt: number;
                    updatedAt: number;
                    editedAt: string | null;
                    groupId: string;
                    dateId: number;
                    reactions: {
                        client: string;
                        reaction: string;
                    }[];
                    template?: {
                        quickReply: {
                            items: any[];
                        };
                    } | undefined;
                    text?: string | undefined;
                    prev: /*elided*/ any | null;
                    next: /*elided*/ any | null;
                    payload: Record<string, unknown> | null;
                    _string: (uid: string, users: {
                        [uid: string]: import('../../lib').User;
                    }) => string;
                    readonly string: string;
                    readonly isIncoming: boolean;
                    readonly isOutgoing: boolean;
                    readonly isSystem: boolean;
                }> & Omit<Map<string, import('../../lib').Message>, keyof Map<any, any>>;
                messageGroups: Map<string, {
                    id: string;
                    roomId: string;
                    senderId: string;
                    senderNickname: string;
                    type: import('../../classes/message').MessageType;
                    status: import('../../classes/message').MessageStatus;
                    createdAt: number;
                    updatedAt: number;
                    editedAt: string | null;
                    groupId: string;
                    dateId: number;
                    reactions: {
                        client: string;
                        reaction: string;
                    }[];
                    template?: {
                        quickReply: {
                            items: any[];
                        };
                    } | undefined;
                    text?: string | undefined;
                    prev: /*elided*/ any | null;
                    next: /*elided*/ any | null;
                    payload: Record<string, unknown> | null;
                    _string: (uid: string, users: {
                        [uid: string]: import('../../lib').User;
                    }) => string;
                    readonly string: string;
                    readonly isIncoming: boolean;
                    readonly isOutgoing: boolean;
                    readonly isSystem: boolean;
                }[]> & Omit<Map<string, import('../../lib').Message[]>, keyof Map<any, any>>;
                firstMessageOfDate: Map<number, {
                    id: string;
                    roomId: string;
                    senderId: string;
                    senderNickname: string;
                    type: import('../../classes/message').MessageType;
                    status: import('../../classes/message').MessageStatus;
                    createdAt: number;
                    updatedAt: number;
                    editedAt: string | null;
                    groupId: string;
                    dateId: number;
                    reactions: {
                        client: string;
                        reaction: string;
                    }[];
                    template?: {
                        quickReply: {
                            items: any[];
                        };
                    } | undefined;
                    text?: string | undefined;
                    prev: /*elided*/ any | null;
                    next: /*elided*/ any | null;
                    payload: Record<string, unknown> | null;
                    _string: (uid: string, users: {
                        [uid: string]: import('../../lib').User;
                    }) => string;
                    readonly string: string;
                    readonly isIncoming: boolean;
                    readonly isOutgoing: boolean;
                    readonly isSystem: boolean;
                }> & Omit<Map<number, import('../../lib').Message>, keyof Map<any, any>>;
                prev: /*elided*/ any | null;
                next: /*elided*/ any | null;
                append: (message: import('../../lib').Message) => void;
                insertMessageToGroup: (message: import('../../lib').Message) => void;
                remove: (id: string) => void;
                replace: (id: string, message: import('../../lib').Message) => void;
                concate: (linkedList: import('../../classes/messageLinkedList').default) => void;
                unshift: (linkedList: import('../../classes/messageLinkedList').default) => void;
                resetHead: (id: string) => void;
                resetTail: (id: string) => void;
                canCombine: (linkedList: import('../../classes/messageLinkedList').default) => boolean;
                combine: (linkedList: import('../../classes/messageLinkedList').default) => void;
                array: () => import('../../lib').Message[];
                finds: (id: string) => import('../../lib').Message | undefined;
                contains: (id: string) => boolean;
                isValid: () => boolean;
            } | null;
            main: {
                head: {
                    id: string;
                    roomId: string;
                    senderId: string;
                    senderNickname: string;
                    type: import('../../classes/message').MessageType;
                    status: import('../../classes/message').MessageStatus;
                    createdAt: number;
                    updatedAt: number;
                    editedAt: string | null;
                    groupId: string;
                    dateId: number;
                    reactions: {
                        client: string;
                        reaction: string;
                    }[];
                    template?: {
                        quickReply: {
                            items: any[];
                        };
                    } | undefined;
                    text?: string | undefined;
                    prev: /*elided*/ any | null;
                    next: /*elided*/ any | null;
                    payload: Record<string, unknown> | null;
                    _string: (uid: string, users: {
                        [uid: string]: import('../../lib').User;
                    }) => string;
                    readonly string: string;
                    readonly isIncoming: boolean;
                    readonly isOutgoing: boolean;
                    readonly isSystem: boolean;
                } | null;
                tail: {
                    id: string;
                    roomId: string;
                    senderId: string;
                    senderNickname: string;
                    type: import('../../classes/message').MessageType;
                    status: import('../../classes/message').MessageStatus;
                    createdAt: number;
                    updatedAt: number;
                    editedAt: string | null;
                    groupId: string;
                    dateId: number;
                    reactions: {
                        client: string;
                        reaction: string;
                    }[];
                    template?: {
                        quickReply: {
                            items: any[];
                        };
                    } | undefined;
                    text?: string | undefined;
                    prev: /*elided*/ any | null;
                    next: /*elided*/ any | null;
                    payload: Record<string, unknown> | null;
                    _string: (uid: string, users: {
                        [uid: string]: import('../../lib').User;
                    }) => string;
                    readonly string: string;
                    readonly isIncoming: boolean;
                    readonly isOutgoing: boolean;
                    readonly isSystem: boolean;
                } | null;
                length: number;
                map: Map<string, {
                    id: string;
                    roomId: string;
                    senderId: string;
                    senderNickname: string;
                    type: import('../../classes/message').MessageType;
                    status: import('../../classes/message').MessageStatus;
                    createdAt: number;
                    updatedAt: number;
                    editedAt: string | null;
                    groupId: string;
                    dateId: number;
                    reactions: {
                        client: string;
                        reaction: string;
                    }[];
                    template?: {
                        quickReply: {
                            items: any[];
                        };
                    } | undefined;
                    text?: string | undefined;
                    prev: /*elided*/ any | null;
                    next: /*elided*/ any | null;
                    payload: Record<string, unknown> | null;
                    _string: (uid: string, users: {
                        [uid: string]: import('../../lib').User;
                    }) => string;
                    readonly string: string;
                    readonly isIncoming: boolean;
                    readonly isOutgoing: boolean;
                    readonly isSystem: boolean;
                }> & Omit<Map<string, import('../../lib').Message>, keyof Map<any, any>>;
                messageGroups: Map<string, {
                    id: string;
                    roomId: string;
                    senderId: string;
                    senderNickname: string;
                    type: import('../../classes/message').MessageType;
                    status: import('../../classes/message').MessageStatus;
                    createdAt: number;
                    updatedAt: number;
                    editedAt: string | null;
                    groupId: string;
                    dateId: number;
                    reactions: {
                        client: string;
                        reaction: string;
                    }[];
                    template?: {
                        quickReply: {
                            items: any[];
                        };
                    } | undefined;
                    text?: string | undefined;
                    prev: /*elided*/ any | null;
                    next: /*elided*/ any | null;
                    payload: Record<string, unknown> | null;
                    _string: (uid: string, users: {
                        [uid: string]: import('../../lib').User;
                    }) => string;
                    readonly string: string;
                    readonly isIncoming: boolean;
                    readonly isOutgoing: boolean;
                    readonly isSystem: boolean;
                }[]> & Omit<Map<string, import('../../lib').Message[]>, keyof Map<any, any>>;
                firstMessageOfDate: Map<number, {
                    id: string;
                    roomId: string;
                    senderId: string;
                    senderNickname: string;
                    type: import('../../classes/message').MessageType;
                    status: import('../../classes/message').MessageStatus;
                    createdAt: number;
                    updatedAt: number;
                    editedAt: string | null;
                    groupId: string;
                    dateId: number;
                    reactions: {
                        client: string;
                        reaction: string;
                    }[];
                    template?: {
                        quickReply: {
                            items: any[];
                        };
                    } | undefined;
                    text?: string | undefined;
                    prev: /*elided*/ any | null;
                    next: /*elided*/ any | null;
                    payload: Record<string, unknown> | null;
                    _string: (uid: string, users: {
                        [uid: string]: import('../../lib').User;
                    }) => string;
                    readonly string: string;
                    readonly isIncoming: boolean;
                    readonly isOutgoing: boolean;
                    readonly isSystem: boolean;
                }> & Omit<Map<number, import('../../lib').Message>, keyof Map<any, any>>;
                prev: /*elided*/ any | null;
                next: /*elided*/ any | null;
                append: (message: import('../../lib').Message) => void;
                insertMessageToGroup: (message: import('../../lib').Message) => void;
                remove: (id: string) => void;
                replace: (id: string, message: import('../../lib').Message) => void;
                concate: (linkedList: import('../../classes/messageLinkedList').default) => void;
                unshift: (linkedList: import('../../classes/messageLinkedList').default) => void;
                resetHead: (id: string) => void;
                resetTail: (id: string) => void;
                canCombine: (linkedList: import('../../classes/messageLinkedList').default) => boolean;
                combine: (linkedList: import('../../classes/messageLinkedList').default) => void;
                array: () => import('../../lib').Message[];
                finds: (id: string) => import('../../lib').Message | undefined;
                contains: (id: string) => boolean;
                isValid: () => boolean;
            } | null;
            length: number;
            numberOfMessages: () => number;
            concate: (linkedList: import('../../classes/messageLinkedList').default) => void;
            unshift: (linkedList: import('../../classes/messageLinkedList').default) => void;
            insert: (linkedList: import('../../classes/messageLinkedList').default) => void;
            merge: () => void;
            isValid: () => boolean;
        }> & Omit<Map<string, import('../../classes/messageMultiList').default>, keyof Map<any, any>>;
        numberOfTotalMessages: Map<string, number> & Omit<Map<string, number>, keyof Map<any, any>>;
        replyId: string;
        editingMessageId: string;
        navigationTargetId: string;
        isRoomInfoVisible: boolean;
        isTyping: {
            [uid: string]: number;
        };
        isSearchInRoomMode: boolean;
        messageSearchKeyword: string;
        searchedMessageIds: Map<string, string[]> & Omit<Map<string, string[]>, keyof Map<any, any>>;
        blockedUsers: {
            [uid: string]: boolean;
        };
        activeActionMessageId: string;
        isNavigatingToMessage: boolean;
    } & import('pinia').PiniaCustomStateProperties<ImkitState>) => import('../../classes/room').default[];
}, {
    updateRoom(this: any, payload: Partial<import('../../classes/room').default> & {
        id: string;
    }): void;
    deleteRoom(this: any, roomId: string): void;
    fetchRooms(this: any, { pageSize }?: {
        pageSize?: number;
    }): Promise<import('../../classes/room').default[] | undefined>;
    fetchRoom(this: any, roomId: string): Promise<void>;
    fetchRoomsInFolders(this: any): Promise<void>;
    mergeInto(this: any, key: string, value: Record<string, unknown>): void;
    updateRoomPrefs(this: any, { roomId, prefs, roomTag }: {
        roomId: string;
        prefs: Record<string, unknown>;
        roomTag?: string;
    }): Promise<void>;
    fetchPrefs(this: any): Promise<void>;
    updatePref(this: any, { key, value }: {
        key: string;
        value: unknown;
    }): Promise<import('axios').AxiosResponse<any, any, {}>>;
    deletePref(this: any, key: string): Promise<import('axios').AxiosResponse<any, any, {}>>;
    updateFolder(this: any, payload: {
        folderKey: string;
        name: string;
    }): Promise<void>;
    removeFolder(this: any, folderId: string): Promise<void>;
    addRoomToFolder(this: any, payload: {
        roomId: string;
        folderId: string;
    }): Promise<void>;
    removeRoomFromFolder(this: any, payload: string | {
        roomId: string;
        folderId?: string;
    }): Promise<void>;
    setRoomTag(this: any, roomTag: string): void;
    aggregateRoomsAndFolders(this: any): Promise<void>;
    mergeUsers(this: any, users: Record<string, import('../../lib').User>): void;
    updateLastRead(this: any, payload: string | {
        roomId: string;
        uid: string;
        messageId: string;
    }): Promise<void>;
    updateMessage(this: any, payload: import('../../lib').Message): void;
    handleMessageFromSocket(this: any, payload: {
        message: import('../../lib').Message;
        mentions?: string[];
    }): Promise<void>;
    handleRoomFromSocket(this: any, result: Record<string, unknown>): Promise<void>;
    handleLastReadFromSocket(this: any, event: {
        roomId: string;
        uid: string;
        messageId: string;
    }): Promise<void>;
    handlePrefChangeFromSocket(this: any, payload: {
        key: string;
        data: Record<string, unknown>[] | {
            children: {
                id: string;
            }[];
        };
    }): Promise<void>;
    handlePrefDeleteFromSocket(this: any, payload: string): Promise<void>;
    handleTypingFromSocket(this: any, payload: {
        room: string;
        sender: string;
        senderInfo: {
            _id: string;
            avatarUrl: string;
            isRobot: boolean;
            nickname: string;
        };
    }): Promise<void>;
    handleAIStreamingFromSocket(this: any, payload: {
        messageId: string;
        room: string;
        sender: string;
        text: string;
        senderInfo?: {
            _id: string;
            [key: string]: unknown;
        };
    }): Promise<void>;
    pushMessage(this: any, message: import('../../lib').Message): void;
    replaceMessage(this: any, payload: {
        targetMessageId: string;
        message: import('../../lib').Message;
    }): void;
    deleteMessages(this: any, messageIds: string[], roomId?: any): void;
    clearChatRoom(this: any): void;
    insertMessageLinkedList(this: any, linkedList: import('../../classes/messageLinkedList').default): void;
    concateMessageLinkedList(this: any, linkedList: import('../../classes/messageLinkedList').default): void;
    unshiftMessageLinkedList(this: any, linkedList: import('../../classes/messageLinkedList').default): void;
    loadMessages(this: any, { roomId, beforeMessageId, afterMessageId, targetMessageId }: {
        roomId: string;
        beforeMessageId?: string | null;
        afterMessageId?: string | null;
        targetMessageId?: string | null;
    }): Promise<any>;
    sendMessage(this: any, payload: Record<string, unknown>): Promise<import('../../lib').Message | undefined>;
    retryMessage(this: any, localMessage: import('../../lib').Message): Promise<import('../../lib').Message | undefined>;
    batchSendMessage(payload: Record<string, unknown>): Promise<void>;
    recallMessage(this: any, payload: {
        roomId: string;
        _id: string;
    }): Promise<void>;
    editMessage(this: any, payload: {
        roomId: string;
        _id: string;
        message: string;
    }): Promise<void>;
    hideMessage(this: any, payload: {
        roomId: string;
        messageIds: string[];
    }): Promise<void>;
    deleteMessage(this: any, payload: {
        roomId: string;
        messageId: string;
    }): Promise<void>;
    uploadMedia(this: any, { id, file, roomId }: {
        id: string;
        roomId: string;
        file: File;
    }): Promise<string>;
    uploadImage(this: any, { image, file, roomId }: {
        roomId: string;
        image: import('../../classes/image').default;
        file: File;
    }): Promise<{
        originalUrl: any;
        thumbnailUrl: any;
    }>;
    fetchLinkPreview(this: any, url: string): Promise<import('../../classes/linkPreview').default>;
    handleLinkPreviews(this: any, messages: import('../../lib').Message[]): Promise<void>;
    fetchVideoBlob(this: any, url: string): Promise<Blob>;
    fetchPresignedUrl(this: any, { bucketName, fileId }: {
        bucketName: string;
        fileId: string;
    }): Promise<any>;
    fetchPresignedUrlByPath(this: any, path: string): Promise<any>;
    navigateToMessage(this: any, messageId: string): Promise<void>;
    insertUnreadMessage(this: any, numberOfUnread: number): Promise<void>;
    removeUnreadMessage(this: any): Promise<void>;
    translate(this: any, text: string): Promise<string>;
    subscribe(this: any): Promise<void>;
    unsubscribe(this: any): Promise<void>;
    toggleNotification(this: any, roomId: string): Promise<void>;
    translateMessage(this: any, message: import('../../lib').Message): Promise<void>;
    blockUser(this: any, { roomId, uid }: {
        roomId: string;
        uid: string;
    }): Promise<void>;
    unblockUser(this: any, { roomId, uid }: {
        roomId: string;
        uid: string;
    }): Promise<void>;
    getBlockList(this: any, roomId: string): Promise<void>;
    hideMessagesFromUserInRoom(this: any, roomId: string): Promise<void>;
    sendReaction(this: any, { messageId, reaction }: {
        messageId: string;
        reaction: string;
    }): Promise<void>;
    deleteReaction(this: any, { messageId, reaction }: {
        messageId: string;
        reaction: string;
    }): Promise<void>;
    removeMembers(this: any, { roomId, uids }: {
        roomId: string;
        uids: string[];
    }): Promise<void>;
    addLoadingLinkPreviews(this: any, urls: string[]): void;
    removeLoadingLinkPreview(this: any, url: string): void;
    searchRoomsByKeyword(this: any, keyword: string): Promise<void>;
}>;
export type ImkitStore = ReturnType<typeof useImkitStore>;
export declare const initImkitStore: (pinia?: Pinia) => ImkitStore;
export declare const getImkitStore: () => ImkitStore;
export declare const _resetImkitStoreForTests: () => void;
export type { ImkitState } from './state';
