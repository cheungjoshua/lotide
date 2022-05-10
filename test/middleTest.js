const assert = require("chai").assert;
const middle = require("../middle");

describe("#Middle", () => {
  it("return empty'[]' if input array length less than 3", () => {
    const result = middle([1, 2]);
    assert.strictEqual(result.length, 0);
  });
  it("return '[]' when input '[]' is empty ", () => {
    const result = middle([]);
    assert.strictEqual(result.length, 0);
  });
  it("return the middle of the array", () => {
    const result = middle([1, 2, 3]);
    assert.strictEqual(result[0], 2);
  });
  it("return the 2 middle value of the array is even number", () => {
    const result = middle([1, 2, 3, 4]);
    assert.deepEqual(result, [2, 3]);
  });
});
