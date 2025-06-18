const CreateProduct = require('../../application/useCases/CreateProduct');
const ProductDTO = require('../../application/dtos/ProductDTO');
const ProductModel = require('../../infraestructure/database/models/ProductModel');
 
class ProductController {
  constructor(productRepository) {
    this.createProduct = new CreateProduct(productRepository);
  }
 
   async create(req, res) {
    try {
      console.log('>>> Request body:', req.body);
      const product = await this.createProduct.execute(req.body);
      res.status(201).json(new ProductDTO(product));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const products = await ProductModel.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: 'Error retrievingk products' });
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
  
  async update(req, res) {
    try {
      const product = await this.productRepository.update(req.params.id, req.body);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(new ProductDTO(product));
    } catch (err) {
      res.status(500).json({ message: 'Error updating product' });
    }
  }


  async delete(req, res) {
    try {
      const result = await this.productRepository.delete(req.params.id);
      if (!result) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ message: 'Error deleting product' });
    }
  }


 
}
 
module.exports = ProductController;