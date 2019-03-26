const convertTemperature = require("../utils/temperatureConvertion");
// first
// WCT = (12.15 + 11.6 • v10/2 - v10) • (33 - ta) (1)
// where: ta = air temperature, in ºC; v10 = air speed at 10m high, in m/s;
// -9ºC ≤ ta ≤ 10ºC;
// v10 ≤ 22.3m/s

const calculateWindChillWithCelcius = (t, v) => {
  // return (12.1452 + 11.6222 * Math.sqrt(v) - 1.16222 * v) * (33 - t);
  // in Watts per m2
  // 1122.0299999999997
  // weird output
  //   return (
  //     13.13 +
  //     0.62 * t -
  //     11.37 * Math.pow(v, 0.16) +
  //     0.3965 * t * Math.pow(v, 0.16)
  //   );
  //2.5777127433839557

  const fromMetersPerSecondToMilesPerHour = v => {
    return 2.23694 * v;
  };

  console.log(v, t);

  v = fromMetersPerSecondToMilesPerHour(v);
  t = convertTemperature({
    t: t,
    fromCelcius: true,
    toFahrenheit: true
  });

  console.log("after", v, t);
  // new wind chill
  return (
    35.74 +
    0.6215 * t -
    35.75 * Math.pow(v, 0.16) +
    0.4275 * t * Math.pow(v, 0.16)
  );

  // this is the old way to calculate it, works for fahrenheit and mph
  //   return (
  //     0.081 * (3.71 * Math.pow(v, 1 / 2) + 5.81 - 0.25 * v) * (t - 91.4) + 91.4
  //   );
  // this one is NOT used by FINNISH meteo institute
  // https://www.calculator.net/wind-chill-calculator.html?windspeed=5&windspeedunit=ms&airtemperature=4&airtemperatureunit=celsius&x=72&y=18
};

console.log(
  Math.round(
    convertTemperature({
      t: calculateWindChillWithCelcius(0, 8),
      fromFahrenheit: true,
      toCelcius: true
    })
  )
);

// tried if fahrenheit

// t = ta - math.square(v) * (25 - ta )/ 15

//
// WCT = 13.13 + 0.62* T - 11.37 * V ^ 0.16 + 0.3965 * T * V  ^ 0.16

// Wind Chill Temperature = 0.081×(3.71×V1/2 + 5.81 - 0.25×V) × (T - 91.4) + 91.4
