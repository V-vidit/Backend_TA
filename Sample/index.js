const express=require("express");
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");

dotenv.config();

const app=express();

mongoose.connect(process.env.mongourl).then(()=>{
    console.log("DB Connected");
}).catch((err)=>{
    console.log(err);
})

const User=require("./models/user");

app.use(express.json())

app.get("/users", async(req,res)=>{
    try{
        const users= await User.find();
        res.json({message: "Users fetched successfully", allUsers: users})
    }
    catch(err){
        res.json({err});
    }
})

app.get("/users/:id",async(req,res)=>{
    try{
        const user= await User.findById(req.params.id);
        if (!user) {
            return res.json({message: "User not found"})
        }
        res.json({message:"User fetched", user:user})
    }
    catch(err){
        res.json({err});
    }
})

app.post("/register", async(req,res)=>{
    try{
        const {name, email, password, phone}= req.body;

        const hashedPassword= await bcrypt.hash(password, 10);

        const newUser= await User.create({
            name,
            email,
            password: hashedPassword,
            phone
        });
        res.json({message: "User registered successfully", newUser: newUser});
    }
    catch(err){
        res.json({err});
    }
})

app.patch("/update/:id", async(req,res)=>{
    try{
        const user=await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {
                new: true
            }   
        );
        if (!user) {
            return res.status(404).json({message: "User not found"})
        }
        res.json({message: "User updated successfully", updatedUser: user});
    }
    catch(err){
        res.json({err});
    }
})

app.delete("/delete/:id", async(req,res)=>{
    try{
        const user=await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.json({message: "User not  found"})
        }
        res.json({message: "User deleted successfully", deletedUser: user})
    }
    catch(err){
        res.json({err})
    }
})

app.post("/login", async(req,res)=>{
    try{
        const {email, password}= req.body;

        if (!email || !password) {
            return res.status(400).json({message: "Missing credentials"});
        }

        const user = await User.findOne({email});

        if (!user) {
            return res.status(401).json({message: "Invalid Credentials"});
        }

        const isMatch= await bcrypt.compare(password,user.password);

        if (!isMatch) {
            return res.status(401).json({message: "Invalid credentials"})
        }

        

    }
})

app.listen(3000);