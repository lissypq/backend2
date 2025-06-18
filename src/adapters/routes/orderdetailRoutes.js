const express = require('express');
const router = express.Router();

module.exports = (OrderDetailController) => {
  /**
 * @swagger
 * tags:
 *   name: Products
 *   description: Gestión de pedidos
 */

/**
 * @swagger
 * /api/orderdetails:
 *   get:
 *     summary: Obtiene todos los detalle de pedidos
 *     tags: [OrderDetails]
 *     responses:
 *       200:
 *         description: Lista de detalle de pedidos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OrderDetail'
 */
  router.get('/', (req, res) => OrderDetailController.getAll(req, res));
  router.post('/', (req, res) => OrderDetailController.create(req, res));

  return router;
};