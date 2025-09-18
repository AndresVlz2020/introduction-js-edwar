// SANTIAGO ANDRES VELEZ NARANJO
// 2. Generar un número entero aleatorio entre 10 y 50.

console.log("Ejercicio 2: Número aleatorio en un rango");

const min = 10;
const max = 50;

// Fórmula para generar un número aleatorio dentro de un rango [min, max]
const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`Número aleatorio generado entre ${min} y ${max}: ${aleatorio}`);