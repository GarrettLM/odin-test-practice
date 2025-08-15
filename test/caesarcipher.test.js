const caesarCipher = require("../caesarcipher");

test('Encrypt "HeLLo" 3', () => {
  expect(caesarCipher.encrypt("HeLLo", 3)).toBe("KhOOr");
});

test('Encrypt "HeLLo World!" 3', () => {
  expect(caesarCipher.encrypt("HeLLo, World!", 3)).toBe("KhOOr, Zruog!");
});

test('Encrypt "0123456789" 5', () => {
  expect(caesarCipher.encrypt("0123456789", 5)).toBe("0123456789");
});

test('Decrypt "KhOOr" 3', () => {
  expect(caesarCipher.decrypt("KhOOr", 3)).toBe("HeLLo");
});

test('Decrypt "KhOOr, Zruog!" 3', () => {
  expect(caesarCipher.decrypt("KhOOr, Zruog!", 3)).toBe("HeLLo, World!");
});

test('Decrypt "0123456789" 5', () => {
  expect(caesarCipher.decrypt("0123456789", 5)).toBe("0123456789");
});