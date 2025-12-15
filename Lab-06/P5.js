const fs= require("fs");

fs.unlink("data.txt", (err)=>{
    if (err) {
        console.log("Error deleting file");
        return;
    }
    console.log("File deleted successfully");
})

fs.unlinkSync("data.txt");

