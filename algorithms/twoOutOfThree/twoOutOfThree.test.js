const twoOutOfThree = require("./twoOutOfThree");

describe("Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.", () => {
  test("return [3,2] given input of ([2,2,3,2], [2,3], [3])", () => {
    expect(twoOutOfThree([1, 1, 3, 2], [2, 3], [3])).toEqual([2, 3]);
  });
  test("return [] given input of ([1,2,2], [4,3,3], [5])", () => {
    expect(twoOutOfThree([1, 2, 2], [4, 3, 3], [5])).toEqual([]);
  });
});
