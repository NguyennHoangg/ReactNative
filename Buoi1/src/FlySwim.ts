
export interface Flyable {
    fly(): void;
}

export interface Swimmable {
    swim(): void;
}

export class Bird implements Flyable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    fly(): void {
        console.log(`${this.name} is flying high in the sky!`);
    }
}

export class Fish implements Swimmable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    swim(): void {
        console.log(`${this.name} is swimming in the water!`);
    }
}

// Duck can both fly and swim
export class Duck implements Flyable, Swimmable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    fly(): void {
        console.log(`${this.name} is flying!`);
    }

    swim(): void {
        console.log(`${this.name} is swimming!`);
    }
}

const bird = new Bird("Eagle");
const fish = new Fish("Nemo");
const duck = new Duck("Donald");

bird.fly();
fish.swim();
duck.fly();
duck.swim();
