// Hàm nhân 3 sau 1 giây
async function multiThreeAsync(num: number): Promise<number> {
    return await new Promise(resolve => setTimeout(() => resolve(num * 3), 1000));
}

async function main() {
    // 1. Tạo một mảng chứa các Promise
    const promisesArray = [
        multiThreeAsync(1),
        multiThreeAsync(2),
        multiThreeAsync(3)
    ];

    console.log("Bắt đầu duyệt qua các Promise bằng for await...of:");
    const startTime = Date.now();

    // 2. Sử dụng for await...of để lấy trực tiếp giá trị đã resolve từ mỗi Promise
    for await (const result of promisesArray) {
        console.log(`Nhận được kết quả: ${result}`);
    }

    const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`Vòng lặp kết thúc sau: ${totalTime} giây`);
}

main();
