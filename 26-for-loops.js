// Foreach Map son metodos exclusivos 

const shoppingCart = [
    {productName: 'smartTV 60"', price: 900, color: "Red"},
    {productName: 'smartTV 50"', price: 700},
    {productName: 'Tablet', price: 250},
    {productName: 'smart phone', price: 900},
    {productName: 'Google assistand', price: 600},
    {productName: 'sound-Bar', price: 400},
    {productName: 'Play station', price: 800},
    {productName: 'wii', price: 450},
    {productName: 'Mouse', price: 50},
]

// Recorrer un arreglo por cada elemento

// Acceder a un elemento en esepcifico. 
shoppingCart.forEach(function(product){
console.log(product)
});
shoppingCart.forEach(function(product){
console.log(product.price)
});
shoppingCart.forEach(function(product){
console.log(product.productName)
});



// ----------------------------------------------------------
// Ahora ForEach con Arrow Functions

// shoppingCart.forEach((product) => console.log (product));
// shoppingCart.forEach((product) => console.log (product.price));
// shoppingCart.forEach((product) => console.log (product.productName));
// shoppingCart.forEach((product) => console.log (product.color));


const array =shoppingCart.map(product => `El nombre del producto es: ${product.productName} - ${product.price}`)
    console.log(array);

