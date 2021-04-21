/// <reference types="node" />
import * as EventEmitter from 'events';
import { SendgridEvent } from '../../../models';
interface WebhookCallbacks {
    'started': () => void;
    'bounce': (event: SendgridEvent) => void;
    'dropped': (event: SendgridEvent) => void;
    'deferred': (event: SendgridEvent) => void;
    'unsubscribed': (event: SendgridEvent) => void;
    'spamreport': (event: SendgridEvent) => void;
    'delivered': (event: SendgridEvent) => void;
    'click': (event: SendgridEvent) => void;
    'open': (event: SendgridEvent) => void;
    'processed': (event: SendgridEvent) => void;
}
export declare class SendgridWebhookFilter extends EventEmitter.EventEmitter {
    concurrency: number;
    constructor(concurrency?: number);
    fetchSendgridWebhookEvents(): Promise<any>;
    debugSendgridWebhookEvents(): Promise<any>;
    on<T extends keyof WebhookCallbacks>(event: T, listener: WebhookCallbacks[T]): this;
    emit<T extends keyof WebhookCallbacks>(event: T, ...args: Parameters<WebhookCallbacks[T]>): boolean;
}
export {};
//# sourceMappingURL=filter.d.ts.map