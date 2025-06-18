class Order {
  constructor({ customerid,totalprice,orderdate,orderstatus}) {
    this.customerid = customerid;
    this.totalprice = totalprice;
    this.orderdate = orderdate;
    this.orderstatus = orderstatus; 
   }
}
 
module.exports = Order;