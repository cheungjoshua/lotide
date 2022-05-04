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

const middle = function (array) {
  if (array.length < 3) {
    return [];
  }
  let mid = parseInt(array.length / 2);
  if (array.length % 2 !== 0) {
    return [array[mid]];
  } else {
    return [array[mid - 1], array[mid]];
  }
};

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
