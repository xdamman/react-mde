/// <reference types="react" />
import * as React from "react";
import { SubCommand } from "../types";
export interface HeaderItemDropdownProps {
    icon: string;
    commands: SubCommand[];
    onCommand: (command: SubCommand) => void;
}
export interface HeaderItemDropdownState {
    open: boolean;
}
export declare class HeaderItemDropdown extends React.Component<HeaderItemDropdownProps, HeaderItemDropdownState> {
    dropdown: any;
    dropdownOpener: any;
    constructor(props: HeaderItemDropdownProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleGlobalClick: EventListenerOrEventListenerObject;
    openDropdown: () => void;
    closeDropdown(): void;
    clickedOutside: (e: Event) => boolean;
    handleOnClickCommand: (e: React.SyntheticEvent<any>, command: SubCommand) => void;
    handleOpenDropdown: () => void;
    render(): JSX.Element;
}
