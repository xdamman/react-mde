/// <reference types="react" />
import * as React from "react";
import { Command, CommandSet } from "./types";
export interface ReactMdeToolbarProps {
    commands: Array<Array<Command | CommandSet>>;
    onCommand: (command: Command) => void;
}
export declare const ReactMdeToolbar: React.SFC<ReactMdeToolbarProps>;
