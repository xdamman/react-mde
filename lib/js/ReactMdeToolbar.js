"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var HeaderGroup_1 = require("./components/HeaderGroup");
var HeaderItemDropdown_1 = require("./components/HeaderItemDropdown");
var HeaderItem_1 = require("./components/HeaderItem");
exports.ReactMdeToolbar = function (_a) {
    var commands = _a.commands, onCommand = _a.onCommand;
    if (!commands || commands.length === 0) {
        return null;
    }
    return (React.createElement("div", { className: "mde-header" }, commands.map(function (cg, i) { return (React.createElement(HeaderGroup_1.HeaderGroup, { key: i }, cg.map(function (c, j) {
        if (c.type === "dropdown") {
            return (React.createElement(HeaderItemDropdown_1.HeaderItemDropdown, { key: j, icon: c.icon, commands: c.subCommands, onCommand: function (cmd) { return onCommand(cmd); } }));
        }
        return React.createElement(HeaderItem_1.HeaderItem, { key: j, icon: c.icon, tooltip: c.tooltip, onClick: function () { return onCommand(c); } });
    }))); })));
};
