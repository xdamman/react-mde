"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Gets the selection of the given element
 *
 * @param {any} element
 * @returns
 */
function getSelection(element) {
    if (!element)
        throw Error("Argument 'element' should be truthy");
    return {
        start: element.selectionStart,
        end: element.selectionEnd,
    };
}
exports.getSelection = getSelection;
/**
 * Sets the selection of the given element
 *
 * @param {any} element
 * @param {any} start
 * @param {any} end
 */
function setSelection(element, start, end) {
    if (!element)
        throw Error("Argument 'element' should be truthy");
    element.focus();
    if (!element.setSelectionRange) {
        throw Error("Incompatible browser. element.setSelectionRange is not defined");
    }
    element.setSelectionRange(start, end);
}
exports.setSelection = setSelection;
