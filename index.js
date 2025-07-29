const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to 2Top Store API");
});

app.use('/api/products', require('./routes/products'));
app.use('/api/categories', require('./routes/categories'));
app.use('/api/subcategories', require('./routes/subcategories'));
app.use('/api/brands', require('./routes/brands'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/wishlist', require('./routes/wishlist'));
app.use('/api/user-addresses', require('./routes/userAddresses'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/orders', require('./routes/orders'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

