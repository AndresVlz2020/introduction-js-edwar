class Course {
    constructor(name, duration, category) {
        this.name = name;
        this.duration = duration;
        this.category = category;
    }

    getDetails() {
        return `Curso: ${this.name} (${this.duration}) - Categoría: ${this.category}`;
    }
}

class OnlineCourse extends Course {
    constructor(name, duration, category, platform) {
        super(name, duration, category);
        this.platform = platform;
    }

    getDetails() {
        return `${super.getDetails()} - Plataforma: ${this.platform}`;
    }

    getShortInfo() {
        return `${this.name} en ${this.platform}`;
    }
}

const course = new OnlineCourse("Python Básico", "10h", "Programación", "Coursera");
console.log(course.getDetails());
console.log(course.getShortInfo());