// Funciones en JS
// Qué es Hoisting?
// Hoisting en JS es el comportamiento en el queel interprete "MUEVE" las declaraciones de (variables y funciones) a la parte superior de su ámbito (scope) antes de ejecutar el código
// Esto significa que puedes usar una función o variable declarada antes de escribirla en el código.

// Declaración de una función
// Como esta función está declarada se puede llamar antes o después de su creación
function add() {
    console.log(10 + 10);
}
add();

//==================================================================================================

// La expresión de una función
// La expresioón de la función solo puede llamarse después de su creación
const sumar2 = function() {
    console.log(3 + 3);
}
sumar2();

//==================================================================================================
// IIFE(Inmediatly invoked function expression), esta función se llama a sí misma
// Son útiles para proteger las variables para que no se mezclen con las variables de otros archivos
(function() {
    console.log("Esto es una función IIFE")
})();


(function(name) {
    console.log(`Hello, ${name}`);
})('Miguel');
