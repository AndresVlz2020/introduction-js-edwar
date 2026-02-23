class Device {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    getInfo() {
        return `Dispositivo: ${this.brand} ${this.model} - Precio: $${this.price}`;
    }
}

class Smartphone extends Device {
    constructor(brand, model, price, cameraMP) {
        super(brand, model, price);
        this.cameraMP = cameraMP;
    }

    getInfo() {
        return `${super.getInfo()} - Cámara: ${this.cameraMP}MP`;
    }
}

const phone = new Smartphone("Apple", "iPhone 15", 1200, 48);
console.log(phone.getInfo());