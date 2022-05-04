const eqArrays = function (arrA, arrB) {
  arrA = JSON.stringify(arrA);
  arrB = JSON.stringify(arrB);
  if (arrA === arrB) {
    return true;
  } else {
    return false;
  }
};

const without = function (source, unwant) {
  let cleanArr = source.filter((el) => !unwant.includes(el));
  return cleanArr;
};

const assertArraysEqual = function (item1, item2) {
  if (eqArrays(item1, item2)) {
    // ADD the eqArray here?
    console.log(`✅✅✅ Assertion Passed: ${item1} === ${item2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${item1} !== ${item2}`);
  }
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
