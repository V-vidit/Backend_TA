// Add an existing array
arr=[2,3,4,5,6];
arr1=[1,...arr,7];
console.log(arr1);

// Merging array
arr=[1,2,3];
arr1=[4,5,6];
arr2=[...arr,...arr1];
console.log(arr2);

// Converting string to array
let str="Hello";
arr=[...str];
console.log(arr);

//Overriding objects
let user={
    name: "Vidit",
    age: 20
};
console.log(user);
user={...user,age:25};
console.log(user);


