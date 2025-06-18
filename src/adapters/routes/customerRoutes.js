const express = require('express');
const router = express.Router();

module.exports = (CustomerController) => {

  /**
   * @swagger
   * /api/v1/customers:
   *   get:
   *     summary: Obtiene todos los clientes
   *     tags: [Customers]
   *     security:
   *       - BearerAuth: []
   *     responses:
   *       200:
   *         description: Lista de clientes
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Customer'
   *       401:
   *         description: No autorizado
   *       500:
   *         description: Error del servidor
   */
 
  router.get('/', (req, res) => CustomerController.getAll(req, res));
  router.post('/', (req, res) => CustomerController.create(req, res));

  return router;
};