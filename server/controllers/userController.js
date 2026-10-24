const User = require('../models/User');
const { getDBStatus } = require('../config/db');

const mockUsers = [
  { _id: 'u-1', name: 'Addy Ruse', email: 'addy@addymize.com', role: 'admin', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80' },
  { _id: 'u-2', name: 'Dana Denise', email: 'dana@addymize.com', role: 'user', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
];

const getUsers = async (req, res, next) => {
  try {
    if (getDBStatus()) {
      const users = await User.find();
      if (users.length > 0) return res.json({ success: true, count: users.length, data: users });
    }
    res.json({ success: true, count: mockUsers.length, data: mockUsers });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsers };
