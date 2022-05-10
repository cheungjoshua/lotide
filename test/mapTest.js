const assert = require("chai").assert;
const map = require("../map");

describe("#map", () => {
  it("return first char of the string in array", () => {
    const findWaldo = ["Alice", "Bob", "Waldo", "Winston"];
    const result = map(findWaldo, (word) => word[0]);
    assert.deepEqual(result, ["A", "B", "W", "W"]);
  });
  it("return first char of the string in array", () => {
    const words = ["ground", "control", "to", "major", "tom"];

    const result = map(words, (word) => word[0]);
    assert.deepEqual(result, ["g", "c", "t", "m", "t"]);
  });
});
