const http = require("http");
const fs = require("fs");
const path = require("path")
const server = http.createServer((req,res)=>{
    // res.writeHead(200,{"content-type": "text/html"})
    res.setHeader("content-type", "text/plain");
    if (req.url === "/") {
        fs.readFile("home.txt", (err, data)=>{
            if (err) {
                res.end(err);
            }
            res.end(data);
        })
    }
    else if(req.url === "/about"){
        res.end("About Page");
    }
    else if(req.url === "/contact"){
        res.end("Contact Page");
    }
    else if(req.url === "/service"){
        res.end("Service Page");
    }
    else if(req.url === "/more"){
        res.end("More Page");
    }
    else{
        res.statusCode=404
        res.end("404 page not found");
    }
})

server.listen(3000, ()=>{
    console.log("Server at port 3000");
})