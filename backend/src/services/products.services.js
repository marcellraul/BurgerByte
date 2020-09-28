'use strict'
const Products = require ('../models/products.model')

async function createProducts(req,res){
    const {nombre,desc,tipo}= req.body
    const newProduct= {
        nombre:nombre,
        desc:desc,
        tipo:tipo,
        //imagePath: req.file.path
    }
    const product = new Products(newProduct)
    await product.save()
    console.log(product)
    return res.json({
        message: 'Product Saved Successfully',
        product
    }) 
}

async function getProducts(req,res){
    const gets = await Products.find()
    console.log(gets)
    return res.json(gets)
}

async function getProduct(req,res){
    const {id} = req.params 
    const get = await Products.findById(id)
    console.log(get)
    return res.json(get)
}

async function deleteProducts(req,res){
    const {id} = req.params 
    const deletep = await Products.findByIdAndDelete(id)
    return res.json({ message: 'Product Deleted', deletep })   
}



async function updateProduct(req,res){
    const id = req.params.id
    const { nombre,desc,tipo}  = req.body
    const updatep = await Products.findByIdAndUpdate(id , {nombre,desc,tipo}, {new : true})
    console.log(updatep);
    return res.json({
        message: 'Successfully updated',
        updatep
    })
}


module.exports={
    createProducts,
    getProducts,
    getProduct,
    deleteProducts,
    updateProduct
}