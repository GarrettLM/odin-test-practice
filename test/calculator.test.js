const calculator = require("../calculator");

test("Add 0", () => {
  expect(calculator.add(1, 0)).toBe(1);
});

test("Add 1", () => {
  expect(calculator.add(20, 1)).toBe(21);
});

test("Add -32", () => {
  expect(calculator.add(20, -32)).toBe(-12);
});
