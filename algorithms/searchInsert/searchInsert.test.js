const searchInsert = require("./searchInsert");

describe("given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order", () => {
  test("input of ([1,3,5,6], 5) returns 2", () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  });
  test("input of ([1,3,5,6], 2) returns 1", () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
  });
  test("input of ([1,3,5,6], 7) returns 4", () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
  });
  test("input of ([1,3,5,6], 0) returns 0", () => {
    expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
  });
  test("input of ([1], 0) returns 0", () => {
    expect(searchInsert([1], 0)).toBe(0);
  });
});
