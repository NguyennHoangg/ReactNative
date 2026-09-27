export interface Payment {
    pay(amount: number): void;
    getPaymentMethod(): string;
}

export class CashPayment implements Payment {
    private cashAvailable: number;

    constructor(cashAvailable: number) {
        this.cashAvailable = cashAvailable;
    }

    pay(amount: number): void {
        if (amount > this.cashAvailable) {
            console.log(`Cash payment failed: insufficient cash ($${this.cashAvailable} available, $${amount} required).`);
        } else {
            this.cashAvailable -= amount;
            console.log(`Cash payment of $${amount} successful. Remaining cash: $${this.cashAvailable}`);
        }
    }

    getPaymentMethod(): string {
        return "Cash";
    }
}

export class CardPayment implements Payment {
    private cardNumber: string;
    private creditLimit: number;

    constructor(cardNumber: string, creditLimit: number) {
        this.cardNumber = cardNumber;
        this.creditLimit = creditLimit;
    }

    pay(amount: number): void {
        if (amount > this.creditLimit) {
            console.log(` Card payment failed: exceeds credit limit ($${this.creditLimit}).`);
        } else {
            this.creditLimit -= amount;
            const masked = `****-****-****-${this.cardNumber.slice(-4)}`;
            console.log(` Card payment of $${amount} via ${masked}. Remaining limit: $${this.creditLimit}`);
        }
    }

    getPaymentMethod(): string {
        return "Card";
    }
}

const payments: Payment[] = [
    new CashPayment(500),
    new CardPayment("1234567890123456", 2000),
];

payments.forEach(p => {
    console.log(`\n[${p.getPaymentMethod()}]`);
    p.pay(150);
    p.pay(400);
});
