const reverseString = require("../reverseString");

test("reverse aaa", () => {
  expect(reverseString("aaa")).toBe("aaa");
});

test("reverse abc", () => {
  expect(reverseString("abc")).toBe("cba");
});
