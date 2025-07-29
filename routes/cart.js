const express = require('express');
const router = express.Router();

const cart = [{ id: 1, userId: 1, productId: 1, quantity: 2 }];

router.get('/', (req, res) => res.json(cart));

module.exports = router;