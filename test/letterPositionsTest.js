const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("return array of position of the letter", () => {
    const result = letterPositions("hello").e;
    assert.deepEqual(result, [1]);
  });
});
