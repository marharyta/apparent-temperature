//T(K) = T(°C) + 273.15
const fromCelciusToKelvin = t => {
    return t + 273.15;
};

//T(°C) = T(K) - 273.15
const fromKelvinToCelcius = t => {
    return t - 273.15;
};

//T(K) = (T(°F) + 459.67)× 5/9
const fromFahrenheitToKelvin = t => {
    return (t + 459.67) * 5 / 9;
};

//T(°F) = T(K) × 9/5 - 459.67
const fromKelvinToFahrenheit = t => {
    return t * 9 / 5 - 459.67;
};

// T(°F) = T(°C) × 9/5 + 32
//T(°F) = T(°C) × 1.8 + 32
const fromCelciusToFahrenheit = t => {
    return t * 1.8 + 32;
};

//T(°C) = (T(°F) - 32) × 5/9
//T(°C) = (T(°F) - 32) / (9/5)
//T(°C) = (T(°F) - 32) / 1.8
const fromFahrenheitToCelcius = t => {
    return (t - 32) / 1.8;
};

//test obj
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
        }
    } else if (fromFahrenheit) {
        if (toFahrenheit) {
            return t;
        } else if (toCelcius) {
            return fromFahrenheitToCelcius(t);
        } else if (toKelvin) {
            return fromFahrenheitToKelvin(t);
        }
    } else if (toKelvin) {
        if (toKelvin) {
            return t;
        } else if (toCelcius) {
            return fromFahrenheitToCelcius(t);
        } else if (toFahrenheit) {
            return fromFahrenheitToKelvin(t);
        }
    } else {
        return t;
    }

};

console.log(convertTemperature(obj));


