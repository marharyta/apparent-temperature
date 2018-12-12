const calculateHeatStressIndex = require("../src/apparentTemperature/heatStressIndex");
const math = require("mathjs");

xtest("Calculate heat stress index 1", () => {
  const t = 25;
  const v = 0.5;
  const w = 100;
  expect(math.round(calculateHeatStressIndex(w, t, v), 0)).toBe(-1);
});

xtest("Calculate heat stress index 2", () => {
  const t = 28;
  const v = 0.5;
  const w = 100;
  expect(math.round(calculateHeatStressIndex(w, t, v), 0)).toBe(-1);
});

xtest("Calculate heat stress index 3", () => {
  const t = 38;
  const v = 1;
  const w = 120;
  expect(math.round(calculateHeatStressIndex(w, t, v), 0)).toBe(0);
});

xtest("Calculate heat stress index 4", () => {
  const t = 35;
  const v = 2;
  const w = 100;
  expect(math.round(calculateHeatStressIndex(w, t, v), 0)).toBe(0);
});

xtest("Calculate heat stress index 5", () => {
  const t = 40;
  const v = 0.5;
  const w = 100;
  expect(math.round(calculateHeatStressIndex(w, t, v), 0)).toBe(0);
});
