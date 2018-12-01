/*
  Wet Bulb Temperature
  tw - Wet Bulb Temperature in C
  ta - dry bulb temperature in C (ambient temperature, temperature of air, temperature received from forecast)
  and -40°C <= ta <= 50°C
  rh - relative humidity in %

    c1 = 0.151977
    c2 = 8.313659
    c3 = 1.676331
    c4 = 0.00391838
    c5 = 0.023101
    c6 = 4.686035
  tw = ta * atan(c1* Math.pow(rh+c2,1/2)) + atan(ta+rh) - atan(rh - c3) + c4*Math.pow(rh, 3/2)*atan(c5*rh) - c6;

*/
const math = require("mathjs");

const calculateWetBulb = (ta, rh) => {
  const c1 = 0.151977;
  const c2 = 8.313659;
  const c3 = 1.676331;
  const c4 = 0.00391838;
  const c5 = 0.023101;
  const c6 = 4.686035;
  tw =
    ta * Math.atan(c1 * Math.pow(rh + c2, 1 / 2)) +
    Math.atan(ta + rh) -
    Math.atan(rh - c3) +
    c4 * Math.pow(rh, 3 / 2) * Math.atan(c5 * rh) -
    c6;
  console.log("tw", tw);
  return math.round(tw, 2);
};

module.exports = calculateWetBulb;
