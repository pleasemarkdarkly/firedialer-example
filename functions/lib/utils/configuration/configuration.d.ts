export declare const uploadtoFirestoreBucket: (filename: string, data: any) => Promise<any>;
export declare class Configuration {
    private static default_document_keys;
    static default_configuration: {
        rate: {
            limiters: {
                apicalls: {
                    seconds: number;
                    rate: number;
                    type: string;
                };
                dailyread: {
                    seconds: number;
                    rate: number;
                    type: string;
                };
                dailywrite: {
                    seconds: number;
                    rate: number;
                    type: string;
                };
            };
        };
        functions: {
            max_duration: number;
            min_duration: number;
        };
        document_keys: string[];
    };
    static Initialize: () => Promise<any>;
    static Update: (configuration: any) => Promise<any>;
    static Get: () => Promise<any>;
    static Set: (keyValue: any) => Promise<any>;
    static RemoveProperty: (property: string) => Promise<any>;
    static getDocuments: () => Promise<any>;
    static getDocument: (documentId: string) => Promise<any>;
    static addDocument: (document: string, data?: any) => Promise<any>;
    static Document: (documentId: string, data: any) => Promise<any>;
    static updateDocument: (documentId: string, data: any) => Promise<any>;
    static exportConfigurations: () => Promise<any>;
    static export: () => Promise<any>;
    static export_config_collection: () => Promise<any>;
    static import: (importPath?: string) => Promise<any>;
    static hasRecentConfiguration: (importPath?: string) => Promise<any>;
    static DownloadConfiguration: () => Promise<any>;
    static UploadConfiguration: () => Promise<any>;
}
export declare const SetupAppConfiguration: () => Promise<void>;
export declare const conversation_documents: string[];
export declare const SetupDocuments: () => Promise<any>;
export declare const TestManipulatingConfigurationDocument: () => Promise<any>;
export declare const createDirectories: (pathname: any) => any;
export declare const TestDownloadUploadConfiguration: () => Promise<void>;
//# sourceMappingURL=configuration.d.ts.map