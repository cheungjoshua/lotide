const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#Equal Object", () => {
  it("return true if 2 object are same", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    const result = eqObjects(ab, ba);
    assert.strictEqual(result, true);
  });
  it("return false if 2 object are difference", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    const result = eqObjects(ab, abc);
    assert.strictEqual(result, false);
  });
  it("return true if 2 object same and with difference index order", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    const result = eqObjects(cd, dc);
    assert.strictEqual(result, true);
  });
});
