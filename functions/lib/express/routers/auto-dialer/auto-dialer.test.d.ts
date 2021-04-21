declare type ActivityType = 'call' | 'sms' | 'email';
export interface Activity {
    type: ActivityType;
    address: string;
    description: string;
    response: string;
    performedAt: Date;
}
export {};
//# sourceMappingURL=auto-dialer.test.d.ts.map