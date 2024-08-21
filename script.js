const capitalize = (str) => {
  if (!str) return str;
  if (typeof str !== 'string') return str;
  return str[0].toUpperCase() + str.slice(1);
};

const reverseString = (str) => {
  if (typeof str !== 'string') return str;
  if (str.length <= 1) return str;
  return reverseString(str.slice(1)) + str[0];
};

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) throw new Error('Cannot divide by zero');
    return a / b;
  },
};

const caesarCipher = (str, shiftFactor = 3) => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    let characterCode = currentChar.charCodeAt(0); // 0 is optional

    if (currentChar >= 'A' && currentChar <= 'X') {
      let newCode = (characterCode - 65 + shiftFactor) % 26;
      if (newCode < 0) newCode += 26;
      result += String.fromCharCode(newCode + 65);
    } else if (currentChar >= 'a' && currentChar <= 'z') {
      let newCode = (characterCode - 97 + shiftFactor) % 26;
      if (newCode < 0) newCode += 26;
      result += String.fromCharCode(newCode + 97);
    } else {
      result += currentChar;
    }
  }
  return result;
};

const analyzeArray = (arr) => {
  let total = 0;
  let min = arr[0];
  let max = arr[0];
  let length = arr.length;

  if (arr.length < 1) {
    total = NaN;
    min = Infinity;
    max = -Infinity;
    length = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  total = total / arr.length;

  return {
    average: total,
    min: min,
    max: max,
    length: length,
  };
};

module.exports = {
  capitalize,
  calculator,
  reverseString,
  caesarCipher,
  analyzeArray,
};
