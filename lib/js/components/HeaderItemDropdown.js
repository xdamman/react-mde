"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var HeaderItemDropdownItem_1 = require("./HeaderItemDropdownItem");
var HeaderItemDropdown = /** @class */ (function (_super) {
    __extends(HeaderItemDropdown, _super);
    function HeaderItemDropdown(props) {
        var _this = _super.call(this, props) || this;
        _this.handleGlobalClick = function (e) {
            if (_this.clickedOutside(e)) {
                _this.closeDropdown();
            }
        };
        _this.openDropdown = function () {
            _this.setState({
                open: true,
            });
        };
        _this.clickedOutside = function (e) {
            var target = e.target;
            return _this.state.open
                && _this.dropdown
                && _this.dropdownOpener
                && !_this.dropdown.contains(target)
                && !_this.dropdownOpener.contains(target);
        };
        _this.handleOnClickCommand = function (e, command) {
            var onCommand = _this.props.onCommand;
            onCommand(command);
            _this.closeDropdown();
        };
        _this.handleOpenDropdown = function () {
            _this.openDropdown();
        };
        _this.state = {
            open: false,
        };
        return _this;
    }
    HeaderItemDropdown.prototype.componentDidMount = function () {
        document.addEventListener("click", this.handleGlobalClick, false);
    };
    HeaderItemDropdown.prototype.componentWillUnmount = function () {
        document.removeEventListener("click", this.handleGlobalClick, false);
    };
    HeaderItemDropdown.prototype.closeDropdown = function () {
        this.setState({
            open: false,
        });
    };
    HeaderItemDropdown.prototype.render = function () {
        var _this = this;
        var _a = this.props, icon = _a.icon, commands = _a.commands;
        var open = this.state.open;
        var items = commands.map(function (command, index) { return (React.createElement(HeaderItemDropdownItem_1.HeaderItemDropdownItem, { key: index, onClick: function (e) { return _this.handleOnClickCommand(e, command); } }, command.content)); });
        var dropdown = open
            ? (React.createElement("ul", { className: "react-mde-dropdown", ref: function (ref) {
                    _this.dropdown = ref;
                } }, items))
            : null;
        return (React.createElement("li", { className: "mde-header-item" },
            React.createElement("button", { type: "button", ref: function (ref) {
                    _this.dropdownOpener = ref;
                }, onClick: this.handleOpenDropdown },
                React.createElement("i", { className: "fa fa-" + icon, "aria-hidden": "true" })),
            dropdown));
    };
    return HeaderItemDropdown;
}(React.Component));
exports.HeaderItemDropdown = HeaderItemDropdown;
