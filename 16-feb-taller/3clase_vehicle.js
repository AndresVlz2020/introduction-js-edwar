class Vehicle {
    constructor(brand, year, color) {
        this.brand = brand;
        this.year = year;
        this.color = color;
    }

    getDescription() {
        return `Vehículo: ${this.brand} (${this.year}), Color: ${this.color}`;
    }
}

class ElectricVehicle extends Vehicle {
    constructor(brand, year, color, batteryCapacity) {
        super(brand, year, color);
        this.batteryCapacity = batteryCapacity;
    }

    getDescription() {
        return `${super.getDescription()} - Batería: ${this.batteryCapacity}kWh`;
    }

    calculateRange(kmPerKwh) {
        return `Autonomía estimada: ${this.batteryCapacity * kmPerKwh} km`;
    }
}

const car = new ElectricVehicle("BYD", 2024, "Gris", 60);
console.log(car.getDescription());
console.log(car.calculateRange(5.5));