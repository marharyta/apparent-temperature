const newWindChill = require('../apparentTemperature/windChill');
const math = require('mathjs');

//const test = { t: 0, windSpeed: 20 };

test('Calculate wind Chill', () => {
    const temperatureAndWind = { t: 0, windSpeed: 20 };
    expect(math.round(newWindChill(temperatureAndWind), 10)).toBe(math.round(-5.242223279780932, 10));
});

test('Input empty object', () => {
    const emptyObject = {};
    expect(() => newWindChill(emptyObject)).toThrow();
});

test('Input too high temperature', () => {
    const hightTemperature = {t: 25, windSpeed: 20};
    expect(() => newWindChill(hightTemperature)).toThrow(RangeError);
});

test('Input too low wind speed', () => {
    const lowWindSpeed = {t: 25, windSpeed: 2};
    expect(() => newWindChill(lowWindSpeed)).toThrow(RangeError);
});


test('Calculate wind chill for Fahrenheit', () => {
    const fahrenheit = {t: 40, windSpeed: 15, mph: true, withFahrenheit: true, returnFahrenheit: true};
    expect(math.round(newWindChill(fahrenheit), 0)).toBe(32);
});