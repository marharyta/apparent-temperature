const math = require("mathjs");
const fromMetersPerSecondToKilometersPerHour = require("../utils/windConvertion");
const fromMilesPerHourToKilometersPerHour = require("../utils/windConvertion");
/*
  Wind Chill and New Wind Chill

  new formula for wind chill
  NWCT = 13.12 + 0.6215*T - 11.37 * V^0.16 + 0.3965 * T * V^0.16
  V - air speed in km/h, T <= 10 C, V >= 4.8 km/h
  by default calculates in C and km/h
*/
const obj = {
  t: 0,
  withCelcius: false,
  withFahrenheit: false,
  windSpeed: 0,
  kmH: false,
  ms: false,
  mph: false,
  returnFahrenheit: false,
  returnCelcius: false
};

const calculateNewWindChillWithCelcius = (t, v) => {
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(v, 0.16) +
    0.3965 * t * Math.pow(v, 0.16)
  );
};

const calculateNewWindChillWithFahrenheit = (t, v) => {
  return (
    35.74 +
    0.6215 * t -
    35.75 * Math.pow(v, 0.16) +
    0.4275 * t * Math.pow(v, 0.16)
  );
};

const newWindChill = ({
  t,
  withCelcius,
  withFahrenheit,
  windSpeed,
  kmH,
  ms,
  mph,
  returnFahrenheit,
  returnCelcius
}) => {
  if (t == undefined || windSpeed == undefined) {
    throw new Error("please, input temperature and wind speed");
  }

  if (!kmH) {
    if (ms) {
      // ms to km/h
      windSpeed = fromMetersPerSecondToKilometersPerHour(ms);
    } else if (mph) {
      windSpeed = fromMilesPerHourToKilometersPerHour(mph);
    }
  }

  if (t > 10 && !withFahrenheit) {
    throw new RangeError(
      "temperatures above 10 C are not applicable to this calculation"
    );
  } else if (windSpeed < 4.8) {
    throw new RangeError(
      "wind speed below 4.8 kmH are not applicable to this calculation"
    );
  } else if (withFahrenheit && mph && returnFahrenheit) {
    return math.round(calculateNewWindChillWithFahrenheit(t, windSpeed), 4);
  } else {
    return math.round(calculateNewWindChillWithCelcius(t, windSpeed), 4);
  }
};

module.exports = newWindChill;
