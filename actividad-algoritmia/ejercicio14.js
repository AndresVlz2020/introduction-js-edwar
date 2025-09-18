// SANTIAGO ANDRES VELEZ NARANJO
// 14. Calcular la diagonal de un rectángulo dados su base y altura (usar Math.sqrt y potencias).

console.log("Ejercicio 14: Diagonal de un rectángulo");

const base = 10;
const altura = 5;
const diagonal = Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2));

console.log(`La diagonal de un rectángulo con base ${base} y altura ${altura} es: ${diagonal.toFixed(2)}`);