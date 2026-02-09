// more methodes for arrays
// Este arreglo se creo utilizando el constructor 
const months = new Array('may', 'June' , 'july','junuary');
// Este no tiee constructor
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
// Recorrer el arreglo con un foreach para que muestre todos los elementos 
// En este caso month es un parametro 
months.forEach(function(month){
    console.log(month);
});

// Verificar si un mes existe con foreach
months.forEach(function(month1){
   if(month1 == 'may' ){
    console.log('The month of may exis in the array' );
   }else{
    console.log("Doesn't exist")
   }
});

// Buscar en un arreglo si algo existe 
const result = months.includes('may');
console.log(result)

// ==================
const result2 = shoppingCart.includes('Tablet')
console.log(result2);

const num = 5 == 5; 
console.log('Igualacion doble', num);
// con igualacio doble solo compara el valor por eso en la conosola tenemos un true 
const num2 = 5 == '5'; 
console.log('Igualacion doble', num2);

// con la igualacion triple vemos si son estrictamente iguales
const num3 = 5 === '5'; 
console.log('Igualacion triple', num3);

// // ==================================
// en conclusion para un arreglo plano se usa includes y para un arreglo de objetos se usa some 
// const result5 = shoppingCart.some(function(product){
//     return product.productName === 'Tablet'
// })

// console.log(result5)

// Hace lo mismo que el codigo anterior pero mas corto con arrow function
let result5 = shoppingCart.some(product => product.productName === "play station ")
console.log(result5)

// ====================================
// Metodo reduce
// Sumar todos los precios del carrito de compras
result5 =shoppingCart.reduce(function(total, product){
    return total + product.price
}, 0 )
console.log(result5)

result5 = shoppingCart.reduce((total, product) => total + product.price, 0)
console.log(result5)

// ======================================================
result5 = shoppingCart.filter(function(product){
    return product.price < 700
});
console.log(result5)
// ======================================================
result5 = shoppingCart.filter(function(product){
    return product.productName === 'sound-Bar'
});
console.log(result5);

// Lo mismo pero con arrow function 
result5 = shoppingCart.filter(product => product.productName === 'sound-Bar')
console.log(result5);

// Todos exepto un tipo
result5 = shoppingCart.filter(function(product){
    return product.productName !== 'sound-Bar'
});
console.log(result5);

//====================
