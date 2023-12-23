const express = require("express");
const dotenv = require("dotenv");
const app = express()
const cardHouseRouter = require('./routes/cardHouseRouter')
const produitRouter = require('./routes/produitRouter')
const userRoutes = require('./routes/userRoutes')
const adminRouter = require('./routes/adminRouter')

const cors = require("cors");
const connectDB = require("./helpers/connectDB");


app.use(cors())
dotenv.config()
app.use(express.json())
app.use('/cardHouse',cardHouseRouter)
app.use('/produit',produitRouter)
app.use('/user',userRoutes)
app.use('/admin',adminRouter)



const PORT = process.env.PORT ;
connectDB()
app.listen(PORT, () => {
console.log(`Server Running on port ${PORT}`);
});