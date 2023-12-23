
const jwt =require('jsonwebtoken')
 const User = require('../models/userSchema')
const isAuth=(req,res,next)=>{

  if(!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')){
    return res.status(401).json({msg:'Unauthorized'})
  }


  else{
    const token=req.headers.authorization.split(" ")[1]
    jwt.verify(token,process.env.TOKEN_SECRET,async(err,decoded)=>{
      if (err){
        return res.status(401).json({msg:'Unauthorized'})
      }
      else{
      
        const user=await User.findById(decoded.id)
        req.user=user
        next()
        
      }
    })

  }



}

module.exports=isAuth