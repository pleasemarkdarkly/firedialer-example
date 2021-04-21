/// <reference types="node" />
import * as EventEmitter from 'events';
export declare const VERBOSE = false;
interface SendgridWebhookCallbacks {
    'started': () => void;
    'ended': () => void;
    'dispatch': (payload: any) => void;
    'undefined': (...rest: any[]) => void;
    'error': (...rest: any[]) => void;
    'processed': (...rest: any[]) => void;
    'dropped': (...rest: any[]) => void;
    'delivered': (...rest: any[]) => void;
    'deferred': (...rest: any[]) => void;
    'bounce': (...rest: any[]) => void;
    'blocked': (...rest: any[]) => void;
    'open': (...rest: any[]) => void;
    'click': (...rest: any[]) => void;
    'spamreport': (...rest: any[]) => void;
    'unsubscribe': (...rest: any[]) => void;
}
export declare class SendgridWebhookEvents extends EventEmitter {
    private static instance;
    constructor();
    static getInstance: () => SendgridWebhookEvents;
    on<T extends keyof SendgridWebhookCallbacks>(event: T, listener: SendgridWebhookCallbacks[T]): this;
    emit<T extends keyof SendgridWebhookCallbacks>(event: T, ...args: Parameters<SendgridWebhookCallbacks[T]>): boolean;
}
export declare class SendgridWebhookDispatcher {
    constructor();
    dispatch: (rest: any) => Promise<void>;
    started: () => void;
    ended: () => void;
    deferred: (...rest: any[]) => void;
    undefined: (...rest: any[]) => Promise<void>;
    error: (...rest: any[]) => Promise<void>;
    processed: (...rest: any[]) => Promise<void>;
    dropped: (...rest: any[]) => Promise<void>;
    blocked: (...rest: any[]) => Promise<void>;
    bounce: (...rest: any[]) => Promise<void>;
    spamreport: (...rest: any[]) => Promise<void>;
    unsubscribe: (...rest: any[]) => Promise<void>;
    delivered: (...rest: any[]) => void;
    open: (...rest: any[]) => Promise<void>;
    click: (...rest: any[]) => Promise<void>;
}
export declare class SendgridWebhook {
    private static instance;
    event: SendgridWebhookEvents;
    dispatch: SendgridWebhookDispatcher;
    constructor();
    static getInstance: () => SendgridWebhook;
}
export {};
//# sourceMappingURL=events.d.ts.map