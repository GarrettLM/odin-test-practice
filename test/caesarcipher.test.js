const caesarCipher = require("../caesarcipher");

test("HeLLo 3", () => {
  expect(caesarCipher.encrypt("HeLLo", 3)).toBe("KhOOr");
});

test("HeLLo World! 3", () => {
  expect(caesarCipher.encrypt("HeLLo, World!", 3)).toBe("KhOOr, Zruog");
});