// Hàm nhân 3 sau 1 giây
async function multiThreeAsync(num: number): Promise<number> {
    return await new Promise(resolve => setTimeout(() => resolve(num * 3), 1000));
}

// Hàm main gọi tuần tự nhiều hàm async
async function main() {
    console.log("Bắt đầu chạy tuần tự...");
    const startTime = Date.now();

    // Gọi lần đầu tiên
    const step1 = await multiThreeAsync(2); 
    console.log(`Kết quả bước 1 (sau 1s): ${step1}`); 

    // Lấy kết quả bước 1 làm đầu vào cho lần gọi tiếp theo
    const step2 = await multiThreeAsync(step1); 
    console.log(`Kết quả bước 2 (sau 2s): ${step2}`); 

    // Tiếp tục gọi tuần tự lần ba
    const step3 = await multiThreeAsync(step2); 
    console.log(`Kết quả bước 3 (sau 3s): ${step3}`); 

    const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`Tổng thời gian hoàn thành tuần tự: ${totalTime} giây`); 
}

main();
