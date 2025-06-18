class Cart {
  constructor({ productid,nameproduct, totalprice,userid }) {
    this.productid = productid;
    this.nameproduct = nameproduct || '';
    this.totalprice = totalprice || 0;
    this.userid = userid || null;
   }
}
 
module.exports = Cart;