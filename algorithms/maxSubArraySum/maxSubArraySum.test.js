const maxSubArraySum = require("./maxSubArraySum");

describe("return should be the maximum sum of n consecutive elements in input array", () => {
  test("input of ([1,2,5,2,8,1,5], 2) should return 10", () => {
    expect(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
  });
  test("input of ([1,2,5,2,8,1,5], 4) should return 17", () => {
    expect(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
  });
  test("input of ([4,2,1,6], 1 ) should return 6", () => {
    expect(maxSubArraySum([4, 2, 1, 6], 1)).toBe(6);
  });
  test("input of ([4,2,1,6,2], 4 ) should return 13", () => {
    expect(maxSubArraySum([4, 2, 1, 6, 2], 4)).toBe(13);
  });
  test("input of ([], 4) should return null", () => {
    expect(maxSubArraySum([], 4)).toBe(null);
  });
});
