const calculateWetBulb = require("../src/utils/wetBulb");
const math = require("mathjs");

test("calculate wet bulb ", () => {
  expect(calculateWetBulb(20, 50)).toBe(13.7);
});
