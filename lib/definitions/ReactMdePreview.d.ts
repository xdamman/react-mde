/// <reference types="react" />
/// <reference types="showdown" />
import * as React from "react";
import * as Showdown from "showdown";
export interface ReactMdePreviewProps {
    previewRef?: (ref: HTMLDivElement) => void;
    showdownOptions?: any;
    markdown: string;
}
export interface ReactMdePreviewState {
}
export declare class ReactMdePreview extends React.Component<ReactMdePreviewProps, ReactMdePreviewState> {
    converter: Showdown.Converter;
    preview: HTMLDivElement;
    constructor(props: any);
    render(): JSX.Element;
}
