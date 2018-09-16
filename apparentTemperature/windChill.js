// old formula for wind chill

const obj = {
  t: 0,
  withCelcius: false,
  withFahrenheit: false,
  windSpeed: false,
  kmH: false,
  ms: false,
  mph: false,
  returnFahrenheit: false,
  returnCelcius: false
};

// new formula for wind chill
// NWCT = 13.12 + 0.6215*T - 11.37 * V^0.16 + 0.3965 * T * V^0.16
// V - air speed in km/h, T <= 10 C, V >= 4.8 km/h
// by default calculates in C and km/h 


//  WC T = 35.74 + 0.62I5T - 35.75V0 1 6+ 0.4275TV0,6

const calculateNewWindChillWithCelcius = (t, v) => {
  return 13.12 + (0.6215*t) - 11.37 * Math.pow(v, 0.16) + (0.3965 * t * Math.pow(v, 0.16));
};

const calculateNewWindChillWithFahrenheit = (t, v) => {
  return 35.74 + (0.6215*t) - 35.75 * Math.pow(v, 0.16) + (0.4275 * t * Math.pow(v, 0.16));
};

const newWindChill = ({ t, withCelcius, withFahrenheit, windSpeed, kmH, ms, mph, returnFahrenheit, returnCelcius }) => { 
  if(t == undefined || windSpeed == undefined){
    throw new Error('please, input temperature and wind speed');
  } else if (t > 10 && !withFahrenheit){
    throw new RangeError('temperatures above 10 C are not applicable to this calculation');
  } else if (windSpeed < 4.8){
    throw new RangeError('wind speed below 4.8 kmH are not applicable to this calculation');
  } else if(withFahrenheit && mph && returnFahrenheit){
    return calculateNewWindChillWithFahrenheit(t, windSpeed);
  } else {
    return calculateNewWindChillWithCelcius(t, windSpeed);
  }
};

module.exports = newWindChill;