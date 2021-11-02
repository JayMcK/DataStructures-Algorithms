const validAnagram = require("./validAnagram");

describe("Given two strings s and t, return true if t is an anagram of s, and false otherwise", () => {
  test("input of ('anagram', 'nagaram') returns true", () => {
    expect(validAnagram("anagram", "nagaram")).toBe(true);
  });
  test("input of ('rat', 'car') returns false", () => {
    expect(validAnagram("rat", "car")).toBe(false);
  });
});
