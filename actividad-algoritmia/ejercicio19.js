// SANTIAGO ANDRES VELEZ NARANJO
// 19. Determinar si un número es potencia de 2 usando logaritmos (Math.log2).

console.log("Ejercicio 19: Determinar si es potencia de 2");

const numeroAEvaluar = 16;
const esPotenciaDeDos = Number.isInteger(Math.log2(numeroAEvaluar));

console.log(`¿El número ${numeroAEvaluar} es una potencia de 2? ${esPotenciaDeDos ? 'Sí' : 'No'}`);