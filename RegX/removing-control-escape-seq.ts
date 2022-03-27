/*
Removes any & all ANSI Standardized Control sequence that are placed in
(or wrapped around) a string. */

/*
Regular Expression: The real workhorse is not the function, but rather
the regular expression engine.  */
const regx = /\x1B(?:[@-Z\\-_]|\[[0-?]*[ -/]*[@-~])/gm;

/**
 *
 * Sanitizes a string of all ANSI standardized escape sequences.
 *
 * @param str String to be sanitized.
 * @returns Sanitized version of the string passed in. */
const rmEscSeqs = (str:string) => str.replace(regx, '');

export default rmEscSeqs;

type UnaryTypedFunc = (str:string) => string;
