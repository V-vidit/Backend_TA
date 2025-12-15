const fs= require("fs");

fs.writeFile("data.txt", "Hello World", (err)=>{
    if (err) {
        console.log("Error Writing File", err);
        return;
    }
    console.log("File written successfully");
})

fs.writeFileSync("data.txt", "Hello Synchronously");
