// Write a program that prints: (A)
// • Operating system name
// • Release version
// • Platform
// • Architecture

const os=require("os");

console.log("OS type: ", os.type()); //os name
console.log("Release version: ", os.version());
console.log("OS platform: ", os.platform());
console.log("Architecture", os.arch());
