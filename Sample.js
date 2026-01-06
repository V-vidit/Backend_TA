const express  = require('express')
const User = require('./model/user')
const bcrypt = require('bcrypt')
const dotenv= require('dotenv')
dotenv.config()
const jwt = require('jsonwebtoken')

const app = express()

const mongoose = require('mongoose')

const generateToken = (userId, userName)=>
{
    return jwt.sign({id:userId, name: userName},process.env.secret,{expiresIn:'1h'})
}


const verifyToken=(req,res,next)=>{
    const authheaders=req.headers.authorization;

    
    if(!authheaders){
        return res.json({message:"token missing"})
    }
    const token = authheaders.split(" ")[1];

    try{
        const decoded = jwt.verify(token,process.env.secret)
        req.userId=decoded.id;
        next()
    }
    catch(err){
        res.json({message:"invalid token"})
    }
}
app.use(express.json()) 

mongoose.connect(process.env.mongourl).then(()=>{
    console.log("Db connected");
}).catch((err)=>{
    console.log(err);
    
})


app.post('/register',async (req,res)=>{
    try{
        const {name,email,password,phone}=req.body
        const hashedPassword= await bcrypt.hash(password,10);
        const user = await User.create({
            name,
            email,
            password:hashedPassword,
            phone
    })
    res.json({message:"successfully registered",newUser:user})
    }
    catch(err){
        res.json({err});
    }
})

app.post('/login',async (req,res)=>
{
    try{
        const {email,password}=req.body

        const user = await User.findOne({email});

        if(!user){
            return res.json({message:"user not found"})
        }
        const isPasswordValid=await bcrypt.compare(password,user.password)

        if(!isPasswordValid){
            return res.json({message:"invalid password"})
        }
        const token= generateToken(user._id)
        res.json({ 
            message: "Login successful", 
            token: token, 
            _id: user._id 
        });
    }
    catch(err){
        res.json({err})
    }
})


app.get('/users',verifyToken,async(req,res)=>{
    try {
        const user = await User.find()
        res.json({message:"all user fetched",allusers:user})
    } catch (err) {
            res.json({err})
    }
})

app.listen(3000)