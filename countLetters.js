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

module.exports = countLetters;
