//Write an async function that takes a number, multiplies it by 3 after 1 second, and returns the result.
async function multiThreeAsync(num: number) {
   return await new Promise(resolve => setTimeout(() => resolve(num * 3), 2000))
}

//Call async function
async function main() {
    const result = await multiThreeAsync(2).then(res => console.log(res));
}

//Run function
main();