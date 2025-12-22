const express= require("express");
const router=express.Router();
const User=require("../models/user");
const authMiddleware= require("../middlewares/authMiddleware");

router.get("/",authMiddleware,async(req,res)=>{
    const user= await User.find();
    return res.status(200).json({users: user});
})

router.post("/register", async(req,res)=>{
    const user=new User({
        name:"Vishu",
        email: "vishu@gmail.com",
        password: "12345678",
        phone: 9999988888
    });

    const newUser = await user.save();

    return res.status(200).json({message: "User registered successfully", user: newUser})

})


module.exports=router;