'use strict'
const Sales = require('../models/sales.moldel')

async function createSales(req, res) {
    /*//console.log(req.body);
    //res.json(req.body)
    const sale = new Sales({
        idFactura: req.body.idFactura,
        cliente: req.body.cliente,
        montot: req.body.montot,
        productos: [{
            producto: req.body.producto,
            cantidad: req.body.cantidad,
            monto: req.body.monto
        }]
    })
    await sale.save()
    console.log(sale)
    return res.json({
        message: 'sales Saved Successfully',
        sale
    })*/

    
    const {idFactura,cliente,sales,montot}= req.body
    const newSale = {
        idFactura:idFactura,
        cliente:cliente,
        montot:montot,
        productos:sales
    }
    const sales2 = new Sales(newSale)
    await sales2.save()
    console.log(sales2)
    return res.json({
        message: 'sales Saved Successfully',
        sales2
    }) 

}
 


async function getsales(req, res) {
    const gets = await Sales.find()
    console.log(gets)
    return res.json(gets)

}

async function getsale(req, res) {
    const { id } = req.params
    const get = await Sales.findById(id)
    console.log(get)
    return res.json(get)
}

async function deletesale(req, res) {
    const { id } = req.params
    const d = await Sales.findByIdAndDelete(id)
    console.log(d)
    return res.json({ message: 'Sales Deleted', d })
}

async function updatesales(req, res) {
    const { id } = req.params
    const { cliente, producto, monto } = req.body
    const u = await Sales.findByIdAndUpdate(id, { cliente, producto, monto }, { new: true })
    console.log(u);
    return res.json({
        message: 'Successfully updated',
        u
    })
}

module.exports = {
    createSales,
    getsales,
    getsale,
    deletesale,
    updatesales

}