const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  let result = {};
  for (const char of string) {
    if (char !== " ") {
      if (!result[char]) {
        result[char] = 0;
      }
      result[char] += 1;
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));
