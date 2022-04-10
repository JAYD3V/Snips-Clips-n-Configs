
/**
* This is a simple, yet effective & effeciant way to test if an input string is valid
*
* */


let dynamicRequirement = 'Anything you need it to be';

const re = new RegExp(`${dynamicRequirement}`);
const str = 'the input to test';

function testInput(re:RegExp, str:string) {
  return re.test(str);
}
