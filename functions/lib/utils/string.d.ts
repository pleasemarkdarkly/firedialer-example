export declare const BLANK = "";
export declare const SPACE = " ";
export declare const Reset = "\u001B[0m";
export declare const Bright = "\u001B[1m";
export declare const sDim = "\u001B[2m";
export declare const Underscore = "\u001B[4m";
export declare const Blink = "\u001B[5m";
export declare const Reverse = "\u001B[7m";
export declare const Hidden = "\u001B[8m";
export declare const FgBlack = "\u001B[30m";
export declare const FgRed = "\u001B[31m";
export declare const FgGreen = "\u001B[32m";
export declare const FgYellow = "\u001B[33m";
export declare const FgBlue = "\u001B[34m";
export declare const FgMagenta = "\u001B[35m";
export declare const FgCyan = "\u001B[36m";
export declare const FgWhite = "\u001B[37m";
export declare const BgBlack = "\u001B[40m";
export declare const BgRed = "\u001B[41m";
export declare const BgGreen = "\u001B[42m";
export declare const BgYellow = "\u001B[43m";
export declare const BgBlue = "\u001B[44m";
export declare const BgMagenta = "\u001B[45m";
export declare const BgCyan = "\u001B[46m";
export declare const BgWhite = "\u001B[47m";
export declare const setConsoleUnderscore: () => void;
export declare const setConsoleGreen: () => void;
export declare const setConsoleYellow: () => void;
export declare const setConsoleReset: () => void;
export declare const NL: () => void;
declare global {
    interface String {
        _(): string;
    }
}
//# sourceMappingURL=string.d.ts.map