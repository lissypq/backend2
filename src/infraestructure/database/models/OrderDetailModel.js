const mongoose = require('../mongoose');


const OrderDetailSchema = new mongoose.Schema({
  orderid: { type:String, required: true,trim: true},
  productid: { type:String, required: true,trim: true},
  quantity: { type: Number, required: true, min: 0 },
  unitprice: { type: Number, required: true, min: 0 }, 
}, { timestamps: true });

module.exports = mongoose.model('OrderDetail', OrderDetailSchema);

