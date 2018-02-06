/// <reference types="react" />
import * as React from "react";
export interface HeaderItemProps {
    tooltip: string;
    onClick: React.MouseEventHandler<any>;
    icon: React.ReactNode;
}
export declare const HeaderItem: React.SFC<HeaderItemProps>;
