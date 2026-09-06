
interface User {
    id: number;
    name: string;
    email: string;
    username: string;
    phone: string;
}

// 2. Hàm async fetchUser gọi API thật bằng fetch
async function fetchUser(id: number): Promise<User> {
    // Đường dẫn API mẫu thật
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    
    // Gửi request lên server và đợi phản hồi
    const response = await fetch(url);
    
    // Kiểm tra xem phản hồi có thành công không (status code 200-299)
    if (!response.ok) {
        throw new Error(`Lỗi gọi API: Không tìm thấy người dùng (Status: ${response.status})`);
    }
    
    // Chuyển đổi dữ liệu phản hồi từ định dạng JSON sang Object JavaScript
    const data: User = await response.json();
    
    return data;
}

// 3. Hàm chạy thử nghiệm
async function main() {
    try {
        // Gọi API lấy User có ID = 1
        const user = await fetchUser(1);
        console.log(`ID: ${user.id}`);
        console.log(`Tên: ${user.name}`);
        console.log(`Email: ${user.email}`);
        console.log(`Username: ${user.username}`);
        console.log(`Số điện thoại: ${user.phone}`);
        
    } catch (error: any) {
        console.error("\n Đã xảy ra lỗi:", error.message);
    }
}

main();
