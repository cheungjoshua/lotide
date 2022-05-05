const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const eqArrays = function (arrA, arrB) {
  arrA = JSON.stringify(arrA);
  arrB = JSON.stringify(arrB);
  if (arrA === arrB) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    // ADD the eqArray here?
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const results1 = map(words, (word) => word[0]);
console.log(results1);

const findWaldo = ["Alice", "Bob", "Waldo", "Winston"];
const waldoFound = map(findWaldo, (word) => word[0]);
console.log(waldoFound);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(waldoFound, ["A", "B", "W", "W"]);
