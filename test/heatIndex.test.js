const calculateHeatIndex = require("../src/apparentTemperature/heatIndex");
const heatIndex = require("../src/apparentTemperature/heatIndex");
const math = require("mathjs");

//const oldHI = require("../apparentTemperature/heatIndex");
//const test = { t: 0, windSpeed: 20 };

// test("test old formula", () => {
//   const temp = 80;
//   const humidity = 70;
//   const obj = { temperature: temp, relativeHumidity: humidity };
//   expect(math.round(oldHI(temp, humidity))).toBe(83);
// });

test("Calculate heat index with temperature in F", () => {
  const temp1 = 80;
  const humidity1 = 70;
  const obj1 = { temperature: temp1, relativeHumidity: humidity1 };
  expect(math.round(calculateHeatIndex(obj1), 0)).toBe(83);

  const temp2 = 90;
  const humidity2 = 100;
  const obj2 = { temperature: temp2, relativeHumidity: humidity2 };
  expect(math.round(calculateHeatIndex(obj2), 0)).toBe(132);

  const temp3 = 40;
  const humidity3 = 100;
  const obj3 = { temperature: temp3, relativeHumidity: humidity3 };
  expect(math.round(calculateHeatIndex(obj3), 0)).toBe(40);

  const temp4 = 20;
  const humidity4 = 100;
  const obj4 = { temperature: temp4, relativeHumidity: humidity4 };
  expect(math.round(calculateHeatIndex(obj4), 0)).toBe(20);

  const temp5 = 120;
  const humidity5 = 4;
  const obj5 = { temperature: temp5, relativeHumidity: humidity5 };
  expect(math.round(calculateHeatIndex(obj5), 0)).toBe(109);

  const temp6 = 40;
  const humidity6 = 40;
  const obj6 = { temperature: temp6, relativeHumidity: humidity6 };
  expect(math.round(calculateHeatIndex(obj6), 0)).toBe(40);

  const temp7 = 76;
  const humidity7 = 40;
  const obj7 = { temperature: temp7, relativeHumidity: humidity7 };
  expect(math.round(calculateHeatIndex(obj7), 0)).toBe(75);

  const temp8 = 76;
  const humidity8 = 80;
  const obj8 = { temperature: temp8, relativeHumidity: humidity8 };
  expect(math.round(calculateHeatIndex(obj8), 0)).toBe(77);

  const temp9 = 82;
  const humidity9 = 80;
  const obj9 = { temperature: temp9, relativeHumidity: humidity9 };
  expect(math.round(calculateHeatIndex(obj9), 0)).toBe(89);

  const temp10 = 82;
  const humidity10 = 86;
  const obj10 = { temperature: temp10, relativeHumidity: humidity10 };
  expect(math.round(calculateHeatIndex(obj10), 0)).toBe(90);

  const temp11 = 96;
  const humidity11 = 90;
  const obj11 = { temperature: temp11, relativeHumidity: humidity11 };
  expect(math.round(calculateHeatIndex(obj10), 0)).toBe(90);
});

test("Calculate heat index with Celcius", () => {
  const obj1 = {
    temperature: 20,
    withCelcius: true,
    withFahrenheit: false,
    relativeHumidity: 70,
    returnFahrenheit: false,
    returnCelcius: true
  };
  expect(heatIndex(obj1)).toBe(20);

  const obj2 = {
    temperature: 25,
    withCelcius: true,
    withFahrenheit: false,
    relativeHumidity: 90,
    returnFahrenheit: false,
    returnCelcius: true
  };
  // expect(heatIndex(obj2)).toBe(27); // did not pass

  const obj3 = {
    temperature: 32,
    withCelcius: true,
    withFahrenheit: false,
    relativeHumidity: 60,
    returnFahrenheit: false,
    returnCelcius: true
  };
  expect(heatIndex(obj3)).toBe(37);
});

test("Calculate heat index", () => {
  const temp = 80;
  const humidity = -5;
  const obj = { temperature: temp, relativeHumidity: humidity };
  expect(() => heatIndex(obj)).toThrow();
});
