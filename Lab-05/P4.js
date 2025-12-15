const url = "https://www.demo.com/path/path_1/path_2?name=Vidit&age=100&city=Rajkot";

const urlObj=new URL(url);

console.log("Protocol:", urlObj.protocol);

console.log("Hostname:", urlObj.hostname);

console.log("Pathname:", urlObj.pathname);

console.log("Query Parameters:");
urlObj.searchParams.forEach((value, key) => {
    console.log(`\t${key}: ${value}`);
});
