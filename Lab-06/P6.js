const fs= require("fs");

fs.mkdir("dir1",recursive=true, (err)=>{
    if(err){
        if (err.code==="EEXIST") {
            console.log("Directory Already Exists");
        }
        else{
            console.log("Error creating directory");
        }
        return;
    }
    console.log("Directory created successfully");
})

// try {
//     fs.mkdirSync("my-data");
//     console.log("Folder created successfully!");
// } 
// catch (err) {
//     if (err.code === "EEXIST") {
//       console.log("Folder already exists.");
//     } 
//     else {
//         console.error("Error creating folder:", err);
//     }
// }