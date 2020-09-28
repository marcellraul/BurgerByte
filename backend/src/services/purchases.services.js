'use strict'
const Purchases = require('../models/purchases.model')

async function createProducts(req,res){
    const {nombre,desc,monto}= req.body
    const newPurchase= {
        nombre:nombre,
        desc:desc,
        monto:monto,
        //imagePath: req.file.path
    }
    const purchase = new Purchases(newPurchase)
    await purchase.save()
    console.log(purchase)
    return res.json({
        message: 'Purchase Saved Successfully',
        purchase
    }); 
}

async function getPurchases(req, res){
    const gets = await Purchases.find()
    console.log(gets)
    return res.json(gets)

}

async function getPurchase(req,res){
    const {id} = req.params
    const get = await Purchases.findById(id)
    console.log(get)
    return res.json(get)
}

async function deletePurchase(req,res){
    const {id} = req.params
    const d = await Purchases.findByIdAndDelete(id)
    console.log(d)
    return res.json({
        message: 'Purchase deleted',
        d
    })

}

async function updatePurchase(req,res){
    const {id}= req.params
    const {nombre,desc,monto}= req.body
    const u = await Purchases.findByIdAndUpdate(id,{nombre,desc,monto}, {new : true})
    console.log(u);
    return res.json({
        message: 'Successfully updated',
        u
    })
}

module.exports = {
    createProducts,
    getPurchase,
    getPurchases,
    deletePurchase,
    updatePurchase

}