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
var ReactMdeSelectionHelper_1 = require("./helpers/ReactMdeSelectionHelper");
var MarkdownHelp_1 = require("./components/MarkdownHelp");
var ReactMdeTextArea = /** @class */ (function (_super) {
    __extends(ReactMdeTextArea, _super);
    function ReactMdeTextArea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Handler for the textArea value change
         * @param {any} e
         * @memberOf ReactMde
         */
        _this.handleValueChange = function (e) {
            var onChange = _this.props.onChange;
            onChange({ text: e.currentTarget.value });
        };
        return _this;
    }
    ReactMdeTextArea.prototype.componentDidUpdate = function () {
        var _a = this.props.value, selection = _a.selection, scrollTop = _a.scrollTop;
        if (selection) {
            ReactMdeSelectionHelper_1.setSelection(this.textArea, selection.start, selection.end);
        }
        if (scrollTop !== null && scrollTop !== undefined) {
            // This is necessary because otherwise, when the value is reset, the scroll will jump to the end
            this.textArea.scrollTop = scrollTop;
        }
    };
    ReactMdeTextArea.prototype.render = function () {
        var _this = this;
        var _a = this.props, text = _a.value.text, textAreaProps = _a.textAreaProps, textAreaRef = _a.textAreaRef, helpVisible = _a.helpVisible;
        return (React.createElement("div", { className: "mde-text" },
            React.createElement("textarea", __assign({ onChange: this.handleValueChange, value: text, ref: function (c) {
                    _this.textArea = c;
                    if (textAreaRef) {
                        textAreaRef(c);
                    }
                } }, textAreaProps)),
            helpVisible && React.createElement("div", { className: "mde-help" },
                React.createElement(MarkdownHelp_1.MarkdownHelp, null))));
    };
    ReactMdeTextArea.defaultProps = {
        textAreaProps: {},
        helpVisible: true
    };
    return ReactMdeTextArea;
}(React.Component));
exports.ReactMdeTextArea = ReactMdeTextArea;
