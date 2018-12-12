const apparent = require("./index.js");

console.log(
  "apparent",
  apparent.apparent.convertTemperature({
    t: 25,
    fromCelcius: true,
    fromFahrenheit: false,
    fromKelvin: false,
    toCelcius: false,
    toFahrenheit: true,
    toKelvin: false
  }),
  apparent.apparent.dewPoint(25, 70)
);
