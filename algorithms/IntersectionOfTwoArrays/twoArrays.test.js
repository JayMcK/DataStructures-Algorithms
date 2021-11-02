const twoArrays = require("./twoArrays");

describe("Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order", () => {
  test("two arrays with 2 intersecting integers to return these two digits in an array", () => {
    expect(twoArrays([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9, 4]);
  });
});
