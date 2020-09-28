const {Router} =  require('express')
const router =  Router() // para crear rutas
const products = require('../services/products.services')
//router.route('/')    
  //  .get((req,res)=> res.send('products '))
router.post('/', products.createProducts )
router.get('/', products.getProducts)
router.get('/:id',products.getProduct )
router.put('/:id', products.updateProduct)
router.delete('/:id', products.deleteProducts)


module.exports = router// enrutador del archivo


/***
 
const { Router } = require('express')
const router = Router() // para crear rutas
const Photo = require('../services/Photo.Services')

const path = require('path')
const multer = require('multer')
const fs = require('fs-extra')
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
    destination:  'uploads', //lo obtine desde la raiz, ruta absoluta
    filename: (req, file, cb) => {
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname))
    }
})
const uploadImage = multer({
    storage,
    limits: { fileSize: 1000000 }
}).single('image')
/*
router.post('/', (req, res) => {
    uploadImage(req, res, (err) => {
        if (err) {
            err.message = 'The file is so big'
            return res.send(err);
        }
        else {
            console.log(req.body)
            console.log(req.file)
            res.json(req.file)
        }
    })
} , Photo.createPhoto) //habia faltado esto 

router.route('/')
    .post( uploadImage , Photo.createPhoto)
//router.post('/', upload.single('image') )
router.get('/', Photo.getPhotos)
router.get('/:id', Photo.getPhoto)
router.put('/:id', Photo.updatePhoto)
router.delete('/:id', Photo.deletePhoto)


module.exports = router// enrutador del archivo
*/

