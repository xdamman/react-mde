import { TextSelection } from "../types/TextSelection";
import { TextInsertionResult } from "../types/TextInsertionResult";
import { Word } from "../types/Word";
import { AlterLineFunction } from "../types/FunctionTypes";
/**
 * Inserts "textToBeInserted" in "text" at the "insertionPosition"
 *
 * @param {any} originalText
 * @param {any} textToInsert
 * @param {any} insertionPosition
 * @returns
 */
export declare function insertText(originalText: string, textToInsert: string, insertionPosition: number): TextInsertionResult;
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
export declare function insertBefore(originalText: string, textToInsert: string, selection: TextSelection, selectInsertion?: boolean): TextInsertionResult;
/**
 * Inserts the given text after. The selection will change to encompass the new text
 *
 * @export
 * @param {any} originalText
 * @param {any} textToInsert
 * @param {any} selection
 * @returns
 */
export declare function insertAfter(originalText: string, textToInsert: string, selection: TextSelection): TextInsertionResult;
/**
 *  Gets the number of line-breaks that would have to be inserted before the given 'startPosition'
 *  to make sure there's an empty line between 'startPosition' and the previous text
 */
export declare function getBreaksNeededForEmptyLineBefore(text: string, startPosition: number): number;
/**
 *  Gets the number of line-breaks that would have to be inserted after the given 'startPosition'
 *  to make sure there's an empty line between 'startPosition' and the next text
 */
export declare function getBreaksNeededForEmptyLineAfter(text: string, startPosition: number): number;
/**
 * Inserts breaks before, only if needed. The returned selection will not include this breaks
 *
 * @export
 * @param {any} text
 * @param {any} selection
 * @returns
 */
export declare function insertBreaksBeforeSoThatThereIsAnEmptyLineBefore(text: string, selection: TextSelection): TextInsertionResult;
/**
 * Inserts breaks after, only if needed. The returned selection will not include this breaks
 *
 * @export
 * @param {any} text
 * @param {any} selection
 * @returns
 */
export declare function insertBreaksAfterSoThatThereIsAnEmptyLineAfter(text: string, selection: TextSelection): TextInsertionResult;
/**
 * Inserts insertionString before each line
 */
export declare function insertBeforeEachLine(text: string, insertion: string | AlterLineFunction, selection: TextSelection): TextInsertionResult;
/**
 * Gets the word surrounding the given position. Word delimiters are spaces and line-breaks
 *
 * @export
 * @param {any} text
 * @param {any} position
 */
export declare function getSurroundingWord(text: string, position: number): Word;
/**
 * Returns the selection of the current work if selection[0] is equal to selection[1] and carret is inside a word
 *
 * @export
 * @param {any} text
 * @param {any} selection
 */
export declare function selectCurrentWordIfCaretIsInsideOne(text: string, selection: TextSelection): TextSelection;
