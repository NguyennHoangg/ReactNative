
export class Account {
    public username: string;
    private password: string;
    readonly accountId: string;
    private balance: number;

    constructor(username: string, password: string, accountId: string, balance: number) {
        this.username = username;
        this.password = password;
        this.accountId = accountId;
        this.balance = balance;
    }

    verifyPassword(input: string): boolean {
        return this.password === input;
    }

    getBalance(): number {
        return this.balance;
    }

    displayPublicInfo(): void {
        console.log(`Account ID: ${this.accountId}, Username: ${this.username}`);
    }
}

const acc = new Account("hoang99", "secret123", "ACC-001", 5000);
acc.displayPublicInfo();
console.log(`Balance: $${acc.getBalance()}`);
console.log(`Password correct: ${acc.verifyPassword("secret123")}`);
// acc.accountId = "NEW"; // Error: cannot assign to readonly field
// console.log(acc.password); // Error: private field
