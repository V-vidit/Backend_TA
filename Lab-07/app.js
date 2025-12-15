const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res)=>{
    if (req.url === "/") {
        fs.readFile("home.txt", (err,data)=>{
            if (err) {
                res.end("Error reading file")
            }
            res.end(data);
        })
    }
    else if(req.url === "/about"){
        res.end("Abiut page")
    }
})

server.listen(5001);