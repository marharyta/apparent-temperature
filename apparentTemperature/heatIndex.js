const obj = {
  t: 0,
  withCelcius: false,
  withFahrenheit: false,
  relativeHumidity: 0,
  returnFahrenheit: false,
  returnCelcius: false
};

// heat index according to Rothfusz 1990

// HI = -42.379 + 2.04901523*T + 10.14333127*R - 0.22475541*T*R - (6.83783*10^-3)T^2 -
// - (5.481717 * 10^-2)R^2 + (1.22874 * 10^-3)T^2*R + (8.5282 * 10^-4)T*R^2 - (1.99 * 10^-6)T^2*R^2
// T in F
// R in % (R is humidity)

const calculateHeatIndex = (t, r) => {
  if(r<0 || r > 100){
    throw new Error('Relative humidity misy be from 0 to 100% as intergers');
  }
  let temporaryCalculation = t;
  if(t <= 40){
    return t;
  } else if(t > 40){
    temporaryCalculation = -10.3 + (1.1*t) + (0.047*r);
    if(temporaryCalculation < 79){
      return temporaryCalculation;
    }  else {
      temporaryCalculation = -42.379 + (2.04901523*t) + (10.14333127*r) - (0.22475541*t*r) - ((6.83783*Math.pow(10, -3))*Math.pow(t, 2)) - ((5.481717*Math.pow(10, -2))*Math.pow(r, 2)) + ((1.22874*Math.pow(10, -3))*Math.pow(t, 2)*r) + ((8.5282*Math.pow(10, -4))*t*Math.pow(r, 2)) - ((1.99 * Math.pow(10, -6))*Math.pow(t, 2)*Math.pow(r, 2));
      if(r <= 13 && t >= 80 && t <= 112){
        temporaryCalculation = temporaryCalculation - ( (13-r)/4 )*Math.pow( ( (17-Math.abs(t-95))/17 ), 0.5);
      } else if(r > 85 && t >= 80 && t <= 87){
        temporaryCalculation = temporaryCalculation + 0.02 * (r - 85 ) * (87 - t);
      } else{
        return temporaryCalculation;
      }
    }
  } 
};

// heat index algorytm NWS 2011

// temperature sould be coming in F



module.exports = calculateHeatIndex;