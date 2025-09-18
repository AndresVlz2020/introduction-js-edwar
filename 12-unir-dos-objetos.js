// Cuando se unen dos objetos lo ideal es No modificar ninguno de los 2 objetos

const product = {
    productName: "Sensor de humedad",
    price: 300,
    available: true,
}

Object.freeze(product);

// Objeto que almacena las medidas
const measurements = {
    weight: '1 kg',
    measurement: '10 cm'
}

// Rest operator, consta de (...)

const newProduct = {...product, ...measurements }

// console.log(newProduct)
// console.log(product)


const audi = {
    year: '2025',
    color: 'black',
    topspeed: '300 km/h',
    horsepower: '912 hp'
}

const jet = {
    altitude: '8000 ft',
    load: '2000 kg'
}



const newCars = {...audi, ...jet }
console.log(newCars)