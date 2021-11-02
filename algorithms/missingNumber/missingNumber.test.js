const missingNumber = require("./missingNumber");

describe("return the only number in the range that is missing from the array", () => {
  test("return 2 for [3,0,1]", () => {
    expect(missingNumber([3, 0, 1])).toBe(2);
  });
  test("return 5 for [4,0,1,3,2", () => {
    expect(missingNumber([4, 0, 1, 3, 2])).toBe(5);
  });
});
