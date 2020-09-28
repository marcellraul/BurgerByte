const { Schema,model } = require("mongoose");

const ProductsSchema= new Schema ({
    nombre:{type:String},
    desc: {type:String},
    tipo:{type:String},
    imagePath:{type:String}
}, {timestamps:true})

module.exports =  model ('Products', ProductsSchema)