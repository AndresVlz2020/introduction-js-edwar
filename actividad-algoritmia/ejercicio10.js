// SANTIAGO ANDRES VELEZ NARANJO
// 10. Generar una contraseña numérica aleatoria de 6 dígitos.

console.log("Ejercicio 10: Contraseña aleatoria de 6 dígitos");

// El rango de números de 6 dígitos es de 100000 a 999999.
// Generamos un número aleatorio en el rango de 0 a 899999 y le sumamos 100000.
const passwordNumerica = Math.floor(100000 + Math.random() * 900000);

console.log(`Contraseña numérica aleatoria de 6 dígitos: ${passwordNumerica}`);