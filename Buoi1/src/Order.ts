import { Product } from "./Product.js";

export class Order {
    private orderId: string;
    private products: Product[] = [];

    constructor(orderId: string) {
        this.orderId = orderId;
    }

    addProduct(product: Product): void {
        this.products.push(product);
        console.log(`Added "${product.name}" ($${product.price}) to order ${this.orderId}`);
    }

    removeProduct(name: string): void {
        const index = this.products.findIndex(p => p.name === name);
        if (index !== -1) {
            this.products.splice(index, 1);
            console.log(`Removed "${name}" from order.`);
        } else {
            console.log(`Product "${name}" not found in order.`);
        }
    }

    calculateTotal(): number {
        return this.products.reduce((sum, p) => sum + p.price, 0);
    }

    displayOrder(): void {
        console.log(`\n Order ID: ${this.orderId}`);
        if (this.products.length === 0) {
            console.log("  No products in this order.");
        } else {
            this.products.forEach((p, i) => console.log(`  ${i + 1}. ${p.name} — $${p.price}`));
            console.log(`  ─────────────────`);
            console.log(`  Total: $${this.calculateTotal()}`);
        }
    }
}

const order = new Order("ORD-2024-001");
order.addProduct(new Product("Laptop", 999));
order.addProduct(new Product("Mouse", 25));
order.addProduct(new Product("Keyboard", 150));
order.addProduct(new Product("Monitor", 450));

order.displayOrder();

order.removeProduct("Mouse");
order.displayOrder();
