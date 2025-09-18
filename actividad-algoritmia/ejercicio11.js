// SANTIAGO ANDRES VELEZ NARANJO
//  11. Encontrar el número mayor y menor en un arreglo de 20 números (usar Math.max y Math.min).

console.log("Ejercicio 11: Mínimo y máximo de un arreglo");

// Creamos un arreglo con 20 números aleatorios entre 0 y 99.
const arregloNumeros = [];
for (let i = 0; i < 20; i++) {
    arregloNumeros.push(Math.floor(Math.random() * 100));
}

// Usamos el operador de propagación (...) para pasar los elementos del arreglo como argumentos.
const numMenor = Math.min(...arregloNumeros);
const numMayor = Math.max(...arregloNumeros);

console.log("Arreglo generado:", arregloNumeros);
console.log(`El número menor del arreglo es: ${numMenor}`);
console.log(`El número mayor del arreglo es: ${numMayor}`);