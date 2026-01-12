const express = require("express");
const router= express.Router();

const mongoose=require("mongoose");
const User= require("../models/user");



router.get("/", async(req,res)=>{
    const users=await User.find();
    return res.status(200).json({users: users});
})

router.post("/register", async(req,res)=>{
    const {name,email, password, phone}= req.body;

    const user=await User.create({
        name,
        email,
        password,
        phone
    });

    return res.status(200).json({message: "User registered successfully", user: user});
})

router.patch("/update/:id", async(req,res)=>{
    const user= await User.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        {new: true}
    );

    res.json({method: "Patch", updatedUser:user});
}) 


router.delete("/delete/:id", async(req,res)=>{
    const deletedUser= await User.findByIdAndDelete(req.params.id);
    
    if(!deletedUser){
        return res.status(404).json({message: "User not found"});
    }

    res.json({
        message: "User deleted successfully",
        user: deletedUser
    })
})

router.get("/search", async (req, res) => {
    try{
        let {search, page=1, limit=5} = req.query;

        const skip=(page-1)*limit;

        let filter={};
        if (search) {
            filter = {
                $or: [
                    {name: { $regex: search, $options: "i"}},
                    {email: { $regex: search, $options: "i"}}
                ] 
            }
        }

        const total=await User.countDocuments(filter);
        const users = await User.find(filter).skip(skip).limit(limit).sort({createdAt: -1});

        res.status(200).json({
          message: "Users fetched",
          total,
          page,
          limit,
          users
        });
    }
    catch(err){
        res.status(500).json({message: "Internal Server Error"});
    }
});

module.exports=router;