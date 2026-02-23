class Animal {
    constructor(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;
    }

    getInfo() {
        return `${this.name} es un ${this.species} de ${this.age} años.`;
    }
}

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, "Perro", age);
        this.breed = breed;
    }

    getInfo() {
        return `${super.getInfo()} Raza: ${this.breed}`;
    }

    bark() {
        return "¡Guau, guau!";
    }
}

const myDog = new Dog("Santiago", 3, "Pomerania");
console.log(myDog.getInfo());
console.log(myDog.bark());