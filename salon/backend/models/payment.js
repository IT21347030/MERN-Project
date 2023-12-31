const mongoose =require('mongoose');

const Schema = mongoose.Schema;

const payScheema = new Schema({
    ref: { type:Number, required:true},
    pName: {type:String, required:true},
    price: { type:Number, required:true},
    quantity: {type:Number, required:true},
    total: { type:Number, required:true},
})

module.exports = mongoose.model("payment",payScheema);