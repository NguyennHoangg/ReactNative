
export class Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    displayInfo(): void {
        console.log(`Employee: ${this.name}, Salary: $${this.salary}`);
    }
}

export class Manager extends Employee {
    department: string;
    teamSize: number;

    constructor(name: string, salary: number, department: string, teamSize: number) {
        super(name, salary);
        this.department = department;
        this.teamSize = teamSize;
    }

    conductMeeting(): void {
        console.log(`${this.name} is conducting a meeting for the ${this.department} department (${this.teamSize} members).`);
    }

    override displayInfo(): void {
        super.displayInfo();
        console.log(`  Role: Manager | Department: ${this.department} | Team size: ${this.teamSize}`);
    }
}

export class Developer extends Employee {
    language: string;

    constructor(name: string, salary: number, language: string) {
        super(name, salary);
        this.language = language;
    }

    writeCode(): void {
        console.log(`${this.name} is writing code in ${this.language}.`);
    }

    override displayInfo(): void {
        super.displayInfo();
        console.log(`  Role: Developer | Language: ${this.language}`);
    }
}

const manager = new Manager("Alice", 8000, "Engineering", 10);
const developer = new Developer("Bob", 6000, "TypeScript");

manager.displayInfo();
manager.conductMeeting();

developer.displayInfo();
developer.writeCode();
