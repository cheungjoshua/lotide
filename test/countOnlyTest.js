const assert = require("chai").assert;
const countOnly = require("../countOnly");

describe("#Count Only", () => {
  it("Return number count", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
    ];
    const itemsToCount = {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    };
    const result = countOnly(firstNames, itemsToCount);
    assert.deepEqual(result["Jason"], 1);
  });
  it("Return number count", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
    ];
    const itemsToCount = {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    };
    const result = countOnly(firstNames, itemsToCount);
    assert.deepEqual(result["Karima"], undefined);
  });
});
