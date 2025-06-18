const OrderRepository = require('../../domain/repositories/OrderRepository');
const OrderModel = require('../database/models/OrderModel');
const Order = require('../../domain/entities/Order');

class MongoOrderRepository extends OrderRepository {

  async getAll() {
    // Obtiene todos los pedidos de la base de datos
        const newOrder = await OrderModel.find().lean().exec();
        return newOrder.map(orders => new Order(newOrder));
  }

  async create(order) {
    const newOrder = await OrderModel.create(order);
    return new Order(newOrder.toObject());
  }


  async getById(id) {
   return OrderModel.findOne({ _id: id }).lean().exec()
    }

  
     
    
 
  }
module.exports = MongoOrderRepository;