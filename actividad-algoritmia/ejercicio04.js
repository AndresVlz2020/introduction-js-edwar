// SANTIAGO ANDRES VELEZ NARANJO
// 4. Calcular la hipotenusa de un triángulo rectángulo dados sus catetos cateto A=4 cateto B=3 (usar Math.sqrt).

console.log("Ejercicio 4: Calcular hipotenusa");

const catetoA = 4;
const catetoB = 3;
// Teorema de Pitágoras: c = √(a² + b²)
const hipotenusa = Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB, 2));

console.log(`La hipotenusa de un triángulo con catetos ${catetoA} y ${catetoB} es: ${hipotenusa}`);