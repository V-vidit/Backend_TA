// Write a program that prints the total memory and free memory in GB.

const os=require("os");

let totalMem=os.totalmem();
let totalMemGB= totalMem/(1024*1024*1024);

console.log(totalMemGB);

let freeMem=os.freemem();
let freeMemGB=freeMem/(1024*1024*1024);

console.log(freeMemGB);

