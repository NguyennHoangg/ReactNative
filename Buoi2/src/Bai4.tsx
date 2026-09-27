//Bai5
//Create a function simulateTask(time) that returns a Promise resolving with "Task done" after time ms
function simulateTask(time: any) {
    //return Promise
  return new Promise<string>((resolver) => {
    //Set time out sau khoang thoi gian cahy
    setTimeout(() => {
      resolver("Task done");
    }, time);
  });
}

simulateTask(3000)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));