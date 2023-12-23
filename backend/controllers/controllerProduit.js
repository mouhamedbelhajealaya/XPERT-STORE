const Produit = require('../models/produitSchema')
const produitController = {
    getProduit:async(req,res)=>{
        const produit = await Produit.find()
        res.send(produit)
    },
    createProduit:async(req,res)=>{
        const {  nameProduit ,infoProduit,imgProduit,priceProduit} = req.body
        const produit = await Produit.findOne({nameProduit:nameProduit})
        if(produit)
        res.status(400).json({message:'produit exists'})
        const newProduit =  Produit.create({  nameProduit ,infoProduit,imgProduit,priceProduit})
        if(!newProduit)
        res.status(400).json({message:'produit not created'})
        return  res.status(200).json({message:'produit created'})  
    },
    updateProduit:async(req,res)=>{
        await Produit.findOneAndUpdate({_id:req.body._id},req.body)

        res.send('update produit')
    },
    deleteProduit:async(req,res)=>{
        await Produit.findOneAndDelete(req.body._id)
        res.send('delete produit')
    },
}
module.exports = produitController