const twoArrays = require("./twoArrays");

test("Given two integer arrays, return an array of their intersection", () => {
  expect(twoArrays([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9, 4]);
});
