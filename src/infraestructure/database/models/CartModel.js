const mongoose = require('../mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId

const cartSchema = new mongoose.Schema({
  productid: {type: ObjectID, required: true },
  nameproduct: {type:String,  required: true  , trim: true },
  totalprice: { type: Number, required: true, min: 0 },
  userid: { type: ObjectID, required: true, ref: 'User',trim: true },
}, { timestamps: true });
     
  
module.exports = mongoose.model('Cart', cartSchema);

