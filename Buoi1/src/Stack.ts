export class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
        console.log(`Pushed: ${JSON.stringify(item)} | Stack size: ${this.items.length}`);
    }

    pop(): T {
        if (this.isEmpty()) throw new Error("Stack is empty.");
        const item = this.items.pop()!;
        console.log(`Popped: ${JSON.stringify(item)} | Stack size: ${this.items.length}`);
        return item;
    }

    peek(): T {
        if (this.isEmpty()) throw new Error("Stack is empty.");
        return this.items[this.items.length - 1]!;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    display(): void {
        console.log("Stack (top → bottom):", [...this.items].reverse());
    }
}

const stack = new Stack<number>();
console.log(`isEmpty: ${stack.isEmpty()}`);

stack.push(10);
stack.push(20);
stack.push(30);

stack.display();
console.log(`Peek: ${stack.peek()}`);

stack.pop();
stack.pop();

stack.display();
console.log(`Size: ${stack.size()}`);
