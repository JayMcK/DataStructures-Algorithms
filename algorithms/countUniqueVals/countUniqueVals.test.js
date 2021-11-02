const countUniqueVals = require("./countUniqueVals");

describe("counting the unique values in the inputted sorted array", () => {
  test("when correct number of unique values in inputted array", () => {
    expect(countUniqueVals([1, 1, 1, 1, 1, 1, 2])).toBe(2);
    expect(countUniqueVals([1, 2, 3, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
    expect(countUniqueVals([])).toBe(0);
    expect(countUniqueVals([-2, -1, -1, 0, 1])).toBe(4);
  });
});
