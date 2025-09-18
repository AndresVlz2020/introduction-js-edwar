// SANTIAGO ANDRES VELEZ NARANJO
// 1. Redondear un número a 2 decimales usando Math.round. Ejemplo: 3.14159 → 3.14.

console.log("Ejercicio 1: Redondear a 2 decimales");

const numParaRedondear = 3.14159;
// Multiplicamos por 100 para mover los decimales, redondeamos y luego dividimos por 100.
const numRedondeado = Math.round(numParaRedondear * 100) / 100;

console.log(`El número ${numParaRedondear} redondeado a 2 decimales es: ${numRedondeado}`);