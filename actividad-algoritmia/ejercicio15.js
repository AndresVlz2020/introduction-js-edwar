// SANTIAGO ANDRES VELEZ NARANJO
// 15. Redondear un número decimal al múltiplo de 10 más cercano.

console.log("Ejercicio 15: Redondear al múltiplo de 10 más cercano");

const numero = 47.5;
const redondeadoA10 = Math.round(numero / 10) * 10;

console.log(`El número ${numero} redondeado al múltiplo de 10 más cercano es: ${redondeadoA10}`);