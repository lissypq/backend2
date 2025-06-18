const express = require('express');
const router = express.Router();

module.exports = (productController) => {

  /**
   * @swagger
   * /api/v1/products:
   *   get:
   *     summary: Obtiene todos los productos
   *     tags: [Products]
   *     security:
   *       - BearerAuth: []
   *     responses:
   *       200:
   *         description: Lista de productos
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Product'
   *       401:
   *         description: No autorizado
   *       500:
   *         description: Error del servidor
   */
 
  router.get('/', (req, res) => productController.getAll(req, res));
  router.post('/', (req, res) => productController.create(req, res));

  return router;
};