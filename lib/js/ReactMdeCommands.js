"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactMdeTextHelper_1 = require("./helpers/ReactMdeTextHelper");
var ReactMdeCommandHelper_1 = require("./helpers/ReactMdeCommandHelper");
exports.makeHeaderCommand = {
    type: "dropdown",
    icon: "header",
    subCommands: [
        {
            content: React.createElement("p", { className: "header-1" }, "Header"),
            execute: function (text, selection) {
                return ReactMdeCommandHelper_1.makeHeader(text, selection, "# ");
            },
        },
        {
            content: React.createElement("p", { className: "header-2" }, "Header"),
            execute: function (text, selection) {
                return ReactMdeCommandHelper_1.makeHeader(text, selection, "## ");
            },
        },
        {
            content: React.createElement("p", { className: "header-3" }, "Header"),
            execute: function (text, selection) {
                return ReactMdeCommandHelper_1.makeHeader(text, selection, "### ");
            },
        },
    ],
};
exports.makeBoldCommand = {
    icon: "bold",
    tooltip: "Add bold text",
    execute: function (text, selection) {
        return ReactMdeCommandHelper_1.makeACommandThatInsertsBeforeAndAfter(text, selection, "**");
    },
};
exports.makeItalicCommand = {
    icon: "italic",
    tooltip: "Add italic text",
    execute: function (text, selection) {
        return ReactMdeCommandHelper_1.makeACommandThatInsertsBeforeAndAfter(text, selection, "_");
    },
};
exports.makeLinkCommand = {
    icon: "link",
    tooltip: "Insert a link",
    execute: function (text, selection) {
        var _a = ReactMdeTextHelper_1.insertText(text, "[", selection.start), newText = _a.newText, insertionLength = _a.insertionLength;
        var finalText = ReactMdeTextHelper_1.insertText(newText, "](url)", selection.end + insertionLength).newText;
        return {
            text: finalText,
            selection: {
                start: selection.start + insertionLength,
                end: selection.end + insertionLength,
            },
        };
    },
};
exports.makeQuoteCommand = {
    icon: "quote-right",
    tooltip: "Insert a quote",
    execute: function (text, selection) {
        selection = ReactMdeTextHelper_1.selectCurrentWordIfCaretIsInsideOne(text, selection);
        var textInsertion;
        textInsertion = ReactMdeTextHelper_1.insertBreaksBeforeSoThatThereIsAnEmptyLineBefore(text, selection);
        text = textInsertion.newText;
        selection = textInsertion.newSelection;
        textInsertion = ReactMdeTextHelper_1.insertBefore(text, "> ", selection, false);
        text = textInsertion.newText;
        selection = textInsertion.newSelection;
        textInsertion = ReactMdeTextHelper_1.insertBreaksAfterSoThatThereIsAnEmptyLineAfter(text, selection);
        text = textInsertion.newText;
        selection = textInsertion.newSelection;
        return {
            text: text,
            selection: selection,
        };
    },
};
exports.makeCodeCommand = {
    icon: "code",
    tooltip: "Insert code",
    execute: function (text, selection) {
        if (text === void 0) { text = ""; }
        selection = ReactMdeTextHelper_1.selectCurrentWordIfCaretIsInsideOne(text, selection);
        if (text.slice(selection.start, selection.end).indexOf("\n") === -1) {
            // when there's no breaking line
            return ReactMdeCommandHelper_1.makeACommandThatInsertsBeforeAndAfter(text, selection, "`");
        }
        var textInsertion;
        // insert breaks before, if needed
        textInsertion = ReactMdeTextHelper_1.insertBreaksBeforeSoThatThereIsAnEmptyLineBefore(text, selection);
        text = textInsertion.newText;
        selection = textInsertion.newSelection;
        // inserts ```\n before
        textInsertion = ReactMdeTextHelper_1.insertBefore(text, "```\n", selection, false);
        text = textInsertion.newText;
        selection = textInsertion.newSelection;
        // inserts ```\n after
        textInsertion = ReactMdeTextHelper_1.insertAfter(text, "\n```", selection);
        text = textInsertion.newText;
        selection = textInsertion.newSelection;
        // insert breaks after, if needed
        textInsertion = ReactMdeTextHelper_1.insertBreaksAfterSoThatThereIsAnEmptyLineAfter(text, selection);
        text = textInsertion.newText;
        selection = textInsertion.newSelection;
        return { text: text, selection: selection };
    },
};
exports.makeImageCommand = {
    icon: "picture-o",
    tooltip: "Insert a picture",
    execute: function (text, selection) {
        var _a = ReactMdeTextHelper_1.insertText(text, "![", selection.start), newText = _a.newText, insertionLength = _a.insertionLength;
        var finalText = ReactMdeTextHelper_1.insertText(newText, "](image-url)", selection.end + insertionLength).newText;
        return {
            text: finalText,
            selection: {
                start: selection.start + insertionLength,
                end: selection.end + insertionLength,
            },
        };
    },
};
exports.makeUnorderedListCommand = {
    icon: "list-ul",
    tooltip: "Add a bulleted list",
    execute: function (text, selection) { return ReactMdeCommandHelper_1.makeList(text, selection, "- "); },
};
exports.makeOrderedListCommand = {
    icon: "list-ol",
    tooltip: "Add a numbered list",
    execute: function (text, selection) { return ReactMdeCommandHelper_1.makeList(text, selection, function (item, index) { return index + 1 + ". "; }); },
};
exports.getDefaultCommands = function () { return [
    [exports.makeHeaderCommand, exports.makeBoldCommand, exports.makeItalicCommand],
    [exports.makeLinkCommand, exports.makeQuoteCommand, exports.makeCodeCommand, exports.makeImageCommand],
    [exports.makeUnorderedListCommand, exports.makeOrderedListCommand],
]; };
