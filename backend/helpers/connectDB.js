const mongoose = require('mongoose')
require('dotenv').config()
const connectDB = ()=>{
    try {
        mongoose.connect(process.env.DB_URL)
        console.log('connectDB');
    } catch (error) {
        console.log('DBnotCnnect');
    }
}
module.exports =connectDB
