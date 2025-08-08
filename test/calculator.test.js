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

test("Divide by 1", () => {
  expect(calculator.divide(321, 1)).toBe(321);
});

test("Divide by positive factors", () => {
  expect(calculator.divide(64, 8)).toBe(8);
});

test("Divide by positive non-factors", () => {
  expect(calculator.divide(10, 3)).toBeCloseTo(3.3333);
});

test("Divide floating point numbers", () => {
  expect(calculator.divide(2.5, 2)).toBeCloseTo(1.25);
  expect(calculator.divide(6.9, 3.3)).toBeCloseTo(2.0909);
  expect(calculator.divide(10, 2.5)).toBe(4);
});

test("Divide 0 by any number", () => {
  expect(calculator.divide(0, 4)).toBe(0);
  expect(calculator.divide(0, 123142424)).toBe(0);
});

test("Divide by a larger number", () => {
  expect(calculator.divide(2, 4)).toBeCloseTo(0.5);
  expect(calculator.divide(1, 3)).toBeCloseTo(0.33);
});

test("Divide by a negative number", () => {
  expect(calculator.divide(3.9, -3)).toBeCloseTo(-1.3);
  expect(calculator.divide(-120, -20)).toBe(6);
  expect(calculator.divide(-10, 4)).toBeCloseTo(-2.5);
});

test("Divide by 0", () => {
  expect(calculator.divide(12543, 0)).toBe(Infinity);
  expect(calculator.divide(-12543, 0)).toBe(-Infinity);
  expect(calculator.divide(0, 0)).toBeNaN();
});
