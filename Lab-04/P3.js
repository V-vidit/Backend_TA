//  Write a program to fix the path="//folder//subfolder////file.txt" using path.normalize() and
// display the clean normalised path.

const path=require("path");

console.log(path.normalize("//folder//subfolder////file.txt"));
