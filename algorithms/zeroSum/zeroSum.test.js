const sumZero = require("./zeroSum");

describe("Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is zero. Return an array that includes both values that sum to zero or undefined if a pair does not exist.", () => {
  test("input of [-3, -2, -1, 0, 1, 4, 5] returns [-1,1]", () => {
    expect(sumZero([-3, -2, -1, 0, 1, 4, 5])).toEqual([-1, 1]);
  });
});
