const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require('./script');

describe('capitalize function', () => {
  test('should capitalize the first letter of a word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('should return an empty string if input is empty', () => {
    expect(capitalize('')).toBe('');
  });

  test('should return the same string if the first character is already capitalized', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  test('should capitalize the first letter of a multi-word string', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });

  test('should handle a string with special characters at the beginning', () => {
    expect(capitalize('#hello')).toBe('#hello');
  });

  test('should handle a string with leading whitespace', () => {
    expect(capitalize('  hello')).toBe('  hello');
  });

  test('should handle a string with only one character', () => {
    expect(capitalize('a')).toBe('A');
  });

  test('should handle a string that is already capitalized', () => {
    expect(capitalize('A')).toBe('A');
  });

  test('should handle non-string input by returning the input unchanged', () => {
    expect(capitalize(null)).toBe(null);
    expect(capitalize(undefined)).toBe(undefined);
    expect(capitalize(123)).toBe(123);
  });
});

//  reverse a string

describe('reverseString function', () => {
  test('should reverse a regular string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('should return an empty string if input is empty', () => {
    expect(reverseString('')).toBe('');
  });

  test('should return the same character if the string has only one character', () => {
    expect(reverseString('a')).toBe('a');
  });

  test('should reverse a string with special characters', () => {
    expect(reverseString('!@#$%')).toBe('%$#@!');
  });

  test('should reverse a string with numbers', () => {
    expect(reverseString('12345')).toBe('54321');
  });

  test('should reverse a string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  test('should handle a string with leading and trailing whitespace', () => {
    expect(reverseString('  hello  ')).toBe('  olleh  ');
  });

  test('should handle non-string input by returning the input unchanged', () => {
    expect(reverseString(null)).toBe(null);
    expect(reverseString(undefined)).toBe(undefined);
    expect(reverseString(12345)).toBe(12345);
  });

  test('should reverse a string with mixed case letters', () => {
    expect(reverseString('HeLLo')).toBe('oLLeH');
  });
});

//  caclulate

describe('Calculator', () => {
  describe('add', () => {
    test('should return the sum of two positive numbers', () => {
      expect(calculator.add(1, 2)).toBe(3);
    });

    test('should return the sum of two negative numbers', () => {
      expect(calculator.add(-1, -2)).toBe(-3);
    });

    test('should return the sum of a positive and a negative number', () => {
      expect(calculator.add(1, -2)).toBe(-1);
    });

    test('should return the sum of a number and zero', () => {
      expect(calculator.add(1, 0)).toBe(1);
    });
  });

  describe('subtract', () => {
    test('should return the difference of two positive numbers', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('should return the difference of two negative numbers', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });

    test('should return the difference of a positive and a negative number', () => {
      expect(calculator.subtract(5, -3)).toBe(8);
    });

    test('should return the difference of a number and zero', () => {
      expect(calculator.subtract(5, 0)).toBe(5);
    });
  });

  describe('multiply', () => {
    test('should return the product of two positive numbers', () => {
      expect(calculator.multiply(3, 4)).toBe(12);
    });

    test('should return the product of two negative numbers', () => {
      expect(calculator.multiply(-3, -4)).toBe(12);
    });

    test('should return the product of a positive and a negative number', () => {
      expect(calculator.multiply(3, -4)).toBe(-12);
    });

    test('should return zero when multiplying by zero', () => {
      expect(calculator.multiply(3, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    test('should return the quotient of two positive numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('should return the quotient of two negative numbers', () => {
      expect(calculator.divide(-10, -2)).toBe(5);
    });

    test('should return the quotient of a positive and a negative number', () => {
      expect(calculator.divide(10, -2)).toBe(-5);
    });

    test('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('should return zero when zero is divided by a number', () => {
      expect(calculator.divide(0, 5)).toBe(0);
    });
  });
});

// Ceaser Cipher

describe('caesarCipher function', () => {
  test('should shift letters correctly with a positive shift', () => {
    expect(caesarCipher('hello', 3)).toBe('khoor');
  });

  test('should shift letters correctly with a negative shift', () => {
    expect(caesarCipher('khoor', -3)).toBe('hello');
  });

  test('should wrap around from z to a with a positive shift', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });

  test('should wrap around from a to z with a negative shift', () => {
    expect(caesarCipher('abc', -3)).toBe('xyz');
  });

  test('should handle uppercase letters correctly', () => {
    expect(caesarCipher('Hello', 3)).toBe('Khoor');
  });

  test('should keep non-alphabetic characters unchanged', () => {
    expect(caesarCipher('hello, world!', 3)).toBe('khoor, zruog!');
  });

  test('should return the same string if the shift is zero', () => {
    expect(caesarCipher('hello', 0)).toBe('hello');
  });

  test('should return the same string if the shift is a multiple of 26', () => {
    expect(caesarCipher('hello', 26)).toBe('hello');
    expect(caesarCipher('hello', -26)).toBe('hello');
  });

  test('should handle large positive shift values correctly', () => {
    expect(caesarCipher('hello', 29)).toBe('khoor'); // Equivalent to a shift of 3
  });

  test('should handle large negative shift values correctly', () => {
    expect(caesarCipher('khoor', -29)).toBe('hello'); // Equivalent to a shift of -3
  });

  test('should handle an empty string', () => {
    expect(caesarCipher('', 3)).toBe('');
  });
});

// analyze Array

describe('analyzeArray', () => {
  test('should return correct average, min, max, and length for a positive number array', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = analyzeArray(numbers);

    expect(result).toEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    });
  });

  test('should handle an array with negative and positive numbers', () => {
    const numbers = [-10, 0, 10, 20];
    const result = analyzeArray(numbers);

    expect(result).toEqual({
      average: 5,
      min: -10,
      max: 20,
      length: 4,
    });
  });

  test('should handle an array with a single number', () => {
    const numbers = [42];
    const result = analyzeArray(numbers);

    expect(result).toEqual({
      average: 42,
      min: 42,
      max: 42,
      length: 1,
    });
  });

  test('should handle an array with all the same numbers', () => {
    const numbers = [5, 5, 5, 5, 5];
    const result = analyzeArray(numbers);

    expect(result).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 5,
    });
  });

  test('should return NaN for average and min/max as Infinity/-Infinity for an empty array', () => {
    const numbers = [];
    const result = analyzeArray(numbers);

    expect(result).toEqual({
      average: NaN,
      min: Infinity,
      max: -Infinity,
      length: 0,
    });
  });
});
