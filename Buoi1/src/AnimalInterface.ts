
export interface Animal {
    name: string;
    sound(): string;
}

class Dog implements Animal {
    name: string;
    constructor(name: string) { this.name = name; }
    sound(): string { return "Woof!"; }
}

class Cat implements Animal {
    name: string;
    constructor(name: string) { this.name = name; }
    sound(): string { return "Meow!"; }
}

class Cow implements Animal {
    name: string;
    constructor(name: string) { this.name = name; }
    sound(): string { return "Moo!"; }
}

const animals: Animal[] = [
    new Dog("Rex"),
    new Cat("Whiskers"),
    new Cow("Bessie"),
];

animals.forEach(a => console.log(`${a.name} says: ${a.sound()}`));
