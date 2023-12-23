const mongoose = require('mongoose')
const produitSchema = mongoose.Schema({
nameProduit : String,
infoProduit:String,
imgProduit:String,
priceProduit: Number

})
const Produit = mongoose.model( 'Produits',produitSchema)
module.exports = Produit

