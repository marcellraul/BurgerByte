const express = require('express')
const multer = require('multer')// para subir archivos
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
//const ejs = require('ejs') //para renderizar, express lo usa pñor defecto, solo lo configuramos
const app = express()

// Importing Routes
const routesproducts = require('./routes/products.routes')
const routespurchases = require('./routes/purchases.routes')
const routessales = require('./routes/sales.routes')

//settings
app.set('port', process.env.PORT || 3000)

//middlewares --> necesita entender la imagen o lo que le estas enviando y uno vez lo hace pasa a las rutas.. por eso se hace antes de las rutas
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
app.use('/products', routesproducts)
app.use('/purchases', routespurchases)
app.use('/sales' , routessales)

app.use('/uploads', express.static(path.resolve('uploads')));


module.exports = app

