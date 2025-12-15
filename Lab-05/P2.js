const cp=require("child_process");
const { chdir } = require("process");

const child=cp.spawn("find",["/"]);

child.stderr.on('data',(data)=>{
    console.log(`STDERR: ${data}`);    
})

child.stdout.on('data',(data)=>{
    console.log(`STDOUT: ${data}`);    
})

child.on('close', (data)=>{
    console.log(`CLOSE: ${data}`);
})