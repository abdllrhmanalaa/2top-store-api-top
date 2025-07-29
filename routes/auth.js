const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'test@test.com' && password === '123456') {
    res.json({ token: 'mock-jwt-token', user: { id: 1, email } });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

router.post('/register', (req, res) => {
  const { email } = req.body;
  res.json({ message: 'User registered', user: { id: 2, email } });
});

module.exports = router;