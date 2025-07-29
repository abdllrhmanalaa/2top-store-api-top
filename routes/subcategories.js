const express = require('express');
const router = express.Router();

const subcategories = [
  { id: 1, name: "Mobiles", categoryId: 1 },
  { id: 2, name: "Laptops", categoryId: 1 },
  { id: 3, name: "Jackets", categoryId: 2 }
];

router.get('/', (req, res) => res.json(subcategories));

module.exports = router;