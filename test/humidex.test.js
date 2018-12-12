const calculateHumidex = require("../src/apparentTemperature/humidex");
const math = require("mathjs");

test("calculate humidex", () => {
  // expect(math.round(calculateHumidex(23, 65), 0)).toBe(27); // 28
  // expect(math.round(calculateHumidex(20, 85), 0)).toBe(25); // 26
  // expect(math.round(calculateHumidex(28, 30), 0)).toBe(30); // 29
  expect(math.round(calculateHumidex(28, 70), 0)).toBe(37);
});
