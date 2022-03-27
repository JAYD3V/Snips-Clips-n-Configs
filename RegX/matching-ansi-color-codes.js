

/** ### Validate TTY Terminal Styled String
  *
  * This **Regular Expression** is used to test if the start of a string is
  * encoded with ANSI/ECMA standardized encoded escaped characters that color
  * and style the string in its printed output form displayed in the console.
  *
  * The format for the encoded segment found at the front of ANSI Encoded
  * strings follows the following format. (Please note that this is what it
  * looks like inside of the source code, the string takes on differen't
  * forms depending how/where it is being rendered, written (in code) & stored
  * stored in memory.
  *
  * const encodedStr = '\x1b[1;44;92m;';
  *
  * The above example formats the string to print w/ bright-green-fg, red-bg &
  * bold-style.
  *
  *  1 = bold textstyle
  *  44 = red background
  *  92 = bright-green fg
  *  m = is placed at the end of every exscape, as it tells the kernal, which
  * control fuction to use. Think of 'm' as the function and the codes as the
  & arguments.
  *
  * This regex will fail if the codes are not a valid argument for their job.
  * This REPOSITORY ("ECMAS-Snips-Clips-N-Configs") contains a document called
  * "ANSI-Terminal-Color-Codes.ts" in the Character-Standards directory.
  * The arrays & objects contain the information pertaining to valid & invalid
  * character-codes.
  * */

const validTTYStyledStr = /\x1b\[(?![256])\d;(10|4)(?!8)\d;(9|3)(?!8)\d;$/

