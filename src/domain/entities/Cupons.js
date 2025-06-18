class Cupons {
  constructor({ productid, discount, expirationdate, isactive }) {
    this.productid = productid;
    this.discount = discount;
    this.expirationdate = expirationdate;
    this.isactive = isactive;   
  }
}
 
module.exports = Cupons;
 