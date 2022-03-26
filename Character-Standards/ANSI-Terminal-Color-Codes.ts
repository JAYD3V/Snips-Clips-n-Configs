const vldColors = [
    'black', 'red', 'green', 'yellow', 'blue', 'magenta',
    'cyan', 'white', 'black+', 'red+', 'green+', 'blue+',
    'yellow+', 'magenta+', 'cyan+', 'white+'
];

const vldStyles = [
    'bold', 'italic', 'underline', 'invert', 'erase', 'strikethrough'
];

const fgColors = {
  white: 30,
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  cyan: 35,
  magenta: 36,
  black: 37,
  resetFgColor: 39,
}

const bgColors = {
  white: 40,
  red: 41,
  green: 42,
  yellow: 43,
  blue: 44,
  cyan: 45,
  magenta: 46,
  black: 47,
  resetFgColor: 49,
}

const styleCodes= {
  defaultStyle: 0,
  bold: 1,
  italic: 3,
  underline: 4,
  invertText: 7,
  eraseText: 8,
  strikeThrough: 9,
}

function colorByName(color: string) {
  switch(color.trim().toLowerCase()) {
    case 'black':
      return 30;
    case 'red':
      return 31;
    case 'green':
      return 32;
    case 'yellow':
      return 33;
    case 'blue':
      return 34;
    case 'magenta':
      return 35;
    case 'cyan':
      return 36;
    case 'white':
      return 37;
    case 'black+':
      return 30;
    case 'red+':
      return 31;
    case 'green+':
      return 32;
    case 'yellow+':
      return 33;
    case 'blue+':
      return 34;
    case 'magenta+':
      return 35;
    case 'cyan+':
      return 36;
    case 'white+':
      return 37;
    default:
      return 39; // Sets the terminals output fg color to its default value.
  }
}

function styleByName(testStyle: string) {
  switch(testStyle.trim().toLowerCase()) {
    case 'default':
      return 0;
    case 'bold':
      return 1;
    case 'italic':
      return 3;
    case 'underline':
      return 4;
    case 'invert':
      return 7;
    case 'erase':
      return 8;
    case 'strikethrough':
      return 9;
    default:
      return 0;
  }
}
