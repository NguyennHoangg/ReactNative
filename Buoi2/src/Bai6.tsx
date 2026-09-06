const promise1 = new Promise<string>((resolve) => {
    resolve("Promise 1 run");
});

const promise2 = new Promise<string>((resolve) => {
    resolve("Promise 2 run");
});

const promise3 = new Promise<string>((resolve) => {
    resolve("Promise 3 run");
});


const promises = [promise1, promise2, promise3];

//Return data of all promise
Promise.all(promises)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
//Bai 7 -Use Promise.race() to return whichever Promise resolves first.
//Return data of first promise
Promise.race(promises)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));