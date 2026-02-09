

const num1 = 10;
const num2 = '20';

console.log(num1);
console.log(num2);
console.log(typeof num1);
console.log(typeof num2);

// Parsear es convertir un tipo de variable a otro tipo 
console.log(num1) 
console.log(parseInt(num2));

// Este metodo convierte de numero a string
console.log(num1.toString());
console.log(num1);

// ======================================================
function greet(){
    console.log(`Hello`);
};

greet();

// ===============
const person = {
    userName: "Miguel",
    greet: function(){
        console.log(`Hello, i'm ${this.userName}`);
    }
}
// Metodo que pertenece a person
person.greet(); 
console.log(typeof person);

// Una funcion existe por si sola, por el contrario un metodo es una funcion dentro de un objeto
