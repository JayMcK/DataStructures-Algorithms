const commonChars = require("./commonChars");

describe("takes an array of strings and returns an array of all characters that appear in all strings - including duplicates", () => {
  test("return array of intersecting characters", () => {
    expect(commonChars(["cool", "lock", "cook"])).toEqual(["c", "o"]);
  });
});
