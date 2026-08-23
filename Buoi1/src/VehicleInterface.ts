export interface Vehicle {
    brand: string;
    speed: number;
    accelerate(amount: number): void;
    brake(amount: number): void;
    displayInfo(): void;
}

export class Car implements Vehicle {
    brand: string;
    speed: number;
    model: string;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
        this.speed = 0;
    }

    accelerate(amount: number): void {
        this.speed += amount;
        console.log(`${this.brand} ${this.model} accelerates to ${this.speed} km/h`);
    }

    brake(amount: number): void {
        this.speed = Math.max(0, this.speed - amount);
        console.log(`${this.brand} ${this.model} brakes to ${this.speed} km/h`);
    }

    displayInfo(): void {
        console.log(`Car: ${this.brand} ${this.model} | Speed: ${this.speed} km/h`);
    }
}

export class Bike implements Vehicle {
    brand: string;
    speed: number;
    type: string;

    constructor(brand: string, type: string) {
        this.brand = brand;
        this.type = type;
        this.speed = 0;
    }

    accelerate(amount: number): void {
        this.speed += amount;
        console.log(`${this.brand} bike accelerates to ${this.speed} km/h`);
    }

    brake(amount: number): void {
        this.speed = Math.max(0, this.speed - amount);
        console.log(`${this.brand} bike brakes to ${this.speed} km/h`);
    }

    displayInfo(): void {
        console.log(`Bike: ${this.brand} (${this.type}) | Speed: ${this.speed} km/h`);
    }
}

const car = new Car("Toyota", "Camry");
car.accelerate(60);
car.accelerate(40);
car.brake(30);
car.displayInfo();

console.log("---");

const bike = new Bike("Yamaha", "Sport");
bike.accelerate(30);
bike.brake(10);
bike.displayInfo();
