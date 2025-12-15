const {exec} = require("child_process");

exec("node --version", (error, stdout, stderr)=>{
    if (error) {
        console.log(`Error: ${error}`);
        return;       
    }
    if (stderr) {
        console.log(`Error: ${stderr}`);
        return;
    }
    console.log(`Output: ${stdout}`);
})

exec("find /", (error, stdout, stderr)=>{
    if (error) {
        console.log("Error from js file",error);
    }
    if (stderr) {
        console.log("Error from python file", stderr);
    }
    console.log(stdout);
    
})