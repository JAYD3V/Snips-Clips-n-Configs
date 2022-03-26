/* eslint-disable */

// THIS IS AN IMPORTANT NOTE, AND OFTEN PRESUADES INSIGHTFULL DEVELOPERS TO
// REACH FOR NULL UNDER CERTAIN CIRCUMSTANCES, SUCH AS SITUATIONS WHERE AN
// ARGUMENT NEEDS TO BE SET, BUT THE DEVELOPER WANTS TO CLARIFY TO THE PROGRAM
// THAT THEY ARE NOT USING THAT ARGUMENT IN A PARTICULAR FUNCTION CALL. BY
// SETTING THE VALUE TO NULL, RATHER THAN UNDEFINED, THEY CAN ENSURE THAT IF
// AN ERRONEOUS ASSIGNMENT TAKES PLACE, AND A VALUE IS PASSED TO THE VARIABLE
// AN ERROR WILL OCCUR, WHERE AS WITH UNDEFINED, NO ERROR IS THROWN.

// TODO: Ensure the excerpt above (authored by JAYD3V (me)) is 100% accurate

// CHECK THIS OUT:
null = 1; // throws error
undefined = 1; // no error

// ALPHA VARIABLE -> left undefined
let alpha;

alpha == null; // true
alpha == undefined; // true
alpha === null; // false
alpha === undefined; // true

typeof alpha; // 'undefined'


// BETA VARIABLE -> null
const beta = null;

beta == null; // true
beta == undefined; // true
beta === null; // true
beta === undefined; // false

typeof y; // 'object'


// APPLE OBJECT's DEFINITION:
const apple = {
  gravenstien: null,
  grannySmith: undefined
};

// APPLE -> GRAVENSTIEN
apple.gravenstien == null; // true
apple.gravenstien == undefined; // true
apple.gravenstien === null; // true
apple.gravenstien === undefined; // false

// APPLE -> GRANNY-SMITH
apple.grannySmith == null; // true
apple.grannySmith == undefined; // true
apple.grannySmith === null; // false
apple.grannySmith === undefined; // true



