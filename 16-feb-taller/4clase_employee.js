class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getData() {
        return `Empleado: ${this.name} - Salario: $${this.salary}`;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    getData() {
        return `${super.getData()} - Dept: ${this.department}`;
    }

    calculateBonus() {
        return `Bono (10%): $${this.salary * 0.10}`;
    }
}

const manager = new Manager("Laura", 4000, "Ventas");
console.log(manager.getData());
console.log(manager.calculateBonus());