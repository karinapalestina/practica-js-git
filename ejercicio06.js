
// Cantidad de segundos
const segundosTotales = 7385;

// Calcular horas, minutos y segundos
const horas = Math.floor(segundosTotales / 3600);
const minutos = Math.floor((segundosTotales % 3600) / 60);
const segundos = segundosTotales % 60;

// Mostrar el resultado
console.log(`${horas} h ${minutos} min ${segundos} s`);