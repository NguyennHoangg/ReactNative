export class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

    setValue(value: T): void {
        this.value = value;
    }

    displayInfo(): void {
        console.log(`Box contains [${typeof this.value}]: ${JSON.stringify(this.value)}`);
    }
}

const numberBox = new Box<number>(42);
const stringBox = new Box<string>("Hello, TypeScript!");
const boolBox   = new Box<boolean>(true);
const arrayBox  = new Box<number[]>([1, 2, 3, 4, 5]);

numberBox.displayInfo();
stringBox.displayInfo();
boolBox.displayInfo();
arrayBox.displayInfo();

numberBox.setValue(100);
console.log(`Updated number box: ${numberBox.getValue()}`);
