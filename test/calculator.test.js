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

test("Multiply by 0", () => {
  expect(calculator.multiply(123, 0)).toBe(0);
});

test("Multiply by 1", () => {
  expect(calculator.multiply(1, 321)).toBe(321);
});

test("Multiply two positive numbers", () => {
  expect(calculator.multiply(42, 10)).toBe(420);
});

test("Multiply a positive number by a negative", () => {
  expect(calculator.multiply(7, -3)).toBe(-21);
});

test("Multiply two negative numbers", () => {
  expect(calculator.multiply(-77, -2)).toBe(154);
});
