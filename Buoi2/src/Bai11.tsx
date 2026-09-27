
//Convert to async/await
async function runAsync2() {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Async")
        }, 2000)
    })
    console.log("Hello Async")
}

runAsync2();