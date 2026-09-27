
export abstract class Shape {
    abstract area(): number;

    displayArea(): void {
        console.log(`${this.constructor.name} area: ${this.area().toFixed(2)}`);
    }
}

export class Square extends Shape {
    private side: number;

    constructor(side: number) {
        super();
        this.side = side;
    }

    area(): number {
        return this.side * this.side;
    }
}

export class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const square = new Square(5);
const circle = new Circle(7);

square.displayArea();
circle.displayArea();
