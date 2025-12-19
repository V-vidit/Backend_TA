const express= require("express");

const app = express();

app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Home page");
})

app.get("/users", (req,res)=>{
    res.send(req.query);
})

app.post("/register",(req,res)=>{
    const {name,email,password} = req.body;
    res.send(`Name: ${name}, Email: ${email}, Password: ${password},`)
})

app.get("/users/:name",(req,res)=>{
    res.send(req.params.name);
})



app.use((req,res)=>{
    res.status(404).send("Page not found")
})



app.listen(3000,()=>{
    console.log("Server at port 3000");
})