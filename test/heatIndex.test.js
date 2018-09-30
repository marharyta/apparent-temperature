const calculateHeatIndex = require('../apparentTemperature/heatIndex');
const math = require('mathjs');

//const test = { t: 0, windSpeed: 20 };

test('Calculate heat index 1', () => {
    const temp = 80;
    const humidity = 70;
    expect(math.round(calculateHeatIndex(temp, humidity), 0)).toBe(83);
});

test('Calculate heat index 2', () => {
    const temp = 90;
    const humidity = 100;
    expect(math.round(calculateHeatIndex(temp, humidity), 0)).toBe(132);
});

test('Calculate heat index 3', () => {
    const temp = 40;
    const humidity = 100;
    expect(math.round(calculateHeatIndex(temp, humidity), 0)).toBe(40);
});

test('Calculate heat index 2', () => {
    const temp = 20;
    const humidity = 100;
    expect(math.round(calculateHeatIndex(temp, humidity), 0)).toBe(20);
});

test('Calculate heat index 2', () => {
    const temp = 120;
    const humidity = 4;
    expect(math.round(calculateHeatIndex(temp, humidity), 0)).toBe(109);
});

test('Calculate heat index 2', () => {
    const temp = 80;
    const humidity = -5;
    expect(() => calculateHeatIndex(temp, humidity)).toThrow();
});