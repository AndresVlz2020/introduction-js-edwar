class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getData() {
        return `Producto: ${this.name} - $${this.price}`;
    }
}

class FoodProduct extends Product {
    constructor(name, price, expirationDate) {
        super(name, price);
        this.expirationDate = new Date(expirationDate);
    }

    getData() {
        return `${super.getData()} - Vence: ${this.expirationDate.toDateString()}`;
    }

    isExpired() {
        const today = new Date();
        return this.expirationDate < today ? "Vencido" : "Vigente";
    }
}

const milk = new FoodProduct("Leche", 1.20, "2023-10-15"); // Fecha antigua
console.log(milk.getData());
console.log(`Estado: ${milk.isExpired()}`);