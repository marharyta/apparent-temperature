# apparent-temperature

![enter image description here](https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Windy-512.png)

**Apparent temperature** or **Feels like** factor is perceived temperature derived from either a combination of temperature and wind, or temperature and humidity, or temperature and other natural factors for the indicated hour.

With apparent-temperature you can accurately calculate feels like factor using different formulas, such as New Wind Chill (an improved formula for wind Chill), Heat Index, Humidex, and Dew Point.
It allows you to easily convert between different temperature formats (currently supports Kelvin, Celcius, Fahrenheit).
apparent-temperature helps you easily calculate feels like factor wit accurate and tested formulas.

## Installation guide

`npm install apparent-temperature --save-dev`

or

`yarn add apparent-temperature --dev`

### Sample usage

```js
// require libary
const at = require("apparent-temperature");

// convert from 25 Celcius to Fahrenheit
at.convertTemperature({
  t: 25,
  fromCelcius: true,
  fromFahrenheit: false,
  fromKelvin: false,
  toCelcius: false,
  toFahrenheit: true,
  toKelvin: false
});
// returns 77

// calculate dew point temparature wit 25 Celcius and relative humidity  70%
at.dewPoint(25, 70);
// returns 19.15 Celcius

at.newWindChill({
  t: -5,
  withCelcius: true,
  withFahrenheit: false,
  windSpeed: 5.9,
  kmH: false,
  ms: false,
  mph: false,
  returnFahrenheit: false,
  returnCelcius: true
});
// -7.725265477224572;

at.heatIndex({
  t: -5,
  withCelcius: true,
  withFahrenheit: false,
  windSpeed: 5.9,
  kmH: false,
  ms: false,
  mph: false,
  returnFahrenheit: false,
  returnCelcius: true
});
```
