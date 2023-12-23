const mongoose = require('mongoose')
const adminSchema = mongoose.Schema({

password:String,
email:{type:String,unique:true},

})
const Admin = mongoose.model( 'Admins',adminSchema)
module.exports = Admin