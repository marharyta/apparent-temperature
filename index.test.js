const convertTemperature = require('./index');

test('0', () => {
    expect(convertTemperature({ t: 0 })).toBe(0);
});