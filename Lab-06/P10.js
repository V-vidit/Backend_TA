const fs= require("fs");

fs.watch("data.txt", ()=>{
    console.log("File changed");
})

