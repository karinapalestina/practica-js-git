
// Variables booleanas
let estaInscrito = true;
let tieneCredencial = true;
let tienePermiso = false;
let tieneAdeudos = false;

// Expresión lógica
let accesoPermitido =
    estaInscrito &&
    (tieneCredencial || tienePermiso) &&
    !tieneAdeudos;

// Mostrar resultado
console.log(`¿Acceso permitido?: ${accesoPermitido}`);
