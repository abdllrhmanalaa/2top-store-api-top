const express = require('express');
const router = express.Router();

const orders = [
  { id: 1, userId: 1, items: [{ productId: 1, quantity: 2 }], status: "Shipped" }
];

router.get('/', (req, res) => res.json(orders));

module.exports = router;