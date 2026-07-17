
const a = 47;
const b = 6;

// Calcular los resultados
const divisionReal = a / b;
const cocienteEntero = Math.floor(a / b);
const residuo = a % b;

// Mostrar los resultados
console.log(`División real: ${divisionReal}`);
console.log(`Cociente entero: ${cocienteEntero}`);
console.log(`Residuo: ${residuo}`);

// Comprobación
console.log(`Comprobación: ${cocienteEntero} × ${b} + ${residuo} = ${cocienteEntero * b + residuo}`);

// Indicar si "a" es par
console.log(`¿a es par?: ${a % 2 === 0}`);

