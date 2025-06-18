class OrderDetails {
  constructor({ orderid,productid, quantity, unitprice}) {
     this.orderid = orderid;
    this.productid = productid;
    this.quantity = quantity;
    this.unitprice = unitprice;
   
   }
}
 
module.exports = OrderDetails;