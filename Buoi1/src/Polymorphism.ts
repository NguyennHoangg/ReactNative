export class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log(`${this.name} makes a generic sound.`);
    }

    move(): void {
        console.log(`${this.name} is moving.`);
    }
}

export class Dog extends Animal {
    override makeSound(): void {
        console.log(`${this.name} barks: Woof! Woof!`);
    }

    override move(): void {
        console.log(`${this.name} runs on four legs.`);
    }
}

export class Cat extends Animal {
    override makeSound(): void {
        console.log(`${this.name} meows: Meow~`);
    }

    override move(): void {
        console.log(`${this.name} sneaks silently.`);
    }
}

export class Bird extends Animal {
    override makeSound(): void {
        console.log(`${this.name} chirps: Tweet tweet!`);
    }

    override move(): void {
        console.log(`${this.name} flies through the air.`);
    }
}

// Polymorphism: treat all as Animal
const animals: Animal[] = [
    new Dog("Rex"),
    new Cat("Whiskers"),
    new Bird("Tweety"),
    new Animal("Unknown creature"),
];

console.log("=== Polymorphism Demo ===");
animals.forEach(animal => {
    animal.makeSound();
    animal.move();
    console.log("---");
});
