import { SLACK_CHANNEL } from '.';
export declare class SlackInstrument {
    blackout_hours: number[];
    start: any;
    end: any;
    message: string;
    constructor(name: string);
    add: (msg: string) => Promise<void>;
    send: (channel: SLACK_CHANNEL, msg?: string | undefined) => Promise<void>;
    alert: (title?: string, body?: string) => Promise<void>;
}
//# sourceMappingURL=SlackInstrument.d.ts.map