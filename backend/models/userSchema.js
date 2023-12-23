const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
name : String,
password:String,
email:{type:String,unique:true},
telephoneNumber: Number
})
const User = mongoose.model( 'Users',userSchema)
module.exports = User