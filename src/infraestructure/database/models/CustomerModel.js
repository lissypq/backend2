const mongoose = require('../mongoose');

const customerSchema = new mongoose.Schema({
  userid: { type:String, required: true},
  paymentinfo: { type: String, required: true },
  shippingadress: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);

// Este modelo define la estructura de los documentos de clientes en la base de datos MongoDB.
// Incluye campos para el ID del usuario, información de pago y dirección de envío.