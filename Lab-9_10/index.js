const express = require("express");
const mongoose = require("mongoose");
const authMiddleware= require("./middlewares/authMiddleware")
const dotenv=require("dotenv");

dotenv.config();
const app=express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB Connected");
}).catch((err)=>{
    console.log(err);  
})

const userRoutes=require("./routes/userRoutes");

// app.use("/users", authMiddleware, userRoutes)
app.use('/users', userRoutes);

app.listen(3000,()=>{
    console.log("Server at port 3000");
})