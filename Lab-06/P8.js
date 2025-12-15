const fs=require("fs");

fs.copyFile("data.txt", "data2.txt", (err)=>{
    if (err) {
        console.log("Error copying content", err);
        return;
    }
    console.log("Content copied successfully");
})


fs.copyFileSync("data.txt", "data2.txt");
