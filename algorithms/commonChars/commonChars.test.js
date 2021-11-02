const commonChars = require("./commonChars");

test("takes an array of strings and returns an array of all characters that appear in all strings - including duplicates", () => {
  expect(commonChars(["cool", "lock", "cook"])).toEqual(["c", "o"]);
});
