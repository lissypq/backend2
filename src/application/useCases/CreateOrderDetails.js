const Orderdetails = require('../../domain/entities/OrderDetails');
 
class CreateOrderdetails {
  constructor(orderDetailsRepository) {
    this.orderDetailsRepository = orderDetailsRepository;
  }
 
  async execute(orderDatails) {
    const orderdetails = new Orderdetails(orderDatails);
    return await this.orderDetailsRepository.create(orderdetails);
  }
}
 
module.exports = CreateOrderdetails;