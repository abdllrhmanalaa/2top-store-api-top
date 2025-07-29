const express = require('express');
const router = express.Router();

const categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Clothing" }
];

router.get('/', (req, res) => res.json(categories));

module.exports = router;