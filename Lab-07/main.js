const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    res.setHeader("content-type", "text/plain")
    if (req.url === "/") {
        fs.readFile("home.txt", (err,data)=>{
            if (err) {
                res.end(err);
            }
            res.end(data);
        })
    }
    else if (req.url === "/about") {
        res.statusCode=200;
        res.end("About page");
    }
    else if(req.url === "/contact"){
        res.statusCode=200;
        res.end("Contact page");
    }
    else{
        res.statusCode=404;
        res.end("Page not found");
    }
})

server.listen(3000,()=>{
    console.log("Server at port 3000");
})