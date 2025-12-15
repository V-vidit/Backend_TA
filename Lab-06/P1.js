const fs = require("fs");


console.log("Start");
fs.readFile("data.txt", (err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Data: ",data.toString());
});
console.log("End");
