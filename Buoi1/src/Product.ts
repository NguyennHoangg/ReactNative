
export class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    displayInfo(): void {
        console.log(`Product: ${this.name}, Price: $${this.price}`);
    }
}

const products: Product[] = [
    new Product("Laptop", 999),
    new Product("Mouse", 25),
    new Product("Keyboard", 150),
    new Product("USB Hub", 40),
    new Product("Monitor", 450),
    new Product("Mousepad", 15),
];

console.log("All products:");
products.forEach(p => p.displayInfo());

const expensive = products.filter(p => p.price > 100);
console.log("\nProducts with price > $100:");
expensive.forEach(p => p.displayInfo());
