const {Router} =  require('express')
const router =  Router() // para crear rutas
const Sales = require('../services/sales.services')
//router.route('/')    
//    .get((req,res)=> res.send('sales '))
router.post('/', Sales.createSales)
router.get('/', Sales.getsales)
router.get('/:id', Sales.getsale)
router.put('/:id', Sales.updatesales)
router.delete('/:id', Sales.deletesale)


module.exports = router// enrutador del archivo