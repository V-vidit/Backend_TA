const express=require("express");
const mongoose=require("mongoose");
const app=express();

const dotenv=require("dotenv");
dotenv.config();

mongoose.connect(process.env.mongourl).then(()=>{
    console.log("DB Connected");
}).catch((err)=>{
    console.log(err);
});

const User=require("./models/user");

app.use(express.json());
// GetAll users route
app.get("/users", async(req,res)=>{
    try{
        const users= await User.find();
        res.json({message: "Users fetched successfully", allUsers: users})
    }
    catch(err){
        res.json({err});
    }
})

app.get("/users/:id", async(req,res)=>{
    try{
        const user=await User.findById(req.params.id);

        if (!user) {
            return res.json({message: "User not found"})
        }

        res.json({mesaage: "User fetched", user:user})
    }
    catch(err){
        res.json({err})
    }
})

//Create a user
app.post("/register", async(req,res)=>{
    try{
        const {name,email,password,phone}= req.body;

        const user= await User.create({
            name,
            email,
            password,
            phone
        });

        res.json({message: "User created successfully", newUser: user});
    }
    catch(err){
        res.json({err});
    }
})

app.patch("/update/:id", async(req,res)=>{
    try{
        const users=await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {
                new: true
            }
        );

        if (!users) {
            return res.status(404).json({message: "User not found"});
        }

        res.json({message: "User updated successfully", updatedUser: users});
    }
    catch(err){
        res.json({err});
    }
})

app.delete("/delete/:id", async(req,res)=>{
    try{
        const user= await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({message: "User not found"})
        }

        res.json({message: "User deleted successfully", deletedUser: user})
    }
    catch(err){
        res.json({err})
    }
})

app.listen(3000)
