class Appliance {
    constructor(brand, energyLevel) {
        this.brand = brand;
        this.energyLevel = energyLevel;
    }

    getData() {
        return `Electrodoméstico ${this.brand} (Nivel: ${this.energyLevel})`;
    }
}

class Washer extends Appliance {
    constructor(brand, energyLevel, capacityKg) {
        super(brand, energyLevel);
        this.capacityKg = capacityKg;
    }

    getData() {
        return `${super.getData()} - Capacidad: ${this.capacityKg}kg`;
    }

    calculateWaterUsage() {
        return `Consumo estimado: ${this.capacityKg * 15} litros`;
    }
}

const washer = new Washer("LG", "A", 18);
console.log(washer.getData());
console.log(washer.calculateWaterUsage());