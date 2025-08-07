const capitalize = require("../capitalize");

test("capitalizes I", () => {
  expect(capitalize("i")).toBe("I");
});

test("capitalizes aardvark", () => {
  expect(capitalize("aardvark")).toBe("Aardvark");
});
