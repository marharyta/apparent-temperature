const calculateHumidex = require('../apparentTemperature/humindex');
const math = require('mathjs');

//const test = { t: 0, windSpeed: 20 };

test('Calculate heat index 1', () => {
    const temp = 19;
    const dewPoint = 12;
    // const obj = { temperature: temp, relativeHumidity: humidity };
    expect(math.round(calculateHumidex(temp, dewPoint), 0)).toBe(21);
});