//Bai 8
//Create a Promise chain: square the number 2, then double it, then add 5

const promise = new Promise<number>((resolve) => {
    resolve(2);
});

promise
    .then((data) => data * data)
    .then((data) => data * 2)
    .then((data) => data + 5)
    .then((data) => console.log(data))   
    .catch((error) => console.log(error));