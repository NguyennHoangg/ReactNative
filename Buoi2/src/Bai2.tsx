//Bai 2
//Viết 1 funtion  trả về số 10 sau 1 giây
const promise = new Promise<number>((resolve) =>{   
    //Set time out 1 giây
    setTimeout(() =>{
        resolve(10);
    }, 1000);
});

//Callback .then
promise.then((data) => console.log(data));