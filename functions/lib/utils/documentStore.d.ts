export declare const addEntryByCategory: (collection: string, documentId: string, category: string, entry: string) => Promise<false | FirebaseFirestore.WriteResult | {
    timestamp: string;
    collection: string;
    document: string;
    entry: string;
    error: any;
}>;
export declare const addEntryByTimestamp: (collection: string, documentId: string, entry: string, timestamp?: string) => Promise<false | FirebaseFirestore.WriteResult | {
    timestamp: string;
    collection: string;
    document: string;
    entry: string;
    error: any;
}>;
export declare const isEntryPresent: (collection: string, documentId: string, entry: string) => Promise<boolean | undefined>;
export declare const removeFirstEntry: (collection: string, documentId: string, entry: string) => Promise<any>;
export declare const removeLastEntry: (collection: string, documentId: string, entry: string) => Promise<any>;
export declare const removeEmptyTimestamps: (collection: string, documentId: string) => Promise<any>;
export declare const removeEveryEntry: (collection: string, documentId: string, entry: string) => Promise<any>;
export declare const countEntries: (collection: string, documentId: string, entry: string) => Promise<any>;
export declare const getDocument: (collection: string, documentId: string) => Promise<any>;
export declare const listEntryByTimestamps: (collection: string, documentId: string, entry: string) => Promise<any>;
export declare const listAllEntriesByTimestamp: (collection: string, documentId: string, entry?: string | undefined) => Promise<any>;
export declare const countTotalEntries: (collection: string, documentId: string) => Promise<any>;
export declare const elapseTime: (ts: Date, thresh?: number) => {
    [x: string]: any;
};
export declare const isTimeExpired: (ts: Date, thresh?: number) => boolean;
export declare const isPhoneWithinTimeWindow: (fb: {
    collection: string;
    document: string;
}, phone: string, active_window?: number, timestamp?: Date | undefined) => Promise<void>;
//# sourceMappingURL=documentStore.d.ts.map