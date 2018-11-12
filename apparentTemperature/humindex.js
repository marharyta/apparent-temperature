
const math = require('mathjs');
// HU = t + 0.5555( 6.11 * Math.exp( 5417.7530 * ( 1/273.16 - 1/d)) - 10 )
// or
// hu = t + 5/9 * (6.11 * Math.exp(5417.7530 * (1/273.16 - 1/d)) -10)
// t - ambient temperature
// d - dewpoint temperature


const calculateHumidex = (t, d) => {

  // if d is in celcius
  let e = 6.11 * Math.exp(5417.7530 * ((1 / 273.16) - (1 / (273.15 + d))));
  // if d is in kelvin
  // let e = 6.11 * Math.exp(5417.7530 * ((1 / 273.16) - (1 / d)));
  let h = 5 / 9 * (e - 10);
  let humindex = t + h;
  return humindex;
  // return t + (5 / 9 * ((6.11 * Math.exp(5417.7530 * (1 / 273.16 - 1 / d))) - 10));
};


module.exports = calculateHumidex;

// http://asciimath.org/