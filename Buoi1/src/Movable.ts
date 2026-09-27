export interface Movable {
    position: { x: number; y: number };
    move(dx: number, dy: number): void;
    getPosition(): string;
}

export class Car implements Movable {
    brand: string;
    position: { x: number; y: number };

    constructor(brand: string) {
        this.brand = brand;
        this.position = { x: 0, y: 0 };
    }

    move(dx: number, dy: number): void {
        this.position.x += dx;
        this.position.y += dy;
        console.log(`${this.brand} car moved to (${this.position.x}, ${this.position.y})`);
    }

    getPosition(): string {
        return `(${this.position.x}, ${this.position.y})`;
    }
}

export class Robot implements Movable {
    name: string;
    position: { x: number; y: number };

    constructor(name: string) {
        this.name = name;
        this.position = { x: 0, y: 0 };
    }

    move(dx: number, dy: number): void {
        this.position.x += dx;
        this.position.y += dy;
        console.log(`Robot ${this.name} moved to (${this.position.x}, ${this.position.y})`);
    }

    getPosition(): string {
        return `(${this.position.x}, ${this.position.y})`;
    }

    scan(): void {
        console.log(`Robot ${this.name} scanning area at ${this.getPosition()}...`);
    }
}

const car = new Car("Honda");
car.move(10, 5);
car.move(-3, 7);
console.log(`Car position: ${car.getPosition()}`);

console.log("---");

const robot = new Robot("R2-D2");
robot.move(0, 5);
robot.move(3, -2);
robot.scan();
console.log(`Robot position: ${robot.getPosition()}`);
