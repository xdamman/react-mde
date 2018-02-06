"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.HeaderItem = function (props) {
    var icon = props.icon, tooltip = props.tooltip, onClick = props.onClick;
    // if icon is a text, print a font-awesome <i/>, otherwise, consider it a React component and print it
    var iconElement = React.isValidElement(icon) ? icon : React.createElement("i", { className: "fa fa-" + icon, "aria-hidden": "true" });
    var buttonProps = {};
    if (tooltip) {
        buttonProps = {
            "aria-label": tooltip,
            "className": "tooltipped",
        };
    }
    return (React.createElement("li", { className: "mde-header-item" },
        React.createElement("button", __assign({ type: "button" }, buttonProps, { onClick: onClick }), iconElement)));
};
