"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactMdeTextHelper_1 = require("./ReactMdeTextHelper");
/**
 * Helper for creating commands that make lists
 * @export
 * @param {any} text
 * @param {any} selection
 * @param {any} insertionBeforeEachLine
 * @returns
 */
function makeList(text, selection, insertionBeforeEachLine) {
    var textInsertion;
    selection = ReactMdeTextHelper_1.selectCurrentWordIfCaretIsInsideOne(text, selection);
    // insert breaks before, if needed
    textInsertion = ReactMdeTextHelper_1.insertBreaksBeforeSoThatThereIsAnEmptyLineBefore(text, selection);
    text = textInsertion.newText;
    selection = textInsertion.newSelection;
    // insert breaks after, if needed
    textInsertion = ReactMdeTextHelper_1.insertBreaksAfterSoThatThereIsAnEmptyLineAfter(text, selection);
    text = textInsertion.newText;
    selection = textInsertion.newSelection;
    // inserts 'insertionBeforeEachLine' before each line
    textInsertion = ReactMdeTextHelper_1.insertBeforeEachLine(text, insertionBeforeEachLine, selection);
    text = textInsertion.newText;
    selection = textInsertion.newSelection;
    return {
        text: text,
        selection: selection,
    };
}
exports.makeList = makeList;
/**
 * Helper for creating a command that makes a header
 * @param {any} text
 * @param {any} selection
 * @param {any} insertionBefore
 * @returns
 */
function makeHeader(text, selection, insertionBefore) {
    selection = ReactMdeTextHelper_1.selectCurrentWordIfCaretIsInsideOne(text, selection);
    // the user is selecting a word section
    var insertionText = ReactMdeTextHelper_1.insertBefore(text, insertionBefore, selection, false);
    var newText = insertionText.newText;
    var newSelection = insertionText.newSelection;
    return {
        text: newText,
        selection: newSelection,
    };
}
exports.makeHeader = makeHeader;
function makeACommandThatInsertsBeforeAndAfter(text, selection, insertion) {
    selection = ReactMdeTextHelper_1.selectCurrentWordIfCaretIsInsideOne(text, selection);
    // the user is selecting a word section
    var _a = ReactMdeTextHelper_1.insertText(text, insertion, selection.start), newText = _a.newText, insertionLength = _a.insertionLength;
    var finalText = ReactMdeTextHelper_1.insertText(newText, insertion, selection.end + insertionLength).newText;
    return {
        text: finalText,
        selection: {
            start: selection.start + insertionLength,
            end: selection.end + insertionLength,
        },
    };
}
exports.makeACommandThatInsertsBeforeAndAfter = makeACommandThatInsertsBeforeAndAfter;
