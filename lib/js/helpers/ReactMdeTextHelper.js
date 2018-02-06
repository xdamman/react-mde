"use strict";
// TEXT INSERTION HELPERS
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Inserts "textToBeInserted" in "text" at the "insertionPosition"
 *
 * @param {any} originalText
 * @param {any} textToInsert
 * @param {any} insertionPosition
 * @returns
 */
function insertText(originalText, textToInsert, insertionPosition) {
    var newText = [originalText.slice(0, insertionPosition), textToInsert, originalText.slice(insertionPosition)].join("");
    return { newText: newText, insertionLength: textToInsert.length };
}
exports.insertText = insertText;
/**
 * Inserts the given text before. The selection is moved ahead so the
 *
 * @export
 * @param {any} originalText
 * @param {any} textToInsert
 * @param {any} selection
 * @param selectInsertion {boolean} Whether or not the inserted text should be selected
 * @returns
 */
function insertBefore(originalText, textToInsert, selection, selectInsertion) {
    if (selectInsertion === void 0) { selectInsertion = true; }
    var textInsertion = insertText(originalText, textToInsert, selection.start);
    var newSelection = {
        start: selectInsertion ? selection.start : selection.start + textInsertion.insertionLength,
        end: selection.end + textInsertion.insertionLength,
    };
    return __assign({}, textInsertion, { newSelection: newSelection });
}
exports.insertBefore = insertBefore;
/**
 * Inserts the given text after. The selection will change to encompass the new text
 *
 * @export
 * @param {any} originalText
 * @param {any} textToInsert
 * @param {any} selection
 * @returns
 */
function insertAfter(originalText, textToInsert, selection) {
    var textInsertion = insertText(originalText, textToInsert, selection.end);
    var newSelection = {
        start: selection.start,
        end: selection.end + textInsertion.insertionLength,
    };
    return __assign({}, textInsertion, { newSelection: newSelection });
}
exports.insertAfter = insertAfter;
/**
 *  Gets the number of line-breaks that would have to be inserted before the given 'startPosition'
 *  to make sure there's an empty line between 'startPosition' and the previous text
 */
function getBreaksNeededForEmptyLineBefore(text, startPosition) {
    if (text === void 0) { text = ""; }
    if (startPosition === 0)
        return 0;
    // rules:
    // - If we're in the first line, no breaks are needed
    // - Otherwise there must be 2 breaks before the previous character. Depending on how many breaks exist already, we
    //      may need to insert 0, 1 or 2 breaks
    var neededBreaks = 2;
    var isInFirstLine = true;
    for (var i = startPosition - 1; i >= 0 && (neededBreaks >= 0); i--) {
        switch (text.charCodeAt(i)) {
            case 32:// blank space
                continue;
            case 10:// line break
                neededBreaks--;
                isInFirstLine = false;
                break;
            default:
                return neededBreaks;
        }
    }
    return isInFirstLine ? 0 : neededBreaks;
}
exports.getBreaksNeededForEmptyLineBefore = getBreaksNeededForEmptyLineBefore;
/**
 *  Gets the number of line-breaks that would have to be inserted after the given 'startPosition'
 *  to make sure there's an empty line between 'startPosition' and the next text
 */
function getBreaksNeededForEmptyLineAfter(text, startPosition) {
    if (text === void 0) { text = ""; }
    if (startPosition === text.length - 1)
        return 0;
    // rules:
    // - If we're in the first line, no breaks are needed
    // - Otherwise there must be 2 breaks before the previous character. Depending on how many breaks exist already, we
    //      may need to insert 0, 1 or 2 breaks
    var neededBreaks = 2;
    var isInLastLine = true;
    for (var i = startPosition; i < text.length && (neededBreaks >= 0); i++) {
        switch (text.charCodeAt(i)) {
            case 32:
                continue;
            case 10: {
                neededBreaks--;
                isInLastLine = false;
                break;
            }
            default:
                return neededBreaks;
        }
    }
    return isInLastLine ? 0 : neededBreaks;
}
exports.getBreaksNeededForEmptyLineAfter = getBreaksNeededForEmptyLineAfter;
/**
 * Inserts breaks before, only if needed. The returned selection will not include this breaks
 *
 * @export
 * @param {any} text
 * @param {any} selection
 * @returns
 */
function insertBreaksBeforeSoThatThereIsAnEmptyLineBefore(text, selection) {
    var breaksNeededBefore = getBreaksNeededForEmptyLineBefore(text, selection.start);
    var insertionBefore = Array(breaksNeededBefore + 1).join("\n");
    var newText = text;
    var newSelection = selection;
    var insertionLength = 0;
    // if line-breaks have to be added before
    if (insertionBefore) {
        var textInsertion = insertText(text, insertionBefore, selection.start);
        newText = textInsertion.newText;
        insertionLength = textInsertion.insertionLength;
        newSelection = {
            start: selection.start + textInsertion.insertionLength,
            end: selection.end + textInsertion.insertionLength,
        };
    }
    return {
        newText: newText,
        insertionLength: insertionLength,
        newSelection: newSelection,
    };
}
exports.insertBreaksBeforeSoThatThereIsAnEmptyLineBefore = insertBreaksBeforeSoThatThereIsAnEmptyLineBefore;
/**
 * Inserts breaks after, only if needed. The returned selection will not include this breaks
 *
 * @export
 * @param {any} text
 * @param {any} selection
 * @returns
 */
function insertBreaksAfterSoThatThereIsAnEmptyLineAfter(text, selection) {
    var breaksNeededBefore = getBreaksNeededForEmptyLineAfter(text, selection.end);
    var insertionAfter = Array(breaksNeededBefore + 1).join("\n");
    var newText = text;
    var insertionLength = 0;
    // if line-breaks have to be added before
    if (insertionAfter) {
        var textInsertion = insertText(text, insertionAfter, selection.end);
        newText = textInsertion.newText;
        insertionLength = textInsertion.insertionLength;
    }
    return {
        newText: newText,
        insertionLength: insertionLength,
        newSelection: selection,
    };
}
exports.insertBreaksAfterSoThatThereIsAnEmptyLineAfter = insertBreaksAfterSoThatThereIsAnEmptyLineAfter;
/**
 * Inserts insertionString before each line
 */
function insertBeforeEachLine(text, insertion, selection) {
    var substring = text.slice(selection.start, selection.end);
    var lines = substring.split(/\n/);
    var insertionLength = 0;
    var modifiedText = lines.map(function (item, index) {
        if (typeof insertion === "string") {
            insertionLength += insertion.length;
            return insertion + item;
        }
        else if (typeof insertion === "function") {
            var insertionResult = insertion(item, index);
            insertionLength += insertionResult.length;
            return insertion(item, index) + item;
        }
        throw Error("insertion is expected to be either a string or a function");
    }).join("\n");
    var newText = text.slice(0, selection.start) + modifiedText + text.slice(selection.end);
    return {
        newText: newText,
        insertionLength: insertionLength,
        newSelection: {
            start: lines.length > 1 ? selection.start : selection.start + insertionLength,
            end: selection.end + insertionLength,
        },
    };
}
exports.insertBeforeEachLine = insertBeforeEachLine;
// MISC
/**
 * Gets the word surrounding the given position. Word delimiters are spaces and line-breaks
 *
 * @export
 * @param {any} text
 * @param {any} position
 */
function getSurroundingWord(text, position) {
    if (!text)
        throw Error("Argument 'text' should be truthy");
    var isWordDelimiter = function (c) { return c === " " || c.charCodeAt(0) === 10; };
    // leftIndex is initialized to 0 because if position is 0, it won't even enter the iteration
    var leftIndex = 0;
    // rightIndex is initialized to text.length because if position is equal to text.length it won't even enter the interation
    var rightIndex = text.length;
    // iterate to the left
    for (var i = position; i - 1 > -1; i--) {
        if (isWordDelimiter(text[i - 1])) {
            leftIndex = i;
            break;
        }
    }
    // iterate to the right
    for (var i = position; i < text.length; i++) {
        if (isWordDelimiter(text[i])) {
            rightIndex = i;
            break;
        }
    }
    return {
        word: text.slice(leftIndex, rightIndex),
        position: {
            start: leftIndex,
            end: rightIndex,
        },
    };
}
exports.getSurroundingWord = getSurroundingWord;
/**
 * Returns the selection of the current work if selection[0] is equal to selection[1] and carret is inside a word
 *
 * @export
 * @param {any} text
 * @param {any} selection
 */
function selectCurrentWordIfCaretIsInsideOne(text, selection) {
    if (text && text.length && selection.start === selection.end) {
        // the user is pointing to a word
        return getSurroundingWord(text, selection.start).position;
    }
    return selection;
}
exports.selectCurrentWordIfCaretIsInsideOne = selectCurrentWordIfCaretIsInsideOne;
