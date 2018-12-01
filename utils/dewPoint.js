/*
  Dew Point Temperature
  td - dew point in C
  ta - dry bulb temperature in C (ambient temperature, temperature of air, temperature received from forecast)
  and -40°C <= ta <= 50°C
  rh - relative humidity in %
  if rh = 100% => ta === td
  if rh >= 50%
  td = ta - ((100 - rh) / 5)
  if rh  1% - 99%
  or
  td = ( B*( ln(rh/100) + (A*ta / (B + ta)) ) / (A - ln(rh/100) -  (A*ta / (B + ta))) )
  AERK recommendation coefficients
  A = 17.625
  B = 243.04°C

*/
const math = require("mathjs");

const calculateDewPoint = (ta, rh) => {
  if (ta > 50) {
    throw new RangeError(
      "Temperature too big to perform accurate calculations"
    );
  } else if (ta < -40) {
    throw new RangeError(
      "Temperature too low to perform accurate calculations "
    );
  }
  if (rh === 100) {
    return ta;
  } else {
    const A1 = 17.625;
    const B1 = 243.04;

    const y1 = Math.exp((A1 * ta) / (B1 + ta)) * (rh / 100);
    const x1 = Math.log(y1);
    const td = (B1 * x1) / (A1 - x1);

    return math.round(td, 2);
  }
};

module.exports = calculateDewPoint;
