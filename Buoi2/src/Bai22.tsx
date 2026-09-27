const urls = [
  'https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/users/2',
  'https://jsonplaceholder.typicode.com/users/3'
];

async function callMultipleAPIsParallel() {
  try {
    const promises = urls.map(url => fetch(url).then(res => res.json()));
    
    const results = await Promise.all(promises);
    
    console.log("Kết quả gọi song song:", results);
  } catch (error) {
    console.error("Một trong các API bị lỗi:", error);
  }
}

callMultipleAPIsParallel();
