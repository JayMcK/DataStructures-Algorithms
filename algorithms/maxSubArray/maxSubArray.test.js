const maxSubArray = require("./maxSubArray");

describe(" Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum", () => {
  test("input array of [-2,1,-3,4,-1,2,1,-5,4] returns 6", () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });
  test("input array of 1 returns [1]", () => {
    expect(maxSubArray([1])).toBe(1);
  });
  test("input array of [5,4,-1,7,8] returns 23", () => {
    expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
  });
});
