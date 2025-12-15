const fs= require("fs");

fs.readdir("documents", (err, files)=>{
    if (err) {
        console.log("Error Reading directory",err);
        return;
    }
    console.log("Files: ");
    files.forEach((files)=>{
        console.log(files);
    })
})

// const files = fs.readdirSync("documents");
// console.log("Files:");
// files.forEach(file => console.log(file));
