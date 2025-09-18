// SANTIAGO ANDRES VELEZ NARANJO
// 16. Convertir grados a radianes y radianes a grados.

console.log("Ejercicio 16: Conversión de Grados y Radianes");

const grados = 180;
const radianes = grados * (Math.PI / 180);
console.log(`${grados} grados equivalen a ${radianes.toFixed(4)} radianes.`);

const radianesAConvertir = Math.PI / 2;
const gradosConvertidos = radianesAConvertir * (180 / Math.PI);
console.log(`${radianesAConvertir.toFixed(4)} radianes equivalen a ${gradosConvertidos} grados.`);