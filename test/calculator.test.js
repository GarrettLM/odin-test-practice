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

test("Subtract 0", () => {
  expect(calculator.subtract(10, 0)).toBe(10);
});

test("Subtract a smaller number", () => {
  expect(calculator.subtract(1024, 199)).toBe(825);
});

test("Subtract an equal number", () => {
  expect(calculator.subtract(42, 42)).toBe(0);
});

test("Subtract a larger number", () => {
  expect(calculator.subtract(244, 987)).toBe(-743);
});
