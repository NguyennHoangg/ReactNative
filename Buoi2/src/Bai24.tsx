// 1. Định nghĩa cấu trúc dữ liệu gửi đi và nhận về từ API bài viết (Post)
interface PostData {
    title: string;
    body: string;
    userId: number;
}

interface PostResponse extends PostData {
    id: number; // API thật thường trả thêm trường ID tự động tăng sau khi tạo thành công
}

// 2. Viết hàm async postData nhận dữ liệu và gửi lên API mẫu
async function postData(newPost: PostData): Promise<PostResponse> {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const response = await fetch(url, {
        method: "POST", // Phương thức gửi dữ liệu
        headers: {
            "Content-Type": "application/json; charset=UTF-8" // Định dạng dữ liệu gửi đi
        },
        body: JSON.stringify(newPost) // Chuyển Object thành chuỗi JSON
    });

    // Kiểm tra xem server có xử lý thành công không (POST thành công thường trả về status 201 Created)
    if (!response.ok) {
        throw new Error(`Gửi dữ liệu thất bại! HTTP Status: ${response.status}`);
    }

    // Nhận dữ liệu phản hồi (chứa thông tin vừa tạo kèm ID mới)
    const result: PostResponse = await response.json();
    return result;
}

// 3. Hàm chạy thử nghiệm
async function main() {
    try {
        console.log("Đang gửi dữ liệu (POST) lên server...");
        
        // Dữ liệu mẫu cần tạo mới
        const payload: PostData = {
            title: "Học lập trình Async/Await",
            body: "Bài tập số 24 hướng dẫn cách gửi request POST bằng Fetch API",
            userId: 1
        };

        const createdPost = await postData(payload);
        console.log("Dữ liệu đã tạo thành công trên hệ thống giả lập:");
        console.log(createdPost);


    } catch (error: any) {
        console.error("\n Đã xảy ra lỗi khi POST:", error.message);
    }
}

main();
