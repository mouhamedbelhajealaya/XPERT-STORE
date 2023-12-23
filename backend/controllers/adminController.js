const Admin = require('../models/adminSchema')
const dotenv = require('dotenv')
const { json } = require('express')
const bcrypt = require('bcryptjs');
var jwt= require('jsonwebtoken')
dotenv.config()
const adminController = {
    addAdmin:async(req,res)=>{
        const {email,password}=req.body
        if (!email || !password )
        return res.status(400).json({message:'missed information'})
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const newAdmin=await Admin.create({email:email,password:hash})
        if (!newAdmin)
        return res.status(400).json({message:'admin not created'})
        return res.status(200).json({_id:newAdmin._id,email:newAdmin.email, token:genTokenAdmin(newAdmin._id ,newAdmin.email,newAdmin.password ), message:"admin created"})

        
    },
login:async(req,res)=>{
    const {email,password}=req.body;
    if(!email||!password){
        return res.status(400).json({msg:'Please enter all fields'})
    }
    const admin=await Admin.findOne({email})
    if(!admin){
        return res.status(400).json({msg:'email does not exist'})
    }
    const isMatch=await bcrypt.compare(password,admin.password)
    if(!isMatch){
        return res.status(400).json({msg:'password is incorrect'})
    }
    return res.status(200).json({_id:admin._id,email:admin.email,  token:genTokenAdmin(admin._id,admin.email), message:"log in"})
},
}
const genTokenAdmin =(id,email)=>{
    return jwt.sign({_id:id,email:email} , process.env.JWT_SECRT_ADMIN )
    }
module.exports = adminController