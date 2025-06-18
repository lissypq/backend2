const CreateCustomer = require('../../application/useCases/CreateCustomer');
const CustomerDTO = require('../../application/dtos/CustomerDTO');
const CustomerModel = require('../../infraestructure/database/models/CustomerModel');
 
class CustomerController{
  constructor(customerRepository) {
    this.createCustomer = new CreateCustomer(customerRepository);
  }
 
   async create(req, res) {
    try {
      console.log('>>> Request body:', req.body);
      const customer = await this.createCustomer.execute(req.body);
      res.status(201).json(new CustomerDTO(customer));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const customers = await CustomerModel.find();
      res.status(200).json(customers);
    } catch (err) {
      res.status(500).json({ message: 'Error retrievingk customer' });
    }
  }

  async getAllById(req, res) {
    try {
      const customer = await this.customerRepository.getById(req.params.id);
      if (!customer) {
        return res.status(404).json({ message: 'Customer not found' });
      }
      res.status(200).json(customer);
    } catch (err) {
      res.status(500).json({ message: 'Error retrieving customer' });
    }
  }
  

 
}
 
module.exports = CustomerController;