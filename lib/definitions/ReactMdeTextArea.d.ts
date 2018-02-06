/// <reference types="react" />
import * as React from "react";
import { Value } from "./types";
export interface ReactMdeTextAreaProps {
    onChange: (value: Value) => void;
    textAreaRef?: (ref: HTMLTextAreaElement) => void;
    value: Value;
    textAreaProps?: any;
    helpVisible: boolean;
}
export interface ReactMdeTextAreaState {
}
export declare class ReactMdeTextArea extends React.Component<ReactMdeTextAreaProps, ReactMdeTextAreaState> {
    textArea: HTMLTextAreaElement;
    static defaultProps: Partial<ReactMdeTextAreaProps>;
    /**
     * Handler for the textArea value change
     * @param {any} e
     * @memberOf ReactMde
     */
    handleValueChange: (e: React.FormEvent<HTMLTextAreaElement>) => void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
