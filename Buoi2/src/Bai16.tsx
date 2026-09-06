// Hàm nhân 3 sau 1 giây
async function multiThreeAsync(num: number): Promise<number> {
    return await new Promise(resolve => setTimeout(() => resolve(num * 3), 1000));
}

async function main() {
    console.log("Bắt đầu chạy song song...");
    const startTime = Date.now();

    // Tạo một mảng gồm các Promise 
    const promises = [
        multiThreeAsync(2),  
        multiThreeAsync(5),  
        multiThreeAsync(10)  
    ];

    // Dùng Promise.all để đợi TẤT CẢ các Promise trong mảng hoàn thành
    // Kết quả trả về là một mảng chứa các giá trị theo đúng thứ tự
    const results = await Promise.all(promises);

    console.log("Mảng kết quả nhận được:", results); 
    
    const [res1, res2, res3] = results;
    console.log(`Kết quả lẻ: ${res1}, ${res2}, ${res3}`);

    const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`Tổng thời gian hoàn thành song song: ${totalTime} giây`); 
}

main();
