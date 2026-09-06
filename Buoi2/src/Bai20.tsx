interface User {
    id: number;
    name: string;
    email: string;
}

// 1. Hàm tạo ra một Promise tự động báo lỗi (Reject) sau một số mili-giây quy định
function createTimeout(ms: number): Promise<never> {
    return new Promise((_, reject) => 
        setTimeout(() => reject(new Error(`Quá thời gian phản hồi! API không phản hồi sau ${ms / 1000} giây.`)), ms)
    );
}


async function fetchUserWithTimeout(id: number): Promise<User> {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    
    // Tạo Promise gọi API thực tế
    const apiCallPromise = (async () => {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Lỗi HTTP! Status: ${response.status}`);
        return await response.json();
    })();


    // Nếu API chạy mất > 2s, hàm createTimeout thắng cuộc và ném ra Error
    return await Promise.race([
        apiCallPromise,
        createTimeout(2000) 
    ]);
}

// 3. Hàm chạy thử nghiệm
async function main() {
    try {
        console.log("Bắt đầu gọi API với cơ chế Timeout 2s...");
        const startTime = Date.now();

        const user = await fetchUserWithTimeout(1);
        
        const duration = ((Date.now() - startTime) / 1000).toFixed(2);
        console.log(`Thành công! Dữ liệu trả về sau ${duration}s:`, user.name);

    } catch (error: any) {
        console.error("Thất bại:", error.message);
    }
}

main();
