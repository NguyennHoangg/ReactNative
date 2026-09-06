//Bai 3
/*
Write a function that rejects a Promise with the error "Something went wrong" after 1
second.
*/
const promise = new Promise<string>((_resolve, reject) => {
  //Set time out 1 giây
  setTimeout(() => {
    //Reject promise
    reject(new Error("Something went wrong"));
  }, 1000);
});

//Callback .catch
promise.catch((error) => console.log(error));
