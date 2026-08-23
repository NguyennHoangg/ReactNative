import { Book } from "./Book.js";
import { User } from "./User.js";

export class Library {
    private books: Book[] = [];
    private users: User[] = [];

    addBook(book: Book): void {
        this.books.push(book);
        console.log(`Book added: "${book.title}"`);
    }

    addUser(user: User): void {
        this.users.push(user);
        console.log(`User registered: ${user.name}`);
    }

    listBooks(): void {
        console.log("\n Library Books:");
        if (this.books.length === 0) {
            console.log("  No books available.");
        } else {
            this.books.forEach((b, i) => console.log(`  ${i + 1}. "${b.title}" by ${b.author} (${b.year})`));
        }
    }

    listUsers(): void {
        console.log("\n Registered Users:");
        if (this.users.length === 0) {
            console.log("  No users registered.");
        } else {
            this.users.forEach((u, i) => console.log(`  ${i + 1}. ${u.name} (${u.email})`));
        }
    }
}

const library = new Library();

library.addBook(new Book("Clean Code", "Robert C. Martin", 2008));
library.addBook(new Book("The Pragmatic Programmer", "Andrew Hunt", 1999));
library.addBook(new Book("Design Patterns", "Gang of Four", 1994));

library.addUser(new User("Hoang Nguyen", "hoang@example.com"));
library.addUser(new User("Thi Mai", "mai@example.com"));

library.listBooks();
library.listUsers();
