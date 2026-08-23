
export class User {
    private _name: string;
    private _email: string;

    constructor(name: string, email: string) {
        this._name = name;
        this._email = email;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (value.trim() === "") throw new Error("Tên không được để trống");
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        if (!value.includes("@")) throw new Error("Email không hợp lệ");
        this._email = value;
    }

    displayInfo(): void {
        console.log(`User: ${this._name}, Email: ${this._email}`);
    }
}

const user = new User("Hoang Nguyen", "hoang@example.com");
user.displayInfo();

user.name = "Nguyen Hoang";
user.email = "nguyen@example.com";
user.displayInfo();
