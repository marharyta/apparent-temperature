const calculateDewPoint = require("../utils/dewPoint");
const math = require("mathjs");
// HU = t + 0.5555 * (6.11 * Math.exp(5417.7530 * (1/273.16 - 1/d)) - 10)
// or
// hu = t + 5/9    * (6.11 * Math.exp(5417.7530 * (1/273.16 - 1/d)) -10)
// t - ambient temperature
// d - dewpoint temperature
// return t + (5 / 9) * (6.11 * Math.exp(5417.753 * (1 / 273.16 - 1 / d)) - 10);

const calculateHumidex = (temperature, humidity) => {
  // if d is in celcius
  const d = calculateDewPoint(temperature, humidity);
  let e = 6.11 * Math.exp(5417.753 * (1 / 273.16 - 1 / (273.15 + d)));
  // if d is in kelvin
  // let e = 6.11 * Math.exp(5417.7530 * ((1 / 273.16) - (1 / d)));
  let h = (5 / 9) * (e - 10);
  let humindex = temperature + h;
  return humindex;
};

module.exports = calculateHumidex;
