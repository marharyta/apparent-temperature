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

  // let a = 7.625;
  // let b = 243.04;
  // let c = 610.94;

  let a = 17.08085;
  let b = 234.175;

  // Sonntag coefficients (1990)
  a=17.625;
  b=243.12;
  ta = 15;
  //ta = 288.15;
  rh = 50;
  // let d = 10.60;

  let logarithmOfHumidity1 = math.log((rh/100));

  let logarithmOfHumidity2 = math.exp(rh/100);
  let temperatureAverage = (a*ta)/(b + ta);
  let firstDeno = b*(logarithmOfHumidity2 + temperatureAverage);
  let secondDeno = a - logarithmOfHumidity2 - temperatureAverage;

  console.log('logarithmOfHumidity1', logarithmOfHumidity1);
  console.log('logarithmOfHumidity2', logarithmOfHumidity2);  
  console.log('temperatureAverage', temperatureAverage); 
  console.log('firstDeno', firstDeno); 
  console.log('secondDeno', secondDeno);  
  console.log('dew point', firstDeno / secondDeno); 


  let q = rh / 100;
  let p = 6.10780 * Math.exp((17.08085 * ta)/(234.175 + ta));
  let pd = p * q;

  let tp = (-Math.log(pd/6.10780)*234.175)/(Math.log(pd/6.10780) - 17.08085);
  console.log('calc', tp);
  // if(rh > 50){
  //   return ta - ((100 - rh) / 5);
  // } else {
    // return ta - ((100 - rh) / 5);
    // return ( b*( math.log((rh/100), Math.E) + (a*ta / (b + ta)) ) / (a - math.log((rh/100), Math.E) -  (a*ta / (a + ta))) );
  // let count = 0;



};

module.exports = calculateDewPoint;

// http://asciimath.org/