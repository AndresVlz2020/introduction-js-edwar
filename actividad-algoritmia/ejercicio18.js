// SANTIAGO ANDRES VELEZ NARANJO
//  18. Generar un número aleatorio impar entre 1 y 99.

console.log("Ejercicio 18: Número aleatorio impar");

// Generamos un índice aleatorio para los 50 números impares que hay entre 1 y 99.
const indiceAleatorio = Math.floor(Math.random() * 50); // 0 a 49
const numeroImpar = 2 * indiceAleatorio + 1;

console.log(`Número aleatorio impar entre 1 y 99: ${numeroImpar}`);