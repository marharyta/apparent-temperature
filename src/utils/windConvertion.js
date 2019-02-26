// https://www.weather.gov/media/epz/wxcalc/windConversion.pdf

//  mph  to m/s
// Wm/s = 0.44704 * Wmph

// m/s to mph
// Wmph = 2.23694 * Wm/s

const fromMilesPerHourToMetersPerSecond = v => {
  return 0.44704 * v;
};

const fromMetersPerSecondToMilesPerHour = v => {
  return 2.23694 * v;
};

// ft/s  to m/s
// Wm/s = 0.3048 * Wft/s

// m/s to ft/s
// Wft/s = 3.28084 * Wm/s

const fromFootPerSecondToMetersPerSecond = v => {
  return 0.44704 * v;
};

const fromMetersPerSecondToFootPerSecond = v => {
  return 2.23694 * v;
};

// https://www.aqua-calc.com/convert/speed/meter-per-second-to-foot-per-minute
// vft/min = 196.850394 × vm/sec

const fromFootPerMinuteToMetersPerSecond = v => {
  return 0.44704 * v;
};

const fromMetersPerSecondToFootPerMinute = v => {
  return 196.850394 * v;
};

const fromMetersPerSecondToKilometersPerHour = v => {
  return 3.6 * v;
};

const fromKilometersPerHourToMetersPerSecond = v => {
  return v / 3.6;
};

//  1.609344
const fromMilesPerHourToKilometersPerHour = v => {
  return 1.609344 * v;
};

const fromKilometersPerHourToMilesPerHour = v => {
  return v / 1.609344;
};

module.exports = fromMilesPerHourToMetersPerSecond;
module.exports = fromMetersPerSecondToMilesPerHour;

module.exports = fromFootPerSecondToMetersPerSecond;
module.exports = fromMetersPerSecondToFootPerSecond;

module.exports = fromFootPerMinuteToMetersPerSecond;
module.exports = fromMetersPerSecondToFootPerMinute;

module.exports = fromMetersPerSecondToKilometersPerHour;
module.exports = fromKilometersPerHourToMetersPerSecond;

module.exports = fromMilesPerHourToKilometersPerHour;
module.exports = fromKilometersPerHourToMilesPerHour;
