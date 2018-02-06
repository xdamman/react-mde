/// <reference types="react" />
import * as React from "react";
import { Command, CommandSet, Value } from "./types";
export interface ReactMdeVisibility {
    toolbar?: boolean;
    textarea?: boolean;
    preview?: boolean;
    previewHelp?: boolean;
}
export interface ReactMdeProps {
    commands: Array<Array<Command | CommandSet>>;
    value: Value;
    onChange: (value: Value) => void;
    textAreaProps?: any;
    showdownOptions?: any;
    visibility?: ReactMdeVisibility;
    className?: string;
}
export declare class ReactMde extends React.Component<ReactMdeProps> {
    textArea: HTMLTextAreaElement;
    preview: HTMLDivElement;
    static defaultProps: Partial<ReactMdeProps>;
    /**
     * Handler for the textArea value change
     * @memberOf ReactMde
     */
    handleValueChange: (value: any) => void;
    /**
     * Executes a command
     * @memberOf ReactMde
     */
    handleCommand: (command: Command) => Promise<void>;
    /**
     * Renders react-mde
     * @returns
     * @memberOf ReactMde
     */
    render(): JSX.Element;
}
