//13. Handle errors using try/catch with async/await.
const handleAsync = async() =>{
    try {
        await Promise.reject("Error");
    } catch (error) {
        console.log(error);
    }
}

handleAsync();