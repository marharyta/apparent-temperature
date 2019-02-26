var convertTemperature = require("./src/utils/temperatureConvertion.js");
var dewPoint = require("./src/utils/dewPoint");
var newWindChill = require("./src/apparentTemperature/windChill");
var heatIndex = require("./src/apparentTemperature/heatIndex");
var calculateHumidex = require("./src/apparentTemperature/humidex");

//All the variable we want to expose outside needs to be property of "exports" object.

module.exports = {
  humidex: calculateHumidex,
  heatIndex: heatIndex,
  newWindChill: newWindChill,
  dewPoint: dewPoint,
  convertTemperature: convertTemperature
};
