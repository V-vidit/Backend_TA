const { log } = require("console");
const { read } = require("fs");
const { stdin } = require("process");
const readLine=require("readline");

const rl=readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter number", (input)=>{
    rl.close();
})