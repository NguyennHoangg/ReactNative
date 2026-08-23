export class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    protected makeSound(): void {
        console.log(`${this.name} makes a sound.`);
    }

    speak(): void {
        this.makeSound();
    }
}

export class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    protected override makeSound(): void {
        console.log(`${this.name} barks: Woof! Woof!`);
    }

    fetch(): void {
        console.log(`${this.name} fetches the ball!`);
    }
}

export class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    protected override makeSound(): void {
        console.log(`${this.name} meows: Meow~`);
    }

    purr(): void {
        console.log(`${this.name} is purring...`);
    }
}

const animals: Animal[] = [
    new Dog("Rex"),
    new Cat("Luna"),
    new Animal("Generic Animal"),
];

animals.forEach(a => {
    a.speak(); // Calls the protected makeSound() via public speak()
});

const dog = new Dog("Buddy");
dog.fetch();
