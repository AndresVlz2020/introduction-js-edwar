class Building {
    constructor(address, floors) {
        this.address = address;
        this.floors = floors;
    }

    getData() {
        return `Edificio: ${this.address}, Pisos: ${this.floors}`;
    }
}

class OfficeBuilding extends Building {
    constructor(address, floors, companiesInside) {
        super(address, floors);
        this.companiesInside = companiesInside;
    }

    getData() {
        return `${super.getData()} (Uso corporativo)`;
    }

    getCompanyCount() {
        return this.companiesInside;
    }
}

const tower = new OfficeBuilding("Centro Mayor", 25, 40);
console.log(tower.getData());
console.log("Número de empresas: " + tower.getCompanyCount());