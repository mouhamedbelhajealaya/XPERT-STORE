const CardHouse = require('../models/cardHouseSchema')
const cardHouseController = {
    getCardHouse:async(req,res)=>{
        const cardHouse = await CardHouse.find()
        res.send(cardHouse)
    },
    createCardHouse:async(req,res)=>{
        const {  cardName ,cardInfo,cardImg,cardPrice} = req.body
        const cardHouse = await CardHouse.findOne({cardName:cardName})
        if(cardHouse)
        res.status(400).json({message:'cardHouse exists'})
        const newCardHouse =  CardHouse.create({  cardName ,cardInfo,cardImg,cardPrice})
        if(!newCardHouse)
        res.status(400).json({message:'CardHouse not created'})
        return  res.status(200).json({message:'CardHouse created'})  
    },
    updateCardHouse:async(req,res)=>{
        await CardHouse.findOneAndUpdate({_id:req.body._id},req.body)
        res.send('update produit')
    },
    deleteCardHouse:async(req,res)=>{
        await CardHouse.findOneAndDelete(req.body._id)
        res.send('delete produit')
    },
}
module.exports = cardHouseController