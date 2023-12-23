const Router = require("express").Router()
const adminControler = require('../controllers/adminController')
Router.post("/addAdmin",adminControler.addAdmin)
Router.post("/login",adminControler.login )
module.exports = Router