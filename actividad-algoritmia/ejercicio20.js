// SANTIAGO ANDRES VELEZ NARANJO
// 20. Generar un arreglo con 20 números aleatorios enteros entre 1 y 100 y calcular el máximo y mínimo.

console.log("Ejercicio 20: Máximo y mínimo de un arreglo (1-100)");

const arregloNumeros20 = [];
for (let i = 0; i < 20; i++) {
    // Genera un número aleatorio entre 1 y 100
    arregloNumeros20.push(Math.floor(Math.random() * 100) + 1);
}

const numMenor20 = Math.min(...arregloNumeros20);
const numMayor20 = Math.max(...arregloNumeros20);

console.log("Arreglo generado:", arregloNumeros20);
console.log(`El número menor del arreglo es: ${numMenor20}`);
console.log(`El número mayor del arreglo es: ${numMayor20}`);