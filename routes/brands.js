const express = require('express');
const router = express.Router();

const brands = [
  { id: 1, name: "TechMax" },
  { id: 2, name: "UrbanWear" }
];

router.get('/', (req, res) => res.json(brands));

module.exports = router;