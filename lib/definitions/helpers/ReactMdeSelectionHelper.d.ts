import { TextSelection } from "../types/TextSelection";
/**
 * Gets the selection of the given element
 *
 * @param {any} element
 * @returns
 */
export declare function getSelection(element: HTMLTextAreaElement): TextSelection;
/**
 * Sets the selection of the given element
 *
 * @param {any} element
 * @param {any} start
 * @param {any} end
 */
export declare function setSelection(element: HTMLTextAreaElement, start: number, end: number): void;
