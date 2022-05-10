const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArray", () => {
  it("return true if 2 array are same", () => {
    const result = eqArrays([1, 2, 3], [1, 2, 3]);
    assert.strictEqual(result, true);
  });
  it("return false if not same ", () => {
    const result = eqArrays(["1", "2", "3"], ["1", "2", 3]);
    assert.strictEqual(result, false);
  });
});
