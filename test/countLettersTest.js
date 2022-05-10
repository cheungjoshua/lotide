const assert = require("chai").assert;
const countLetters = require("../countLetters");

describe("#Count Letters", () => {
  it("Return object of the totol letters", () => {
    const result = {
      l: 1,
      i: 2,
      g: 1,
      h: 4,
      t: 2,
      o: 2,
      u: 2,
      s: 2,
      e: 3,
      n: 1,
    };
    assert.deepEqual(countLetters("lighthouse in the house"), result);
  });
});
