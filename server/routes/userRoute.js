const express = require("express");
const router = express.Router();
const User = require("../models/userModel")
const bcrypt= require("bcrypt");
router.post("/register",async (req,res)=>{
    try{
        const userExists = await User.findOne({email:req.body.email});
    if(userExists){
        return res.send({
            success:false,
            message:"User already exists"
        })
    }

    //hasing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt)
    req.body.password = hashedPassword;
    //


    const newUser = await User(req.body)
    console.log(newUser);
    await newUser.save();
    res.send("got the data");
    }catch(err){
        console.log(err);
    }
})

router.post("/login",async (req,res)=>{
    const user = await User.findOne({email:req.body.email});
    if(!user){
        return res.send({
            success:false,
            message:"User does not exist"
        })
    }

    const validPassword = await bcrypt.compare(req.body.password,user.password);

    if(!validPassword){
        return res.send({
            success:false,
            message:"Invalid Password"
        })
    }
    const token=jwt.sign({userId:user._id},process.env.secret_key_jwt,{expiresIn:"1d"})
    res.send({
        success:true,
        message:"User successfully logged in",
        token:token
    })
})

module.exports= router;
