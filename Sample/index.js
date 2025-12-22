const express = require('express')
require('dotenv').config()
const app=express();
const mongoose=require('mongoose');
const user =require('./models/user');
app.use(express.json())


mongoose.connect(process.env.mongourl).then(()=>{
    console.log("mongo connection successful");
}).catch((err)=>{
    console.log(err);
})


app.post('/register',async(req,res)=>{
    const User= new user({
        "name":"parth",
        "email":"email@gmail.com",
        "password":"1234",
        "phone":1234567890
    });
     const newUser=await User.save();

     return res.status(200).json({message:"successfully registered",newUser})

})

app.listen(3000,()=>{
    console.log("server started at 3000");
    
})