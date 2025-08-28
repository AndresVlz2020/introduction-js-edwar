let result;

result = Math.PI;
result = Math.round(2.7);
result = Math.round(2.1);
result = Math.ceil(2.1); // redondea hacia arriba
result = Math.floor(2.8); // redondea hacia abajo
result = Math.sqrt(16); // raiz cuadrada
result = Math.abs(-144); // valor absoluto
result = Math.min(1, 5, 85, 65, 7);
result = Math.max(1, 5, 85, 65, 7);
result = Math.random(); // numero aleatorio
result = Math.floor(Math.random() * 100); // numero aleatorio entre 0 y 100
console.log(result);

// 4 Operaciones básicas con 2 números enteros aleatorios no mayores de 100

let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);


let suma = num1 + num2;

let resta = num1 - num2;

let multiplicacion = num1 * num2;

let division = num1 / num2;

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);