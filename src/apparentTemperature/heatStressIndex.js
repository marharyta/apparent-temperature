/*
WARNING: THIS MODULE IS IN PROGRESS
 */

// HSI = (Ersw/Emax) ·100 & HSI = (Ersw/632.27) ·100
// Ersw = M + 22 · (trm - tsk) + 2 · v 0.5 · (ta - tsk)
// Emax = 10 · v 0.4 · (psk - pa)

//where:
//[22 · (trm - tsk)] = radiation loads, in Btu/h;
// trm = mean radiant temperature, in ºF;
// tsk = superficial skin temperature, in ºF;
// [2 · v^0,5 · (ta - tsk)] = convection loads, in Btu/h;
// ta = air temperature, in ºF;
// v = air speed, in ft/min;
// Ersw = required evaporative sweat, in Btu/h;
// Emax = maximum evaporative capacity, in Btu/h;
// psk = skin vapor pressure, in mmHg;
// pa = air vapor pressure, in mmHg
//  Radiation loss (R)
//  Convection loss (C)

// Ersw = M + 22 * (mean radiant temperature, in ºF - superficial skin temperature, in ºF) + 2 v^0.5 ( air temperature, in ºF - superficial skin temperature, in ºF)

//
// 1 Met = 58 W/m2 (356 Btu/hr)
// 58 W/m2 x 1.8 m2 = 104 W (356 Btu/hr)
// where 1.8 is Du-Bois area

// https://www.rapidtables.com/convert/power/Watt_to_BTU.html
// P(BTU/hr) = 3.412141633 × P(W)
// 1W = 3.412141633 BTU/hr
// 100 W (used in my calculations)
// M = 3.412141633 * W;
// v - air velocity in ft/min
// tw = 0; temperature of walls
// DBT = temp in Fahrenhait
// HSI = (M + 22*(tw - 95) + 2 * v^0.5 * (DBT - 95) ) / ( 10.3 * v^0.4 * (42 - pa) )
// pa = 42

// const fromMetersPerSecondToFootPerMinute = v => {
//    return 196.850394 * v;
// };

// const fromCelciusToFahrenheit = t => {
//     return t * 1.8 + 32;
// };
// w in Watt, t in Celcius, v in m/s

// 1 kPa =   7.500617 mmHg
const calculateHeatStressIndex = (w, t, v) => {
  const tw = 25;
  const pa = 1.7 * 7.500617;
  // const m = 3.412141633 * w * 8;
  //console.log('m', m);
  v = 196.850394 * v;
  console.log("v", v);
  t = t * 1.8 + 32;
  console.log("t", t);
  //console.log('(m + 22 * (tw - 95) + 2 * Math.pow(v, 0.5) * (t - 95))', (m + 22 * (tw - 95) + 2 * Math.pow(v, 0.5) * (t - 95)));
  //console.log('(10.3 * Math.pow(v, 0.4) * (42 - pa))', (10.3 * Math.pow(v, 0.4) * (42 - pa)));
  const m = 2400;
  const ta = 25 * 1.8 + 32;
  const trm = ta;
  const tsk = 35 * 1.8 + 32;
  const psk = 42;
  // Ersw =M+22·(trm-tsk)+2·v0.5 ·(ta -tsk)
  // Emax =10·v0.4 ·(psk -pa)
  // HSI = (Ersw/Emax) ·100
  // HSI = (Ersw/632.27) ·100
  const Ersw = m + 22 * (trm - tsk) + 2 * Math.pow(v, 0.5) * (ta - tsk);
  const Emax = 10 * Math.pow(v, 0.4) * (psk - pa);
  return (Ersw / Emax) * 100;
  // return (m + 22 * (tw - 95) + 2 * Math.pow(v, 0.5) * (t - 95)) / (10.3 * Math.pow(v, 0.4) * (42 - pa));
};

module.exports = calculateHeatStressIndex;
