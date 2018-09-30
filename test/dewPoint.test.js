const calculateDewPoint = require('../utils/dewPoint');
const math = require('mathjs');



test('calculate dew point ', () => {
    // const temperatureAndWind = { t: 0, windSpeed: 20 };
    expect(calculateDewPoint(15, 50)).toBe(4.66);
});

test('calculate dew point ', () => {
    // const temperatureAndWind = { t: 0, windSpeed: 20 };
    expect(calculateDewPoint(15, 20)).toBe(0);
});