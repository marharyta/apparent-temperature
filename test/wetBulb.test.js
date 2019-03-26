const calculateWetBulb = require("../src/utils/wetBulb");
const math = require("mathjs");
const calculateDewPoint = require("../src/utils/dewPoint");

test("calculate wet bulb ", () => {
  expect(calculateWetBulb(20, 50)).toBe(13.7);
});

test("wet bulb is between DBT and DPT ", () => {
  const dpt = calculateDewPoint(20, 50);
  // expect(calculateWetBulb(20, 50)).toBe(0);

  // should not be less then DPT
  expect(calculateWetBulb(20, 50)).not.toBeLessThan(dpt);
  expect(calculateWetBulb(20, 50)).toBeGreaterThan(dpt);
  expect(dpt).toBeLessThan(calculateWetBulb(20, 50));

  // should not be greater then DBT
});

test("test wet bulb with 37,5 temp ", () => {
  // http://www.interhatch.com/files/document/243/1493808193_Temperatures.pdf

  const test1 = {
    temp: 37.5
  };
  expect(calculateWetBulb(36, 15)).toBe(28.1);
});
