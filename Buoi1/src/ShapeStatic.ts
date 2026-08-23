export class Shape {
    name: string;
    color: string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    static describe(): void {
        console.log("A Shape is a geometric figure defined by its boundaries.");
    }

    static compareAreas(a: { area(): number }, b: { area(): number }): string {
        const aArea = a.area();
        const bArea = b.area();
        if (aArea > bArea) return "First shape has a larger area.";
        if (aArea < bArea) return "Second shape has a larger area.";
        return "Both shapes have equal areas.";
    }

    toString(): string {
        return `${this.color} ${this.name}`;
    }
}

class Circle extends Shape {
    radius: number;
    constructor(color: string, radius: number) {
        super("Circle", color);
        this.radius = radius;
    }
    area(): number { return Math.PI * this.radius ** 2; }
}

class Square extends Shape {
    side: number;
    constructor(color: string, side: number) {
        super("Square", color);
        this.side = side;
    }
    area(): number { return this.side ** 2; }
}

// Static method called without instantiation
Shape.describe();

const circle = new Circle("Red", 5);
const square = new Square("Blue", 8);

console.log(`${circle} area: ${circle.area().toFixed(2)}`);
console.log(`${square} area: ${square.area().toFixed(2)}`);
console.log(Shape.compareAreas(circle, square));
