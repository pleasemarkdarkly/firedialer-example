declare type TwilioWebhookEvent = [string, string, string];
export declare class TwilioWebhookParse {
    static payload: any;
    constructor();
    static webhookManualParser: (example: string) => {
        [x: string]: any;
    };
    static Parse: () => Promise<TwilioWebhookEvent[] | undefined>;
}
export {};
//# sourceMappingURL=parser.d.ts.map