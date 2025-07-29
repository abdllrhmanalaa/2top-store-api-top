const express = require('express');
const router = express.Router();

const products = [
  {
    id: 1,
    name: "Smartphone X12",
    description: "Latest 5G smartphone with AMOLED display",
    price: 899.99,
    category: "Electronics",
    subcategory: "Mobiles",
    brand: "TechMax",
    image: "https://example.com/products/x12.jpg"
  },
  {
    id: 2,
    name: "Men's Casual Jacket",
    description: "Stylish and warm casual jacket for men",
    price: 120.00,
    category: "Clothing",
    subcategory: "Jackets",
    brand: "UrbanWear",
    image: "https://example.com/products/jacket1.jpg"
  }
  // Add 18 more real items later for full data
];

router.get('/', (req, res) => {
  res.json(products);
});

router.get('/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

module.exports = router;