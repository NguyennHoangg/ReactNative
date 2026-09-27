import { Person } from "./Person.js";

export class Teacher extends Person {
    subject: string;

    constructor(name: string, age: number, subject: string) {
        super(name, age);
        this.subject = subject;
    }

    introduce(): void {
        console.log(`Hi! I'm ${this.name}, ${this.age} years old. I teach ${this.subject}.`);
    }

    override displayInfo(): void {
        console.log(`Teacher: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`);
    }
}

const teacher = new Teacher("Ms. Lan", 35, "Mathematics");
teacher.introduce();
teacher.displayInfo();
