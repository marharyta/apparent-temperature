const convertTemperature = require('./temperatureConvertion');

test('Convert temperature when no values are provided', () => {
    const onlyTemperature = { t: 0 };
    expect(convertTemperature(onlyTemperature)).toBe(0);
});

test('Convert from Celcius to Kelvin', () => {
    // T(K) = T(°C) + 273.15
    const tempCelcius = 18;
    const tempKelvin = tempCelcius + 273.15;
    const tempData = { t: tempCelcius, fromCelcius: true, toKelvin: true };
    expect(convertTemperature(tempData)).toBe(tempKelvin);
});
test('Convert from Celcius to Fahrenheit', () => {
    // check weather these formulas return the same result
    // T(°F) = T(°C) × 9/5 + 32
    // T(°F) = T(°C) × 1.8 + 32
    const tempCelcius = 32;
    const tempFahrenheitFirst = tempCelcius * 9 / 5 + 32;
    const tempFahrenheitSecond = tempCelcius * 1.8 + 32;
    const tempData = { t: tempCelcius, fromCelcius: true, toFahrenheit: true };
    expect(convertTemperature(tempData)).toBe(tempFahrenheitFirst);
    expect(convertTemperature(tempData)).toBe(tempFahrenheitSecond);
    expect(tempFahrenheitFirst).toBe(tempFahrenheitSecond);
});
test('Convert from Celcius to Celcius', () => {
    const tempCelcius = 32;
    const tempData = { t: tempCelcius, fromCelcius: true, toCelcius: true };
    expect(convertTemperature(tempData)).toBe(tempCelcius);
});
test('Convert from Kelvin to Celcius', () => {
    //T(°C) = T(K) - 273.15
    const tempKelvin = 32;
    const tempCelcius = tempKelvin - 273.15;
    const tempData = { t: tempKelvin, fromKelvin: true, toCelcius: true };
    expect(convertTemperature(tempData)).toBe(tempCelcius);
});
test('Convert from Kelvin to Fahrenheit', () => {
    //T(°F) = T(K) × 9/5 - 459.67
    const tempKelvin = 200;
    const tempFahrenheit = tempKelvin * 9 / 5 - 459.67;
    const tempData = { t: tempKelvin, fromKelvin: true, toFahrenheit: true };
    expect(convertTemperature(tempData)).toBe(tempFahrenheit);
});
test('Convert from Kelvin to Kelvin', () => {
    const tempKelvin = 200;
    const tempData = { t: tempKelvin, fromKelvin: true, toKelvin: true };
    expect(convertTemperature(tempData)).toBe(tempKelvin);
});

test('Convert from Fahrenheit to Celcius', () => {
    //T(°C) = (T(°F) - 32) × 5/9
    //T(°C) = (T(°F) - 32) / (9/5)
    //T(°C) = (T(°F) - 32) / 1.8
    const tempFahrenheit = 32;
    const tempCelciusFirst = (tempFahrenheit - 32) * 5 / 9;
    const tempCelciusSec = (tempFahrenheit - 32) / (9 / 5);
    const tempCelciusThird = (tempFahrenheit - 32) / 1.8;
    const tempData = { t: tempFahrenheit, fromFahrenheit: true, toCelcius: true };
    expect(convertTemperature(tempData)).toBe(tempCelciusFirst);
    expect(convertTemperature(tempData)).toBe(tempCelciusSec);
    expect(convertTemperature(tempData)).toBe(tempCelciusThird);
});

test('Convert from Fahrenheit to Kelvin', () => {
    //T(K) = (T(°F) + 459.67)× 5/9
    const tempFahrenheit = 67;
    const tempKelvin = (tempFahrenheit + 459.67) * 5 / 9;
    const tempData = { t: tempFahrenheit, fromFahrenheit: true, toKelvin: true };
    expect(convertTemperature(tempData)).toBe(tempKelvin);
});

test('Convert from Fahrenheit to Fahrenheit', () => {
    const tempFahrenheit = 200;
    const tempData = { t: tempFahrenheit, fromFahrenheit: true, toFahrenheit: true };
    expect(convertTemperature(tempData)).toBe(tempFahrenheit);
});