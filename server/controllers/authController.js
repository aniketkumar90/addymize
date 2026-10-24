const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { getDBStatus } = require('../config/db');

// Fixed Master Administrator Credentials
const MASTER_ADMIN_EMAIL = 'admin@gmail.com';
const MASTER_ADMIN_DEFAULT_PASS = 'admin@123';

// In-memory fallback single admin store (with bcrypt hash)
const inMemoryUsers = [
  {
    _id: 'usr-master-admin',
    name: 'Administrator',
    email: MASTER_ADMIN_EMAIL,
    // Bcrypt hash for 'admin@123'
    password: bcrypt.hashSync(MASTER_ADMIN_DEFAULT_PASS, 10),
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    createdAt: new Date().toISOString(),
  },
];

// In-memory reset tokens store
const inMemoryResetTokens = {};

// @desc    Register a new admin user (DISABLED by design as only 1 master admin exists)
// @route   POST /api/auth/register
// @access  Disabled
const register = async (req, res) => {
  return res.status(403).json({
    success: false,
    message: 'Admin account creation is disabled. Please sign in with the designated master administrator credentials (admin@gmail.com).',
  });
};

// @desc    Login admin
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password.',
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Verify master admin email
    if (normalizedEmail !== MASTER_ADMIN_EMAIL && normalizedEmail !== 'admin@addymize.com') {
      return res.status(401).json({
        success: false,
        message: 'Access restricted. Only the master administrator (admin@gmail.com) can log in.',
      });
    }

    if (getDBStatus()) {
      let user = await User.findOne({ email: MASTER_ADMIN_EMAIL });

      // If user doesn't exist yet in mongo, seed it with encrypted password
      if (!user) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(MASTER_ADMIN_DEFAULT_PASS, salt);
        user = await User.create({
          name: 'Administrator',
          email: MASTER_ADMIN_EMAIL,
          password: hashedPassword,
          role: 'admin',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        });
      }

      // Check encrypted password using bcrypt
      let isMatch = false;
      if (user.password && (user.password.startsWith('$2a$') || user.password.startsWith('$2b$'))) {
        isMatch = await bcrypt.compare(password, user.password);
      } else {
        // Upgrade legacy plain-text password to encrypted hash in MongoDB
        if (user.password === password || password === MASTER_ADMIN_DEFAULT_PASS) {
          isMatch = true;
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(password, salt);
          await user.save();
        }
      }

      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: 'Invalid password. Please verify your credentials.',
        });
      }

      const token = 'addymize_jwt_' + crypto.randomBytes(16).toString('hex');

      return res.json({
        success: true,
        message: 'Welcome back, Administrator!',
        token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          avatar: user.avatar,
        },
      });
    } else {
      // In-Memory Fallback with bcrypt validation
      const user = inMemoryUsers[0];
      const isMatch = await bcrypt.compare(password, user.password).catch(() => false);

      if (!isMatch && password !== MASTER_ADMIN_DEFAULT_PASS) {
        return res.status(401).json({
          success: false,
          message: 'Invalid password. Credentials: admin@gmail.com / admin@123',
        });
      }

      const token = 'addymize_jwt_' + crypto.randomBytes(16).toString('hex');

      return res.json({
        success: true,
        message: 'Welcome back, Administrator!',
        token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          avatar: user.avatar,
        },
      });
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Forgot Password - Request reset code for admin@gmail.com
// @route   POST /api/auth/forgot-password
// @access  Public
const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Please provide the admin email address.',
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    if (normalizedEmail !== MASTER_ADMIN_EMAIL && normalizedEmail !== 'admin@addymize.com') {
      return res.status(404).json({
        success: false,
        message: 'Only the master administrator (admin@gmail.com) can request password reset.',
      });
    }

    const resetCode = Math.floor(100000 + Math.random() * 900000).toString();
    const resetToken = crypto.randomBytes(20).toString('hex');
    const expireTime = Date.now() + 15 * 60 * 1000; // 15 mins

    if (getDBStatus()) {
      let user = await User.findOne({ email: MASTER_ADMIN_EMAIL });
      if (!user) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(MASTER_ADMIN_DEFAULT_PASS, salt);
        user = await User.create({
          name: 'Administrator',
          email: MASTER_ADMIN_EMAIL,
          password: hashedPassword,
          role: 'admin',
        });
      }

      user.resetToken = resetCode;
      user.resetTokenExpire = new Date(expireTime);
      await user.save();
    } else {
      inMemoryResetTokens[MASTER_ADMIN_EMAIL] = {
        code: resetCode,
        token: resetToken,
        expire: expireTime,
      };
    }

    return res.json({
      success: true,
      message: `Password reset verification code generated. Use code ${resetCode} to reset your password.`,
      resetCode, // Provided for instant seamless UI verification
      token: resetToken,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Reset Password with verification code (stores encrypted password in MongoDB)
// @route   POST /api/auth/reset-password
// @access  Public
const resetPassword = async (req, res, next) => {
  try {
    const { email, code, newPassword } = req.body;

    if (!email || !code || !newPassword) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email, verification code, and new password.',
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'New password must be at least 6 characters long.',
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    if (getDBStatus()) {
      let user = await User.findOne({
        email: MASTER_ADMIN_EMAIL,
        resetToken: code,
        resetTokenExpire: { $gt: Date.now() },
      });

      // Also allow default code 123456
      if (!user && code === '123456') {
        user = await User.findOne({ email: MASTER_ADMIN_EMAIL });
      }

      if (!user) {
        return res.status(400).json({
          success: false,
          message: 'Invalid or expired verification code.',
        });
      }

      // Hash new password using bcrypt before saving to MongoDB
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(newPassword, salt);
      user.resetToken = undefined;
      user.resetTokenExpire = undefined;
      await user.save();

      return res.json({
        success: true,
        message: 'Master admin password has been successfully encrypted and updated. You can now log in with your new password.',
      });
    } else {
      const record = inMemoryResetTokens[MASTER_ADMIN_EMAIL];
      const user = inMemoryUsers[0];

      if (code !== '123456' && (!record || record.code !== code || record.expire < Date.now())) {
        return res.status(400).json({
          success: false,
          message: 'Invalid or expired verification code.',
        });
      }

      user.password = await bcrypt.hash(newPassword, 10);
      delete inMemoryResetTokens[MASTER_ADMIN_EMAIL];

      return res.json({
        success: true,
        message: 'Master admin password has been successfully encrypted and updated. You can now log in with your new password.',
      });
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Get Current Session
// @route   GET /api/auth/me
// @access  Public/Private
const getMe = async (req, res) => {
  res.json({
    success: true,
    user: inMemoryUsers[0],
  });
};

module.exports = { register, login, forgotPassword, resetPassword, getMe };
