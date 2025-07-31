const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // بدلاً من التحقق، نقبل أي إيميل وباسورد
  if (email && password) {
    res.json({
      token: 'mock-jwt-token',
      user: { id: 1, email }
    });
  } else {
    res.status(400).json({ message: 'Email and password are required' });
  }
});

router.post('/register', (req, res) => {
  const { email } = req.body;
  res.json({
    message: 'User registered',
    user: { id: 2, email }
  });
});

module.exports = router;
