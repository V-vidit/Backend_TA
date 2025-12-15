const fs= require("fs");

fs.appendFile("data.txt", "\nNew line added", (err)=>{
    if (err) {
        console.log("Error appending file", err);
        return;
    }
    console.log("Successfully appended");
})

  fs.appendFileSync("data.txt", "\nAppended using synchronously");
