import { Command, CommandSet, TextSelection } from "./types/";
export declare const makeHeaderCommand: CommandSet;
export declare const makeBoldCommand: Command;
export declare const makeItalicCommand: Command;
export declare const makeLinkCommand: {
    icon: string;
    tooltip: string;
    execute: (text: string, selection: TextSelection) => {
        text: string;
        selection: {
            start: number;
            end: number;
        };
    };
};
export declare const makeQuoteCommand: {
    icon: string;
    tooltip: string;
    execute: (text: string, selection: TextSelection) => {
        text: string;
        selection: TextSelection;
    };
};
export declare const makeCodeCommand: Command;
export declare const makeImageCommand: Command;
export declare const makeUnorderedListCommand: Command;
export declare const makeOrderedListCommand: Command;
export declare const getDefaultCommands: () => ((Command | CommandSet)[] | (Command | {
    icon: string;
    tooltip: string;
    execute: (text: string, selection: TextSelection) => {
        text: string;
        selection: {
            start: number;
            end: number;
        };
    };
})[])[];
