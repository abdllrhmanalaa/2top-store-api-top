const express = require('express');
const router = express.Router();

const addresses = [
  { id: 1, userId: 1, address: "123 Main Street, Cairo, Egypt" }
];

router.get('/', (req, res) => res.json(addresses));

module.exports = router;