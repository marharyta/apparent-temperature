# apparent-temperature

![enter image description here](https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Windy-512.png)
Pure JavaScript tested library to calculate different versions of apparent temperatures.

Includes:

- New Wind Chill
- Dew Point
- Heat Index
- Humidex

### Sample usage

```js
const apparent = require("./index.js");

apparent.apparent.convertTemperature({
  t: 25,
  fromCelcius: true,
  fromFahrenheit: false,
  fromKelvin: false,
  toCelcius: false,
  toFahrenheit: true,
  toKelvin: false
}); // returns 77

apparent.apparent.dewPoint(25, 70); // returns 19.15
```
