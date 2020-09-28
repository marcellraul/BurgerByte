const {Router} =  require('express')
const router =  Router() // para crear rutas
const purchase = require('../services/purchases.services')
//router.route('/')    
  //  .get((req,res)=> res.send('purchases '))
router.post('/', purchase.createProducts)
router.get('/', purchase.getPurchases)
router.get('/:id', purchase.getPurchase )
router.put('/:id', purchase.updatePurchase)
router.delete('/:id', purchase.deletePurchase)


module.exports = router// enrutador del archivo