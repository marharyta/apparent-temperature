
// HU = t + 0.5555( 6.11 * Math.exp( 5417.7530 * ( 1/273.16 - 1/d)) - 10 )
// t - ambient temperature
// d - dewpoint temperature


const calculateHumidex = (t, d) => {
  return t + 0.5555( 6.11 * Math.exp( 5417.7530 * ( 1/273.16 - 1/d)) - 10 );
};


const math = require('mathjs');
// td = ta - ((100 - rh) / 5)
// where td - dewpoint temperature
// ta - ambient temperature in C
// rh - relative humidity in %
// rh >= 50%

//td = ( B*( ln(rh/100) + (A*ta / (B + ta)) ) / (A - ln(rh/100) -  (A*ta / (B + ta))) )
// where 
// A = 7.625,
// B =243.04°C
// and -40°C <= t <= 50°C

// ln(x ) means natural logarythms 

// math.log(x, base)



const calculateDewPoint = (ta, rh) => {
  let a = 7.625;
  let b = 243.04;
  ta = 15;
  rh = 60;
  let d = 10.60;
    let count = 0;
    let ind = 5417.7530*(1/273.16 - 1/(273.15 + d));
    let a1 = 6.11 * Math.pow(Math.E, ind) - 10; 
    let a11 = 6.11 * Math.exp(ind) - 10; 
    let a2 = 0.5555 * a1;
    console.log('calculate index', ind );
    console.log('calculate 6.11e to index - 10 via pow', a1);
    console.log('calculate 6.11e to index - 10 via exp', a11);
    console.log('this calculates humindex: calculate humindex ta - a2', ta + a2);

    let count = 0;
    let ind = 5417.7530*(1/273.16 - 1/(273.15 + d));
    let a1 = 6.11 * Math.pow(Math.E, ind) - 10; 
    let a11 = 6.11 * Math.exp(ind) - 10; 
    let a2 = 0.5555 * a1;
    console.log('calculate index', ind );
    console.log('calculate 6.11e to index - 10 via pow', a1);
    console.log('calculate 6.11e to index - 10 via exp', a11);
    console.log('calculate humidity ta - a2', ta + a2);

    // this is also supposed to calculate humidindex


};

module.exports = calculateDewPoint;

// http://asciimath.org/