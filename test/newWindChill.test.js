/*
  Wind Chill and New Wind Chill
*/

const newWindChill = require("../src/apparentTemperature/newWindChill");
const math = require("mathjs");

//const test = { t: 0, windSpeed: 20 };

test("Calculate wind Chill", () => {
  const temperatureAndWind = { t: 0, windSpeed: 20 };
  expect(math.round(newWindChill(temperatureAndWind), 4)).toBe(
    math.round(-5.2422, 4)
  );
});

test("Calculate wind with table values", () => {
  const temperatureAndWind = { t: 0, windSpeed: 20 };
  expect(math.round(newWindChill(temperatureAndWind), 4)).toBe(
    math.round(-5.2422, 4)
  );

  const testTemp1 = {
    t: 5,
    withCelcius: true,
    withFahrenheit: false,
    windSpeed: 25,
    kmH: true,
    ms: false,
    mph: false,
    returnFahrenheit: false,
    returnCelcius: true
  };

  expect(math.round(newWindChill(testTemp1), 0)).toBe(1);
  const testTemp2 = {
    t: -5,
    withCelcius: true,
    withFahrenheit: false,
    windSpeed: 25,
    kmH: true,
    ms: false,
    mph: false,
    returnFahrenheit: false,
    returnCelcius: true
  };

  expect(math.round(newWindChill(testTemp2), 0)).toBe(-12);

  const testTemp3 = {
    t: -25,
    withCelcius: true,
    withFahrenheit: false,
    windSpeed: 25,
    kmH: true,
    ms: false,
    mph: false,
    returnFahrenheit: false,
    returnCelcius: true
  };

  expect(math.round(newWindChill(testTemp3), 0)).toBe(-38);

  const testTemp4 = {
    t: -25,
    withCelcius: true,
    withFahrenheit: false,
    windSpeed: 25,
    kmH: true,
    ms: false,
    mph: false,
    returnFahrenheit: false,
    returnCelcius: true
  };

  expect(math.round(newWindChill(testTemp4), 0)).toBe(-38);
});

test("Input empty object", () => {
  const emptyObject = {};
  expect(() => newWindChill(emptyObject)).toThrow();
});

test("Input too high temperature", () => {
  const hightTemperature = { t: 25, windSpeed: 20 };
  expect(() => newWindChill(hightTemperature)).toThrow(RangeError);
});

test("Input too low wind speed", () => {
  const lowWindSpeed = { t: 25, windSpeed: 2 };
  expect(() => newWindChill(lowWindSpeed)).toThrow(RangeError);
});

test("bdbdj", () => {
  const lowWindSpeed = {
    withCelcius: true,
    t: 0.82,
    windSpeed: 2.6,
    ms: false,
    returnCelcius: true
  };
  expect(() => newWindChill(lowWindSpeed)).toThrow(RangeError);
});

// test("Calculate wind chill for Fahrenheit", () => {
//   const fahrenheit = {
//     t: 40,
//     windSpeed: 15,
//     mph: true,
//     withFahrenheit: true,
//     returnFahrenheit: true
//   };
//   expect(math.round(newWindChill(fahrenheit), 0)).toBe(32);
// });
