const caesarCipher = require("../caesarcipher");

test("HeLLo 3", () => {
  expect(caesarCipher.encrypt("HeLLo", 3)).toBe("KhOOr");
});