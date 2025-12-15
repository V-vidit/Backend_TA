// Write a Node.js program that prints the 
//      -directory name, 
//      -file name, 
//      -file extension, 
//      -and full path of the code file.

const path=require("path");

console.log("Current Directory(Directory Path): ", __dirname);
console.log("File name: ", path.basename(__filename));
console.log("File extension: ", path.extname(__filename));
console.log(__filename);