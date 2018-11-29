const convertTemperature = require('../utils/temperatureConvertion');
// const obj = {
//   temperature: 0,
//   withCelcius: false,
//   withFahrenheit: true,
//   relativeHumidity: 0,
//   returnFahrenheit: true,
//   returnCelcius: false
// };

// heat index according to Rothfusz 1990

// HI = -42.379 + 2.04901523*T + 10.14333127*R - 0.22475541*T*R - (6.83783*10^-3)T^2 -
// - (5.481717 * 10^-2)R^2 + (1.22874 * 10^-3)T^2*R + (8.5282 * 10^-4)T*R^2 - (1.99 * 10^-6)T^2*R^2
// T in F
// R in % (R is humidity)

// heat index algorytm NWS 2011
const calculateHeatIndex = ({ temperature, relativeHumidity }) => {
  let temporaryCalculation = temperature;
  if (temperature <= 40) {
    return temperature;
  } else if (temperature > 40) {
    temporaryCalculation = -10.3 + (1.1 * temperature) + (0.047 * relativeHumidity);
    if (temporaryCalculation < 79) {
      return temporaryCalculation;
    } else {
      temporaryCalculation = -42.379 + (2.04901523 * temperature) + (10.14333127 * relativeHumidity) - (0.22475541 * temperature * relativeHumidity) - ((6.83783 * Math.pow(10, -3)) * Math.pow(temperature, 2)) - ((5.481717 * Math.pow(10, -2)) * Math.pow(relativeHumidity, 2)) + ((1.22874 * Math.pow(10, -3)) * Math.pow(temperature, 2) * relativeHumidity) + ((8.5282 * Math.pow(10, -4)) * temperature * Math.pow(relativeHumidity, 2)) - ((1.99 * Math.pow(10, -6)) * Math.pow(temperature, 2) * Math.pow(relativeHumidity, 2));
      if (relativeHumidity <= 13 && temperature >= 80 && temperature <= 112) {
        temporaryCalculation = temporaryCalculation - ((13 - relativeHumidity) / 4) * Math.pow(((17 - Math.abs(temperature - 95)) / 17), 0.5);
      } else if (relativeHumidity > 85 && temperature >= 80 && temperature <= 87) {
        temporaryCalculation = temporaryCalculation + 0.02 * (relativeHumidity - 85) * (87 - temperature);
      } else {
        return temporaryCalculation;
      }
    }
  }
};


const heatIndex = ({ temperature, relativeHumidity, withFahrenheit = true, withCelcius = false, returnFahrenheit = true, returnCelcius = false }) => {
  if (withFahrenheit) {
    if (relativeHumidity < 0 || relativeHumidity > 100) {
      throw new Error('Relative humidity misy be from 0 to 100% as intergers');
    } else {
      const obj = { temperature: temperature, relativeHumidity: relativeHumidity };
      if (returnFahrenheit) {
        return calculateHeatIndex(obj);
      } else {
        const tempData = { t: calculateHeatIndex(obj), fromFahrenheit: true, toCelcius: true };
        return convertTemperature(tempData);
      }

    }

  } else if (withCelcius) {
    const tempData = { t: temperature, fromCelcius: true, toFahrenheit: true };
    const obj = { temperature: convertTemperature(tempData), relativeHumidity: relativeHumidity };
    if (returnFahrenheit) {
      return calculateHeatIndex(obj);
    } else {
      const tempData = { t: calculateHeatIndex(obj), fromFahrenheit: true, toCelcius: true };
      return convertTemperature(tempData);
    }
  }

};

module.exports = calculateHeatIndex;
module.exports = heatIndex;