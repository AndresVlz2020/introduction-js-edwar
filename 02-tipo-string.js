// String O cadena de texto

const sensor = "Temperatura";
const sensor2 = "PH";

console.log(sensor);
console.log(sensor2);


// Estas dos formas de crear un string son poco comunes
const sensor3 = String('Presion');
const sensor4 = new String("Humedad");

console.log(sensor3);
console.log(sensor4);

//  Para saber el tipo de dato usamos typeof console.log(typeof sensor3);

let product = "Televisor de 32\"";
let product2 = "Televisor de 58\"";

console.log(product);
console.log(product2);

// Métodos con string
// .length te permite conocer la extensión de una cadena de texto
console.log(product2.length);


let fullName = "Santiago Andres Velez Naranjo";
console.log(fullName.length);

// Sirve para saber si una cadena de texto existe dentro de una frase
// indexOf nos muestra la posición en la que se encuentra la cadena de texto
// Si no la encuentra, devuelve -1.

let phrase = "Aquí vamos a buscar la palabra SENA";
console.log(phrase.indexOf("sena"));

let phrase2 = "Aquí vamos a buscar la palabra SENA";
console.log(phrase2.includes("SENA"));
console.log(phrase2.includes("Andres"));