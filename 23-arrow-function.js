// // Sintaxis mas breve, ideal para funciones pequeñas
// //  No tiene su propio this, Hereda el this del contexto donde se define 

// // Funcion sin parametros 
// const add= function(){
//     console.log(16+3);
// }

// add();

// // Funcion con parametros
// const add2 = function( num1,  num2){
//     console.log(nun1, num2);
// }

// add2(4,8);

// const add3 = (num3, num4 ) => console.log(num3, num4);
// add3(6,9)

// // ============== otro ejemplo

// const learn = (technology) => {
//     console.log(`Aprendiendo ${technology}`);
// }

// Learn (`JavaScript`);

// ======================
const months = new Array('may', 'June' , 'july','junuary','December', 'November', 'Febreary');
// Este no tienne constructor
const shoppingCart = [
    {productName: 'smartTV 60"', price: 900},
    {productName: 'smartTV 50"', price: 700},
    {productName: 'Tablet', price: 250},
    {productName: 'smart phone', price: 900},
    {productName: 'Google assistand', price: 600},
    {productName: 'sound-Bar', price: 400},
    {productName: 'Play station', price: 800},
    {productName: 'wii', price: 450},
    {productName: 'Mouse', price: 50},
]

// months.forEach(function(months){
//     if(months == 'November'|| months == 'December'){
//         console.log('Se verifico en el arreglo y el mes si existe');
//     }else{
//         console.log('El mes No existe')
//     }
// })
months.forEach( months =>{
    if(months == 'November'|| months == 'December'){
        console.log('Se verifico en el arreglo y el mes si existe');
    }else{
        console.log('El mes No existe')
    }
})


// =============
// // const result = shoppingCart.some(function(product){
//     return product.price === 800;
// })
// console.log(result);

const result = shoppingCart.some(product => product.price === 800);
console.log(result);


// ================
// const result3 = shoppingCart.reduce(function(total, product){
//     return total + product.price;
// }, 0)
// console.log(result3)

const result3 = shoppingCart.reduce((total, product) =>
     total + product.price, 0)
console.log(result3)

// ======================

// const result6 = shoppingCart.filter(function(product){
//     return product.price < 600;
// })
// console.log(result6)

const result6 = shoppingCart.filter(product => product.price < 600)
console.log(result6)

// =====================
// function greet (userName){
//     console.log(`Hello ${userName}`);
// }
// console.log(greet("Edwar"));

 const greet = userName => `Hello ${userName}`
console.log(greet(`Miguel`));

// ======================

const boost = num => num * num;
console.log(boost(3));

const boost2 = num => Math.pow(num, 2);
console.log(boost2(100));

// Arrow function con retorno explicito

// Se usa cuando el cuerpo de una funcion tiene llaves{}

const add10 = (num4, num5) => {
    const result7 = num4 + num5;
    return result7;
}

console.log(add10(15, 7));

// Retorno implicito:  cuando un retorno  no tiene llaves realiza el retorno implicitamente.
const add11 = (num6, num7) => num6 + num7;

console.log(add11(4, 6 ))