const celsius = 25;

// Calcular Fahrenheit y Kelvin
const fahrenheit = (celsius * 9 / 5) + 32;
const kelvin = celsius + 273.15;

// Mostrar los resultados con dos decimales
console.log(
    `Temperatura:
Celsius: ${celsius.toFixed(2)} °C
Fahrenheit: ${fahrenheit.toFixed(2)} °F
Kelvin: ${kelvin.toFixed(2)} K`
);