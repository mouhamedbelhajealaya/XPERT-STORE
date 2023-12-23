const Router = require("express").Router()
const produitControler = require('../controllers/controllerProduit')
Router.post("/createProduit",produitControler.createProduit)
Router.get("/getProduit",produitControler.getProduit)
Router.delete("/deleteProduit",produitControler.deleteProduit)
Router.put("/updateProduit",produitControler.updateProduit)
module.exports = Router