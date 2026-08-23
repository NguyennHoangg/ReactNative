
export class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    displayInfo(): void {
        console.log(`Animal: ${this.name}`);
    }
}

export class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    bark(): void {
        console.log(`${this.name} says: Woof! Woof!`);
    }
}

export class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    meow(): void {
        console.log(`${this.name} says: Meow! Meow!`);
    }
}

const dog = new Dog("Buddy");
const cat = new Cat("Luna");

dog.displayInfo();
dog.bark();

cat.displayInfo();
cat.meow();
