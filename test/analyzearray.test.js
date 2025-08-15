const analyzeArray = require("../analyzearray");

test("Analyze min [1,8,3,4,2,6]", () => {
    expect(analyzeArray.analyzeMin([1,8,3,4,2,6])).toBe(1);
});

test("Analyze [1,8,3,4,2,6]", () => {
  expect(analyzeArray.analyze([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});