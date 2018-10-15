const math = require('mathjs');
// td = ta - ((100 - rh) / 5)
// where td - dewpoint temperature
// ta - ambient temperature in C
// rh - relative humidity in %
// rh >= 50%

//const TD1 = (B1 * Math.log(Math.exp((A1 * T) / (B1 + T)) * (RH / 100))) / (A1 - Math.log(Math.exp((A1 * T) / (B1 + T)) * (RH / 100)));
// where 
// A = 7.625,
// B = 243.04°C
// and -40°C <= t <= 50°C

const calculateDewPoint = (T, RH) => {
  // calculations according to the initial formula
  // coefficients from https://journals.ametsoc.org/doi/pdf/10.1175/BAMS-86-2-225
  // let a = 7.625;
  // let b = 243.04;
  // let c = 610.94;
  // initial formula
  // td = ( B*( ln(rh/100) + (A*ta / (B + ta)) ) / (A - ln(rh/100) -  (A*ta / (B + ta))) )
  const A = 7.625;
  const B = 243.04;
  const y = Math.exp((A * T) / (B + T)) * (RH / 100);
  const x = Math.log(y);
  const TD = (B * x) / (A - x);
  const TDD = (B * (Math.log(RH / 100) + (A * T / (B + T))) / (A - Math.log(RH / 100) - (A * T / (B + T))))

  // with Sonntag coefficients (1990)
  const A1 = 17.625;
  const B1 = 243.04;

  const y1 = Math.exp((A1 * T) / (B1 + T)) * (RH / 100);
  const x1 = Math.log(y1);
  const TD1 = (B1 * x1) / (A1 - x1);

  // this if for when rh > 50%
  // if (RH > 50) {
  //   return T - ((100 - RH) / 5);
  // }

  return TD1;


};

module.exports = calculateDewPoint;

// http://asciimath.org/