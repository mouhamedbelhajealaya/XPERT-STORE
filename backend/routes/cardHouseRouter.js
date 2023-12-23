const Router = require("express").Router()
const cardHouseController = require('../controllers/cardHouseController')
Router.post("/createCardHouse",cardHouseController.createCardHouse)
Router.get("/getCardHouse",cardHouseController.getCardHouse)
Router.delete("/deleteCardHouse",cardHouseController.deleteCardHouse)
Router.put("/updateCardHouse",cardHouseController.updateCardHouse)
module.exports = Router