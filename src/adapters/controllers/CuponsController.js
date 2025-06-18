const CreateCupons = require('../../application/useCases/CreateCupons');
const CuponsDTO = require('../../application/dtos/CuponsDTO');
const CuponsModel = require('../../infraestructure/database/models/CuponsModel');
 
class CuponsController {
  constructor(cuponsRepository) {
    this.createCupons = new CreateCupons(cuponsRepository);
  }
 
   async create(req, res) {
    try {
      console.log('>>> Request body:', req.body);
      const cupons = await this.createCupons.execute(req.body);
      res.status(201).json(new CuponsDTO(cupons));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const cupons = await CuponsModel.find();
      res.status(200).json(cupons);
    } catch (err) {
      res.status(500).json({ message: 'Error retrievingk cupons' });
    }
  }

  async getAllById(req, res) {
    try {
      const product = await this.productRepository.getById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: 'Error retrieving product' });
    }
  }
  



 

 
}
 
module.exports = CuponsController;