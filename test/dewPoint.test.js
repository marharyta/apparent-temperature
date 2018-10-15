const calculateDewPoint = require('../utils/dewPoint');
const math = require('mathjs');

// calculate dew point for all the table values, see table 

test('calculate dew point ', () => {
    expect(math.round(calculateDewPoint(15, 60), 2)).toBe(7.30);
});

test('calculate dew point ', () => {
    expect(math.round(calculateDewPoint(15, 55), 2)).toBe(6.03);
});

test('calculate dew point ', () => {
    expect(math.round(calculateDewPoint(15, 60), 2)).toBe(7.30);
});

test('calculate dew point ', () => {
    expect(math.round(calculateDewPoint(15, 65), 2)).toBe(8.47);
});

test('calculate dew point ', () => {
    expect(math.round(calculateDewPoint(15, 70), 2)).toBe(9.57);
});

test('calculate dew point ', () => {
    expect(math.round(calculateDewPoint(15, 75), 2)).toBe(10.60);
});

// outside table
// to check calculations http://www.dpcalc.org/
