"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.HeaderItemDropdownItem = function (props) {
    var onClick = props.onClick, children = props.children;
    return (React.createElement("li", { className: "mde-dropdown-header-item" },
        React.createElement("button", { type: "button", onClick: onClick }, children)));
};
