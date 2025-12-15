//Write a program that checks whether the given path is absolute or relative paths.

const path=require("path");

console.log(path.isAbsolute("/users/docs"));
console.log(path.isAbsolute("users/docs"));

