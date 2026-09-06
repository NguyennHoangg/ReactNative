interface User {
    id: number;
    name: string;
    email: string;
    username: string;
    phone: string;
}
async function fetchUser(id: number): Promise<User> {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error fetching user with ID ${id}`);
    }
    const data: User = await response.json();
    return data;
}

async function main() {
    try {
        const user = await fetchUser(5);
        console.log(`ID: ${user.id}`);
        console.log(`Name: ${user.name}`);
        console.log(`Email: ${user.email}`);
        console.log(`Username: ${user.username}`);
        console.log(`Phone: ${user.phone}`);
    } catch (error: any) {
        console.error(`Error: ${error.message}`);
    }
}

main();