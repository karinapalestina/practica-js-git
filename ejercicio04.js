
// Precios de los 4 productos
let producto1 = 150;
let producto2 = 80;
let producto3 = 250;
let producto4 = 120;

// Calcular subtotal
let subtotal = producto1 + producto2 + producto3 + producto4;

// Calcular IVA (16%)
let iva = subtotal * 0.16;

// Calcular total
let total = subtotal + iva;

// Aplicar descuento del 10% usando operador de asignación compuesta
total *= 0.90;

// Mostrar el desglose
console.log(`Ticket de venta
--------------------------
Subtotal: $${subtotal.toFixed(2)}
IVA (16%): $${iva.toFixed(2)}
Total: $${(subtotal + iva).toFixed(2)}
Total con descuento: $${total.toFixed(2)}`);