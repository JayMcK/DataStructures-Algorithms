const containsDuplicate = require("./containsDuplicate");

test("return true if any value appears at least twice in the inputted array. return false if every element is distinct", () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  expect(containsDuplicate([1, 1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  expect(containsDuplicate([1, 0, 4, 2, 8, 12, 5])).toBe(false);
});
