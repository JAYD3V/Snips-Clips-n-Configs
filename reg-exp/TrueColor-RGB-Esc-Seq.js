/**
 * @file "./RegX/TrueColor-RGB-Esc-Seq.js"
 * NOTES:
 *   -
 * */

/**
 * ### `regex.test(strToTest)`
 * **Test for "if a string is", rather than "if a a string contains".**
 *
 * The regex pattern RGBcontrolSeq tests whether or not a string **IS** a valid control sequence that  setting the foreground or background fo if the pattern meets the following format description.
 * @returns `true` when tested against a string that is an unescaped **"24-bit TrueColor Control Sequence"**. (Non-global),
 * @JAYD3V
 * @example
 *
 *   const regxRGBcontrolSeq =
 *    /^((38;2;|48;2;)(2(5[0-5]|[0-4][0-9]);|(1[0-9][0-9]|[1-9]?[0-9]);){2}(?:2(5[0-5]|[0-4][0-9])m|(1[0-9][0-9]|[1-9]?[0-9])m))$/;
 *
 *    const str = "38;2;255;160;16m";
 *    const expected = true;
 *    const actual = regex.test(regxRGBcontrolSeq);
 *
 *    const result = (actual === expected)
 *      ? "\x1b[92mPASSED\x1b[0m"
 *      : "\x1b[91mFAILED\x1b[0m";
 *
 *    console.log(`\n  - Test Result: ${result}\n`)
 * */
const regxRGBcontrolSeq_fg_and_bg =
    /^((38|48)2;(2(5[0-5]|[0-4][0-9]);|(1[0-9][0-9]|[1-9]?[0-9]);){2}(?:2(5[0-5]|[0-4][0-9])m|(1[0-9][0-9]|[1-9]?[0-9])m))$/;

const regxRGBcontrolSeq_fg =
    /^(38;2;(2(5[0-5]|[0-4][0-9]);|(1[0-9][0-9]|[1-9]?[0-9]);){2}(?:2(5[0-5]|[0-4][0-9])m|(1[0-9][0-9]|[1-9]?[0-9])m))$/;

    const regxRGBcontrolSeq_fg =
    /^(48;2;(2(5[0-5]|[0-4][0-9]);|(1[0-9][0-9]|[1-9]?[0-9]);){2}(?:2(5[0-5]|[0-4][0-9])m|(1[0-9][0-9]|[1-9]?[0-9])m))$/;

const testGroup = [
    {
        sequence: "38;2;0;0;0m",
        expected: true,
        actual: null,
        status: "UNDETERMINED",
    },
    {
        sequence: "38;2;0;255;255m",
        expected: true,
        actual: null,
        status: "UNDETERMINED",
    },
    {
        sequence: "48;2;0;0;0m",
        expected: true,
        actual: null,
        status: "UNDETERMINED",
    },
    {
        sequence: "38;4;0;0;0m",
        expected: false,
        actual: null,
        status: "UNDETERMINED",
    },

];


testGroup.forEach((test, i) => {
    test.actual = regex.test(test.sequence);
    test.status = test.actual === test.expected
        ? "PASSED"
        : "FAILED";
    });


console.log(testGroup);
console.log("\n\n\nPRINTING COLOR TEST:\n");
console.log(colorTest);
console.log("\n\n");
