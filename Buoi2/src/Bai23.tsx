// Định nghĩa cấu trúc dữ liệu của 1 Todo
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean; // true: đã xong, false: chưa xong
}

const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4',
    'https://jsonplaceholder.typicode.com/todos/5'
]

async function fetchIncompleteTodos(urls: string[]): Promise<Todo[]> {
  try {
    // Fetch all URLs in parallel
    const responses = await Promise.all(urls.map(url => fetch(url)));

    // Check all responses are OK
    for (const response of responses) {
      if (!response.ok) {
        throw new Error(`Không thể tải dữ liệu từ API (status: ${response.status})`);
      }
    }

    // Parse all JSON responses
    const allTodos: Todo[] = await Promise.all(responses.map(r => r.json()));

    // Filter incomplete todos
    const incompleteTodos = allTodos.filter(todo => !todo.completed);
    console.log("Danh sách todos chưa hoàn thành:", incompleteTodos);

    return incompleteTodos;
  } catch (error) {
    console.error("Lỗi khi xử lý dữ liệu:", error);
    return [];
  }
}

fetchIncompleteTodos(urls);
