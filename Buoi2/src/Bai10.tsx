//Bai 10
//Use .finally() to log "Done" when a Promise finishes (success or failure).
const promise = new Promise((resolve, reject) => {
    // resolve("Success");
    reject(new Error("Failure"))
});

promise.then((data) => console.log(data)).catch((error) => console.log(error)).finally(() => {
    console.log("Done");
});