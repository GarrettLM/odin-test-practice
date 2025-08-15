const caesarCipher = require("../caesarcipher");

test("HeLLo 3", () => {
  expect(caesarCipher.encrypt("HeLLo", 3)).toBe("KhOOr");
});

test("HeLLo World! 3", () => {
  expect(caesarCipher.encrypt("HeLLo, World!", 3)).toBe("KhOOr, Zruog!");
});

test("0123456789 5", () => {
  expect(caesarCipher.encrypt("0123456789", 5)).toBe("0123456789");
});