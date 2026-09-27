//Tạo 1 promise và trả về chuỗi "Hello Async" sau 2 giây
const promise = new Promise<string>((resolve) => {
    //Set timeout 2 giây
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});

//Callback .then
promise.then((data) => console.log(data));

//convert to async/await
