const mongoose = require('../mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId;

const cuponsSchema = new mongoose.Schema({
  productid: { type: ObjectID, required: true, ref: 'Product',trim: true},
  discount: { type: Number, required: true, min: 0 },
  expirationdate: { type: Date, required: true, min: 0 },
  isactive: { type: Boolean, required: true },
  }, { timestamps: true });

module.exports = mongoose.model('Cupons', cuponsSchema);

