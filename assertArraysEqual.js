const eqArrays = function (arrA, arrB) {
  arrA = JSON.stringify(arrA);
  arrB = JSON.stringify(arrB);
  if (arrA === arrB) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function (item1, item2) {
  if (eqArrays(item1, item2)) {
    // ADD the eqArray here?
    console.log(`✅✅✅ Assertion Passed: ${item1} === ${item2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${item1} !== ${item2}`);
  }
};

assertArraysEqual("Bootcamp", "Bootcamp");
assertArraysEqual("Lighthouse Labs", "Bootcamp");
assertArraysEqual(1, 1);
assertArraysEqual(false, false);
assertArraysEqual(false, true);
