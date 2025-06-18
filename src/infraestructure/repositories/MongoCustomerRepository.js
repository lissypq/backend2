const CustomerRepository = require('../../domain/repositories/CustomerRepository');
const CustomerModel = require('../database/models/CustomerModel');
const Customer = require('../../domain/entities/Customer');
 
class MongoCustomerRepository extends CustomerRepository {

  async getAll() {
  // Obtiene todos los clientes de la base de datos
    const newCustomers = await CustomerModel.find().lean().exec();
    return newCustomers.map(customers => new Customer(customers));
    
   
  }
  
  async create(customer) {
    const newCustomer = await CustomerModel.create(customer);
    return new Customer(newCustomer.toObject());
  }

  async getById(id) {
    const customers = await CustomerModelfindOne({ _id: id }).lean().exec();
    // Si no se encuentra el cliente, retorna null
    if (!customers) {
      return null;
    }
    return customers.toObject();
}
 }
module.exports = MongoCustomerRepository;