const express = require('express');
const router = express.Router();

const wishlist = [{ id: 1, userId: 1, productId: 1 }];

router.get('/', (req, res) => res.json(wishlist));

module.exports = router;