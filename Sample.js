const express = require("express");
const app=express();
const path = require("path");
const fs=require("fs");

app.use(express.json())

app.get("/",(req,res)=>{
    res.send(`<h1>Home</h1>`);
})

app.get("/about", (req,res)=>{
    fs.readFile("about.txt", "utf-8",(err,data)=>{
        if (err) {
            res.send(err)
        }
        res.send(data);
    })
})

app.get("/contact", (req,res)=>{
    res.sendFile(path.join(__dirname, "contact.html"));
})

app.get("/more", (req,res)=>{
    const user={
        name: "Vidit",
        age: 20
    }
    res.status(200).json({data: user})
})

app.post("/register", async(req,res)=>{
    const {name, email, password}= req.body;
    res.send(`Name: ${name}, Email: ${email}, Password: ${password}`)
})

app.get("/users/:id/:name", (req,res)=>{
    res.send(`User ID: ${JSON.stringify(req.params)}`)
})

app.get("/admin", (req,res)=>{
    res.send(req.query);
})

app.use((req,res)=>{
    res.status(404).send("Page not found")
})

app.listen(3000,()=>{
    console.log("Server at port number 3000");
})