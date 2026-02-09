// Funuciones parametros y argumentos


// Los parametros se pasan en los parentesis de la funcion 
// function add(num1, num2){
// return console.log(num1 + num2)
// add(5, 15);
// add(53, 15);
// add(25, 15);
// add(51, 15);
// add(50, 15);



// Ejercicio de la expresion de una funcion 
const add1 = (function(num3, num4){
    return console.log(num3 + num4);
}) 

add1(7,85);
add1(2,2);
add1(6,45);
// Ejemploc audno no se colocan los argumentos se colocan por defecto los valores en los parametros
function add2(num7 = 35, num8 = 10 ){
    return console.log(num7 - num8);
};
add2();

// Funcion que retorna un valor 
function add4(num9, num10){
return num9 + num10
};

const result = add4(4, 5)
console.log(result);

// Funcion para agregar el impuesto a pagar 
let total = 0;
function addShopingCart(price){
    return total += price;
}

function calculateTax(total){
    return 1.19 * total 
}


total = addShopingCart(800);
total = addShopingCart(500);
total = addShopingCart(200);
total = addShopingCart(900);

console.log(`El precio total del carrito es: ${total}`);

const totalTopay = calculateTax(total);

console.log(`La suma de los productos mas el impuesto es: ${totalTopay}`)
