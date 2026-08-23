

export class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        if (amount <= 0) throw new Error("Deposit amount must be positive.");
        this.balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
    }

    withdraw(amount: number): void {
        if (amount <= 0) throw new Error("Withdrawal amount must be positive.");
        if (amount > this.balance) throw new Error("Insufficient balance.");
        this.balance -= amount;
        console.log(`Withdrawn: $${amount}. New balance: $${this.balance}`);
    }

    getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(`Final balance: $${account.getBalance()}`);
