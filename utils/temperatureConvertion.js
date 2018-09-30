const fromCelciusToKelvin = t => {
    return t + 273.15;
};

const fromKelvinToCelcius = t => {
    return t - 273.15;
};

const fromFahrenheitToKelvin = t => {
    return (t + 459.67) * 5 / 9;
};

const fromKelvinToFahrenheit = t => {
    return t * 9 / 5 - 459.67;
};

const fromCelciusToFahrenheit = t => {
    return t * 1.8 + 32;
};

const fromFahrenheitToCelcius = t => {
    return (t - 32) / 1.8;
};

//example
const obj = {
    t: 0,
    fromCelcius: false,
    fromFahrenheit: false,
    fromKelvin: false,
    toCelcius: false,
    toFahrenheit: false,
    toKelvin: false
};

const convertTemperature = ({ t, fromCelcius, fromFahrenheit, fromKelvin, toCelcius, toFahrenheit, toKelvin }) => {
    if (fromCelcius) {
        if (toCelcius) {
            return t;
        } else if (toFahrenheit) {
            return fromCelciusToFahrenheit(t);
        } else if (toKelvin) {
            return fromCelciusToKelvin(t);
        } else {
            return t;
        }
    } else if (fromFahrenheit) {
        if (toFahrenheit) {
            return t;
        } else if (toCelcius) {
            return fromFahrenheitToCelcius(t);
        } else if (toKelvin) {
            return fromFahrenheitToKelvin(t);
        } else {
            return t;
        }
    } else if (fromKelvin) {
        if (toKelvin) {
            return t;
        } else if (toCelcius) {
            return fromKelvinToCelcius(t);
        } else if (toFahrenheit) {
            return fromKelvinToFahrenheit(t);
        } else {
            return t;
        }
    } else {
        return t;
    }

};

module.exports = convertTemperature;