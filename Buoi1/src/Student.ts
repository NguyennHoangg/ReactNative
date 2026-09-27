import { Person } from "../src/Person.js";

export class Student extends Person {
    grades: number;
    constructor(name: string, age: number, grades: number) {
        super(name, age);
        this.grades = grades;
    }

    override displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grades: ${this.grades}`);
    }
}

const student = new Student("Hoang Nguyen", 21, 10);
student.displayInfo();