/**
  * @file "is-whole-num.js"
  *
  * This file contains a function that tests a string using a regular expression.
  * The test only works for whole numbers. Like any JavaScript number, there is a
  * limit to the size that the number can be.
  *
  * Why not use one of the built-in methods for preforming the same type of check?
  * Regular expressions are much faster in specific situations than program
  * implimented algorithms; checking whether or not a string is a whole number is
  * one of those situations. Thats not to say that regular expressions should be
  * used in every instance of checking whether or not a string is numeric,
  * obviously, the choice you make (algorithm or regex) should vary on a case by
  * case basis.
  */
function isNumeric(value) {
    return /^-?\d+$/.test(value);
}
