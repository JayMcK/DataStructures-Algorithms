const twoSum = require("./twoSum");

describe("Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.", () => {
  test("input of ([2,7,11,15],9) returns [0,1]", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  test("input of ([3,2,4], 6) returns [1,2]", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
  test("input of ([3,3], 6) to return [0,1]", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
