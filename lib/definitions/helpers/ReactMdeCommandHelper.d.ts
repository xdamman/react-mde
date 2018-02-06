import { TextSelection } from "../types/TextSelection";
import { Value } from "../types/Value";
import { AlterLineFunction } from "../types/FunctionTypes";
/**
 * Helper for creating commands that make lists
 * @export
 * @param {any} text
 * @param {any} selection
 * @param {any} insertionBeforeEachLine
 * @returns
 */
export declare function makeList(text: string, selection: TextSelection, insertionBeforeEachLine: string | AlterLineFunction): Value;
/**
 * Helper for creating a command that makes a header
 * @param {any} text
 * @param {any} selection
 * @param {any} insertionBefore
 * @returns
 */
export declare function makeHeader(text: string, selection: TextSelection, insertionBefore: string): Value;
export declare function makeACommandThatInsertsBeforeAndAfter(text: string, selection: TextSelection, insertion: string): Value;
