const { Schema, model } = require("mongoose");

const PurchasesSchema = new Schema({
    nombre:{type:String},
    desc: {type:String},
    monto: {type:Number},
},{timestamps:true})

module.exports = model ('Purchases', PurchasesSchema)