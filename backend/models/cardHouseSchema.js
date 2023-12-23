const mongoose = require('mongoose')
const cardHouseSchema = mongoose.Schema({
 cardName : String,
cardInfo:String,
cardImg:String,
cardPrice: Number

})
const CardHouse = mongoose.model( 'Cards',cardHouseSchema)
module.exports = CardHouse

