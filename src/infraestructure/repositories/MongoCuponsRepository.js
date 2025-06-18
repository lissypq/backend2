const CuponsRepository = require('../../domain/repositories/CuponsRepository');
const CuponsModel = require('../database/models/CuponsModel');
const Cupons = require('../../domain/entities/Cupons');
 
class MongoCuponsRepository extends CuponsRepository {

  async getAll() {
  // Obtiene todos los cupones de la base de datos
    const newCupons = await CuponsModel.find().lean().exec();
    return newCupons.map(Cupon => new Cupons(Cupon));
    
   
  }
    // Crea un nuevo cupon en la base de datos
  async create(cupons) {
    const newCupons = await CuponsModel.create(cupons);
    return new Cupons(newCupons.toObject());
  }

  async getById(id) {
    const cupon = await CuponsModel.findOne({ _id: id }).lean().exec();
    // Si no se encuentra el cupon, retorna null
    if (!cupon) {
      return null;
    }
    return cupon.toObject();
}
 }
module.exports = MongoCuponsRepository;