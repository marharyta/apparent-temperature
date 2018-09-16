const newWindChill = require('./apparentTemperature/windChill');
const math = require('mathjs');

test('Calculate wind Chill', () => {
    const onlyTemperature = { t: 0, windSpeed: 20 };
    expect(math.round(newWindChill(onlyTemperature), 10)).toBe(math.round(-5.242223279780932, 10));
});

test('Input empty object', () => {
    const onlyTemperature = {};
    expect(newWindChill(onlyTemperature)).toThrow();
});