const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const SECRET_KEY = 'your_secret_key_here'; // 🔐 غيّرها لكلمة سرية قوية

// 🧠 مصفوفة لتخزين المستخدمين مؤقتًا (بدون قاعدة بيانات)
const users = [];

router.post('/register', (req, res) => {
  const { email, password, address, name } = req.body;

  if (!email || !password || !address || !name) {
    return res.status(400).json({ message: 'All fields are required (email, password, name, address)' });
  }

  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const newUser = { email, password, address, name };
  users.push(newUser);

  res.json({ message: 'User registered', user: newUser });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    const token = jwt.sign(
      { email: user.email },
      SECRET_KEY,
      { expiresIn: '1h' }
    );

    res.json({
      token,
      user: {
        email: user.email,
        name: user.name,
        address: user.address
      }
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;


