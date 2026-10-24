const express = require('express');
const router = express.Router();
const {
  login,
  getMe,
  register,
  forgotPassword,
  resetPassword,
} = require('../controllers/authController');

router.post('/login', login);
router.get('/login', login);
router.post('/register', register);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.get('/me', getMe);

module.exports = router;
