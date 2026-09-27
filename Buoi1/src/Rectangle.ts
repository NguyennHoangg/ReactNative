export class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }

    calculateAreaAndPerimeter(): { area: number; perimeter: number } {
        return {
            area: this.getArea(),
            perimeter: this.getPerimeter()
        };
    }
}

const rectangle = new Rectangle(10, 20);
const result = rectangle.calculateAreaAndPerimeter();
console.log(`Area: ${result.area}, Perimeter: ${result.perimeter}`);