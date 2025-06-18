class CuponsDTO {
  constructor(cupons) {
    this.id = cupons._id;
    this.productid = cupons.productid;
    this.discount = cupons.discount;
    this.expirationdate = cupons.expirationdate;
    this.isactive = cupons.isactive;
     }
}
 
module.exports = CuponsDTO;