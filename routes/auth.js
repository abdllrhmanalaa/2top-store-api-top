const express = require('express');
const jwt = require('jsonwebtoken'); // أضف هذا السطر
const router = express.Router();

const SECRET_KEY = 'your_secret_key_here'; // 🔐 غيّرها لأي كلمة سرية

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // السماح بأي بيانات لتسجيل الدخول
  if (email && password) {
    // 👇 توليد توكن JWT
    const token = jwt.sign(
      { id: 1, email },
      SECRET_KEY,
      { expiresIn: '1h' } // ⏳ مدة صلاحية التوكن
    );

    res.json({ token, user: { id: 1, email } });
  } else {
    res.status(400).json({ message: 'Email and password are required' });
  }
});

router.post('/register', (req, res) => {
  const { email } = req.body;
  res.json({ message: 'User registered', user: { id: 2, email } });
});

module.exports = router;

