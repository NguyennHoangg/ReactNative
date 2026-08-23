export class MathUtil {
    private constructor() {} // Prevent instantiation

    static add(a: number, b: number): number {
        return a + b;
    }

    static subtract(a: number, b: number): number {
        return a - b;
    }

    static multiply(a: number, b: number): number {
        return a * b;
    }

    static divide(a: number, b: number): number {
        if (b === 0) throw new Error("Cannot divide by zero.");
        return a / b;
    }

    static power(base: number, exp: number): number {
        return Math.pow(base, exp);
    }
}

const a = 10, b = 3;
console.log(`${a} + ${b} = ${MathUtil.add(a, b)}`);
console.log(`${a} - ${b} = ${MathUtil.subtract(a, b)}`);
console.log(`${a} * ${b} = ${MathUtil.multiply(a, b)}`);
console.log(`${a} / ${b} = ${MathUtil.divide(a, b).toFixed(4)}`);
console.log(`${a} ^ ${b} = ${MathUtil.power(a, b)}`);
