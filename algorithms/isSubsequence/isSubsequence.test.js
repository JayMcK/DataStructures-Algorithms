const isSubsequence = require("./isSubsequence");

describe("find the longest subsequence of unique characters in a string", () => {
  test("hellothere returns 6", () => {
    expect(isSubsequence("hellothere")).toBe(6);
  });
  test("lookitran returns 7", () => {
    expect(isSubsequence("lookitran")).toBe(7);
  });
});
