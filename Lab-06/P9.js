const fs= require("fs");

if(fs.existsSync("config.json")){
    console.log("config.json exists");
}
else{
    console.log("config.json doesnt exists");
}