const express= require("express");
const mongoose= require("mongoose");
const dotenv=require("dotenv");
const app=express();
dotenv.config()
const User=require("./models/user")
const bcrypt=require("bcryptjs")

mongoose.connect(process.env.mongourl).then(()=>{
    console.log("DB Connected");
}).catch((err)=>{
    console.log(err);
})

app.use(express.json())

app.get("/users", async(req,res)=>{
    try{
        const users=await User.find();
        res.json({users: users})
    }
    catch(err){
        res.json({err});
    }
})

app.post("/register", async(req,res)=>{
    try{
        const {name,email,password,phone}= req.body;

        const hashedPassword= await bcrypt.hash(password,10);

        const user=await User.create({
            name,
            email,
            password: hashedPassword,
            phone
        })

        res.json({message: "User created successfully", user: user});
    }
    catch(err){
        res.json({err})
    }
})

app.patch("/update/:id", async(req,res)=>{
    try{
        const user= await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {new:true}
        );

        res.json({message: "User updated successfully", user: user});
    }
    catch(err){
        res.json({err});
    }
})

app.delete("/delete/:id", async(req,res)=>{
    try{
        const user= await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({message: "User not found"});
        }

        res.json({message: "User deleted successfully", deletedUser: user})
    }
    catch(err){
        res.json({err})
    }
})

app.listen(3000)