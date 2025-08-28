// alert("Estoy en hello world");
// Convenciones para asignar variables 
// CamelCase
// UpperCamelCase => se usa para nombrar las clases en JavaScript
// lowerCamelCase => se usa para nombrar variables y funciones en JavaScript
// screamingSnakeCase => se usa para nombrar variables constantes en JavaScript 
// snake_case => Generalmente usado para nombrar variables en el lenguaje Python
// kebab-case => Se usa para nombrar archivos multimedia y archivos en general en JavaScript
// trenCase => variante del kebab-case, pero con mayusculas en cada palabra

// Ya NO se usa var para declarar las variables, actualmente se usa let
// En JavaScript no es obligatorio indicar el tipo de variable
// En JavaScript se puede o N0 usar el punto y coma al final de una sentencia

var product = 'sensor-1';
var product2 = 'sensor-1';

console.log(product)
console.log(product2);

// No se puede iniciar una variable con un guión medio
//var -sensor = "sensor3";

// No se puede iniciar una variable con un número
//var 1sensor = "sensor4";

// Si está permitido inciar una variable con guión bajo
var _sensor = "sensor5";
console.log(_sensor);

// Crear una variable de las 3 formas distintas

//var sensor10 = "sensor de lluvia";
//const sensor10 = "sensor de lluvia";
// let sensor10 = "sensor de lluvia";

// console.log(sensor10);

// Ejemplo con var
// No me indica error si repito la variable con var:
// var sensor11 = "sensor de humedad";
// var sensor11 = "sensor de calor";


// Let no permite duplicidad al declarar variables:
// let sensor12 = "sensor de velocidad";
// let sensor12 = "sensor de luz";

// No muestra error por falta de incialización:
// console.log(username);
// let username = "Andrés";


// Usando la declaración const no se puede reasignar el valor de una variable 
const maxSize = 1024;
maxsize = 2048; // No se puede reasignar una constante

console.log(maxsize);