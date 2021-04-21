/// <reference types="node" />
import * as EventEmitter from 'events';
export interface TwilioError {
    'ParentAccountSid': string;
    'Payload': {
        'resource_sid': string;
        'service_sid': string;
        'error_code': string;
    };
    'Level': string;
    'Timestamp': Date;
    'PayloadType': string;
    'AccountSid': string;
    'Sid': string;
    'to'?: string;
}
interface TwilioWebhookCallbacks {
    'started': () => void;
    'ended': () => void;
    'dispatch': (payload: any) => void;
    'undefined': (args: any) => void;
    'error_': (args: any) => void;
    'error_14107': (args: any) => void;
    'error_11750': (args: any) => void;
    'error_11200': (args: any) => void;
    'error_11205': (args: any) => void;
    'error_30008': (args: any) => void;
    'error_30007': (args: any) => void;
    'error_30003': (args: any) => void;
    'error': (args: any) => void;
}
export declare class TwilioWebhookEvents extends EventEmitter {
    private static instance;
    constructor();
    static getInstance: () => TwilioWebhookEvents;
    on<T extends keyof TwilioWebhookCallbacks>(event: T, listener: TwilioWebhookCallbacks[T]): this;
    emit<T extends keyof TwilioWebhookCallbacks>(event: T, ...args: Parameters<TwilioWebhookCallbacks[T]>): boolean;
}
export declare class TwilioWebhookDispatcher {
    constructor();
    started: () => void;
    ended: () => void;
    dispatch: (args: any) => Promise<void>;
    error_: (args: any) => Promise<void>;
    error_14107: (args: any) => Promise<void>;
    error_11200: (args: any) => Promise<void>;
    error_11205: (args: any) => Promise<void>;
    error_11750: (args: any) => Promise<void>;
    error_30008: (args: any) => Promise<void>;
    error_30007: (args: any) => Promise<void>;
    error_30003: (args: any) => Promise<void>;
    undefined: (args: any) => Promise<void>;
    error: (...args: any[]) => Promise<void>;
}
export declare class TwilioWebhook {
    private static instance;
    event: TwilioWebhookEvents;
    dispatch: TwilioWebhookDispatcher;
    constructor();
    static getInstance: () => TwilioWebhook;
}
export {};
//# sourceMappingURL=events.d.ts.map