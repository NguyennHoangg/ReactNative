function filterEvenNumbersAsync(numbers: Array<number>) {
  return new Promise((resolve, reject) => {
    // Wait for 1 second (1000 milliseconds)
    setTimeout(() => {
      // Check if the input is a valid array
      if (!Array.isArray(numbers)) {
        reject(new Error("Input must be an array"));
        return;
      }

      // Filter even numbers (numbers divisible by 2)
      const evenNumbers = numbers.filter(num => num % 2 === 0);
      resolve(evenNumbers);
    }, 1000);
  });
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Bắt đầu xử lý...");
filterEvenNumbersAsync(inputArray)
  .then(result => {
    console.log("Kết quả sau 1s:", result); // Output after 1 second: [2, 4, 6, 8, 10]
  })
  .catch(error => {
    console.error("Lỗi:", error.message);
  });
