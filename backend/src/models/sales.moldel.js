const { Schema, model } = require("mongoose");

const SalesSchema = new Schema({
    idFactura: { type: String },
    cliente: { type: String },
    montot: { type: Number },
    productos: [
        {
            producto: { type: String },
            monto: { type: Number },
            cantidad: { type: Number },
        }
    ]
}, { timestamps: true })

module.exports = model('Sales', SalesSchema)