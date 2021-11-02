const twoArrays = require("./twoArrays");

describe("Given two integer arrays, return an array of their intersection", () => {
  test("two arrays with 2 intersecting integers to return these two digits in an array", () => {
    expect(twoArrays([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9, 4]);
  });
});
