//12. Write an async function that calls simulateTask(2000) and logs the result.
function simulateTask(time: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done")
        }, time)
    })
}
async function runAsync() {
    await simulateTask(2000);
    console.log("Task done")
}

runAsync();