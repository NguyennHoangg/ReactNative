export class Repository<T extends { id: number; name: string }> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
        console.log(`Added [${item.id}]: ${item.name}`);
    }

    getAll(): T[] {
        return [...this.items];
    }

    findById(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }

    remove(id: number): boolean {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            const removed = this.items.splice(index, 1)[0];
            console.log(`Removed [${id}]: ${removed!.name}`);
            return true;
        }
        return false;
    }

    count(): number {
        return this.items.length;
    }
}

interface UserEntity {
    id: number;
    name: string;
    email: string;
}

const userRepo = new Repository<UserEntity>();
userRepo.add({ id: 1, name: "Hoang", email: "hoang@mail.com" });
userRepo.add({ id: 2, name: "Mai", email: "mai@mail.com" });
userRepo.add({ id: 3, name: "Nam", email: "nam@mail.com" });

console.log(`\nTotal users: ${userRepo.count()}`);
console.log("All users:", userRepo.getAll());
console.log("Find ID 2:", userRepo.findById(2));

userRepo.remove(2);
console.log(`\nAfter removal — total: ${userRepo.count()}`);
