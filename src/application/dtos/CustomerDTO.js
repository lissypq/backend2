class CustomerDTO {
  constructor(customer) {
    this.id = customer._id;
    this.userid = customer.userid;
    this.paymentinfo = customer.paymentinfo;
    this.shippingadress = customer.shippingadress;
    
  }
}
 
module.exports = CustomerDTO;
