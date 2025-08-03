const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const SECRET_KEY = 'your_secret_key_here'; // 🔐 غيّرها عند الحاجة

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ token, user: { email } });
  } else {
    res.status(400).json({ message: 'Email and password are required' });
  }
});

router.post('/register', (req, res) => {
  const { email, password, address } = req.body;

  if (!email || !password || !address) {
    return res.status(400).json({ message: 'Email, password, and address are required' });
  }

  res.json({
    message: 'User registered',
    user: {
      email,
      password,
      address
    }
  });
});

module.exports = router;

