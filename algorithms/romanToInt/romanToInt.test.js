const romanToInt = require("./romanToInt");

describe("convert roman numeral to integer", () => {
  test("string III to return 3", () => {
    expect(romanToInt("III")).toBe(3);
  });
  test("string LVIII to return 58", () => {
    expect(romanToInt("LVIII")).toBe(58);
  });
});
