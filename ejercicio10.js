
// Datos del empleado
let nombreEmpleado = "Karina Fragoso";
let sueldoDiario = 500;
let diasTrabajados = 15;
let horasExtra = 8;

// Cálculos
let sueldoBase = sueldoDiario * diasTrabajados;

let sueldoPorHora = sueldoDiario / 8;
let pagoHorasExtra = horasExtra * (sueldoPorHora * 2);

let sueldoBruto = sueldoBase + pagoHorasExtra;

let retenciones = sueldoBruto * 0.09;

let sueldoNeto = sueldoBruto - retenciones;

// Verificar si recibe bono
let recibeBono = diasTrabajados >= 15 && horasExtra <= 10;

if (recibeBono) {
    sueldoNeto += 500;
}

// Imprimir recibo
console.log(`========================================`);
console.log(`          RECIBO DE NÓMINA`);
console.log(`========================================`);
console.log(`Empleado: ${nombreEmpleado}`);
console.log(`Sueldo diario: $${sueldoDiario.toFixed(2)}`);
console.log(`Días trabajados: ${diasTrabajados}`);
console.log(`Horas extra: ${horasExtra}`);
console.log(`----------------------------------------`);
console.log(`Sueldo base: $${sueldoBase.toFixed(2)}`);
console.log(`Pago horas extra: $${pagoHorasExtra.toFixed(2)}`);
console.log(`Sueldo bruto: $${sueldoBruto.toFixed(2)}`);
console.log(`Retenciones (9%): $${retenciones.toFixed(2)}`);
console.log(`Recibe bono: ${recibeBono}`);

if (recibeBono) {
    console.log(`Bono: $500.00`);
}

console.log(`----------------------------------------`);
console.log(`Sueldo neto: $${sueldoNeto.toFixed(2)}`);
console.log(`========================================`);