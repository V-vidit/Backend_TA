// Write a Node.js program that prints: (B)
// • Number of CPU cores
// • Model name of each core
// • Network interface details

const os=require("os");

console.log("CPU information(cores and its details)",os.cpus());
console.log("Network Interfaces: ",os.networkInterfaces());
