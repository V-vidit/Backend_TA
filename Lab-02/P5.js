let arr=[1,2,3,4,5];

let [a,b,c, ...rest]=arr;
console.log(a,b,c, rest);

let [x,,y]=arr;
console.log(x,y);

let users=[
    ["Vidit", 20],
    ["Parth", 22]
]

users.map(([name,age])=>{
    console.log(name,age);
})