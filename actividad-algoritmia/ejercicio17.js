// SANTIAGO ANDRES VELEZ NARANJO
// 17. Calcular el área de un triángulo dados su base 4 y altura 3, y redondear el resultado a 2 decimales.

console.log("Ejercicio 17: Área de un triángulo");

const baseTriangulo = 4;
const alturaTriangulo = 3;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log(`El área de un triángulo con base ${baseTriangulo} y altura ${alturaTriangulo} es: ${areaTriangulo.toFixed(2)}`);