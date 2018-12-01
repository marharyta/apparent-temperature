const calculateDewPoint = require("../utils/dewPoint");
const math = require("mathjs");

// for the test values, check table: https://www.mrfixitbali.com/images/articleimages/dew-point-chart-full.pdf

test("calculate dew point at absolute humidity and temperature above zero ", () => {
  expect(calculateDewPoint(5, 100)).toBe(5);
  expect(calculateDewPoint(15, 100)).toBe(15);
  expect(calculateDewPoint(20, 100)).toBe(20);
  expect(calculateDewPoint(27, 100)).toBe(27);
  expect(calculateDewPoint(30, 100)).toBe(30);
  expect(calculateDewPoint(35.7, 100)).toBe(35.7);
  expect(calculateDewPoint(40, 100)).toBe(40);
  expect(calculateDewPoint(50, 100)).toBe(50);
  expect(() => calculateDewPoint(60, 100)).toThrow(RangeError);
});

test("calculate dew point at absolute humidity and temperature below zero ", () => {
  expect(calculateDewPoint(-5, 100)).toBe(-5);
  expect(calculateDewPoint(-20, 100)).toBe(-20);
  expect(calculateDewPoint(-30, 100)).toBe(-30);
  expect(calculateDewPoint(-35.7, 100)).toBe(-35.7);
  expect(calculateDewPoint(-40, 100)).toBe(-40);
  expect(() => calculateDewPoint(-50, 100)).toThrow(RangeError);
  expect(() => calculateDewPoint(-60, 100)).toThrow(RangeError);
});

test("calculate dew point with temperature 15C and humidity above 50%", () => {
  expect(calculateDewPoint(15, 55)).toBe(6.03);
  expect(calculateDewPoint(15, 60)).toBe(7.3);
  expect(calculateDewPoint(15, 65)).toBe(8.47);
  expect(calculateDewPoint(15, 70)).toBe(9.57);
  expect(calculateDewPoint(15, 75)).toBe(10.6);
  expect(calculateDewPoint(15, 90)).toBe(13.37);
  expect(calculateDewPoint(15, 85)).toBe(12.5);
});

test("calculate dew point with temperature 21 and humidity below 50%", () => {
  expect(calculateDewPoint(21, 45)).toBeCloseTo(8.61, 1);
  expect(calculateDewPoint(21, 40)).toBeCloseTo(6.88, 1);
  expect(calculateDewPoint(21, 35)).toBeCloseTo(4.94, 1);
  expect(calculateDewPoint(21, 30)).toBeCloseTo(2.75, 1);
});
