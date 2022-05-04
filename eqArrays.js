const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
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

console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
