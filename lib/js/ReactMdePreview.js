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
var Showdown = require("showdown");
var ReactMdePreview = /** @class */ (function (_super) {
    __extends(ReactMdePreview, _super);
    function ReactMdePreview(props) {
        var _this = _super.call(this, props) || this;
        var showdownOptions = props.showdownOptions;
        _this.converter = new Showdown.Converter(showdownOptions ? showdownOptions : undefined);
        return _this;
    }
    ReactMdePreview.prototype.render = function () {
        var _this = this;
        var _a = this.props, markdown = _a.markdown, previewRef = _a.previewRef;
        var html = this.converter.makeHtml(markdown) || "<p>&nbsp</p>";
        return (React.createElement("div", { className: "mde-preview" },
            React.createElement("div", { className: "mde-preview-title" }, "Preview"),
            React.createElement("div", { className: "mde-preview-content", dangerouslySetInnerHTML: { __html: html }, ref: function (p) {
                    _this.preview = p;
                    if (previewRef) {
                        previewRef(p);
                    }
                } })));
    };
    return ReactMdePreview;
}(React.Component));
exports.ReactMdePreview = ReactMdePreview;
