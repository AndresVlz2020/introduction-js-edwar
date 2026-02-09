// Try catch 
// Es una estructura para manejar errores en tiempo de ejecución, permitiendo que el programa continue ejecutandose sin fallar completamente.
// try: dentro de este bloque se puede generar un error.
// catch: captura el error si ocurre dentro del try y permite manejarlo.

const num1 = 20;
const num3 = 30;

console.log(num1);

try {
    console.log(num2);

} catch (error) {
    console.log("Error, la variable no existe");
}

console.log(num3);

// =======================================================

// Ejercicio 2

try {
    console.log(x);
} catch (error) {
    console.log("Ocurrio un error,x is not defined");
}

// =======================================================
// throw lanza manualmente un error
function divide(num5, num6) {
    try {
        if (num6 === 0) throw "No se puede dividir entre cero"
        return num5/num6;
    } catch (error) {
     return "Error", error;
    }
}

console.log(divide(10, 0));