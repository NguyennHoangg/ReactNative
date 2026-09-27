interface Todo {
    id: number,
    userId: number,
    title: string,
    completed: boolean
}
async function fetchTodo(id: number): Promise<Todo> {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error fetching todo with ID ${id}`);
    }
    const data: Todo = await response.json();
    return data;
}

async function main() {
    try {
        const todo = await fetchTodo(20);
        console.log(`ID: ${todo.id}`);
        console.log(`User ID: ${todo.userId}`);
        console.log(`Title: ${todo.title}`);
        console.log(`Completed: ${todo.completed}`);
    } catch (error: any) {
        console.error(`Error: ${error.message}`);
    }
}

main();