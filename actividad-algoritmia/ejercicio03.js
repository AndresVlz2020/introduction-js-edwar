// SANTIAGO ANDRES VELEZ NARANJO
// 3. Calcular el área de un círculo de 5cm de radio (usar Math.PI).

console.log("Ejercicio 3: Área de un círculo");

const radio = 5;
// Fórmula del área: π * radio²
const areaCirculo = Math.PI * Math.pow(radio, 2);

console.log(`El área de un círculo con radio ${radio}cm es: ${areaCirculo.toFixed(2)}cm²`);