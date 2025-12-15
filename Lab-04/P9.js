// Write a program that prints how long the system has been running (uptime) in seconds and in
// hours.

const os=require("os");
console.log("Uptime: ",os.uptime()/(60*60));
