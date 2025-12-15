const fs=require("fs");

// var img;
// img=fs.readFileSync("yt.png")

// console.log(img);
// console.log("Type",typeof(img));


// fs.writeFileSync("new.png", img);

// fs.readFile("yt.png", (err,data)=>{
//     if(err){
//         console.log("Error while reading");
//         return
//     }
//     fs.writeFile("new1.png",data, (err)=>{
//         if (err) {
//             console.log("Error while writing");   
//         }
//         console.log("Done");
        
//     })
// })

const data={
    name:"Vidit",
    age: 20
}

fs.writeFile("Hello.txt", JSON.stringify(data),(err)=>{
    if (err) {
        console.log("Failed");
        return
    }
    console.log("Successfuly");
})