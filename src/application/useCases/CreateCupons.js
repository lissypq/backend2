const Cupons = require('../../domain/entities/Cupons');
 
class CreateCupons {
  constructor(cuponsRepository) {
    this.cuponsRepository = cuponsRepository;
  }
 
  async execute(cuponsData) {
    const cupons = new Cupons(cuponsData);
    return await this.cuponsRepository.create(cupons);
  }
}
 
module.exports = CreateCupons;