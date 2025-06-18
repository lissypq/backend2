const CreateOrderdetails = require('../../application/useCases/CreateOrderDetails');
const OrderDetailsDTO = require('../../application/dtos/OrderDetailsDTO');
const OrderDetailModel = require('../../infraestructure/database/models/OrderDetailModel');
 
class OrderDetailController {
  constructor(OrderDetailsRepository) {
    this.CreateOrderdetails = new CreateOrderdetails(OrderDetailsRepository);
  }
 
  async create(req, res) {
    try {
      const orderdetails = await this.CreateOrderdetails.execute(req.body);
      res.status(201).json(new OrderDTO(orderdetails));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }



  async getAll(req, res) {
    try {
      const ordersdetails = await OrderDetailModel.find();
      res.status(200).json(ordersdetails);
    } catch (err) {
      res.status(500).json({ message: 'Error retrieving orders' });
    }


  }
}
 
module.exports = OrderDetailController;
