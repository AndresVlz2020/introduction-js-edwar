// Prototype
// El prototipo es como un molde o modelo base
// Para este ejemplo, voy a guardar las funciones comunes en un lugar llamado prototype, así los objetos del mismo pueden heredarlas.

function Car(brand, model, color){
    this.brand = brand;
    this.brand = model;
    this.brand = color;
}

const Car1 = new Car ("Suzuki", "Frons", "Blue")
const Car2 = new Car ("Chevrolet", "Camaro", "Black")

console.log(Car1);
console.log(Car2);

Car.prototype.stop = function(){
  console.log(`El carro ${this.brand} está parando`);
};

Car1.stop();
Car2.stop();