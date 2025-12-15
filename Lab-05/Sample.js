const child_process=require("child_process");

child_process.spawn("find",["/"]).stdout.on('data', (data)=>{
    console.log("Stdout: ",data);
})

child_process.spawn("find",["/"]).stderr.on('data', (data)=>{
    console.log("Stderr",data);
})

child_process.spawn("find",["/"]).stdout.on('close', (data)=>{
    console.log("CLose: ",data);
})