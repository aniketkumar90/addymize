const mongoose = require('mongoose');

let isConnected = false;

const ensureMasterAdmin = async () => {
  try {
    const User = require('../models/User');
    const bcrypt = require('bcryptjs');
    const adminEmail = 'admin@gmail.com';
    const adminPass = 'admin@123';

    let admin = await User.findOne({ email: adminEmail });
    if (!admin) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(adminPass, salt);
      admin = await User.create({
        name: 'Administrator',
        email: adminEmail,
        password: hashedPassword,
        role: 'admin',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      });
      console.log(`[Master Admin Initialized in MongoDB with Bcrypt Hash]: ${adminEmail}`);
    } else {
      // Check if password needs encryption
      if (!admin.password || !admin.password.startsWith('$2')) {
        const salt = await bcrypt.genSalt(10);
        admin.password = await bcrypt.hash(adminPass, salt);
        await admin.save();
        console.log(`[Master Admin Password Encrypted & Updated in MongoDB]: ${adminEmail}`);
      } else {
        console.log(`[Master Admin Verified in MongoDB (Encrypted Password)]: ${adminEmail}`);
      }
    }
  } catch (err) {
    console.error('[Master Admin Init Notice]:', err.message);
  }
};

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/addymize';
    const conn = await mongoose.connect(uri, {
      dbName: 'addymize',
      serverSelectionTimeoutMS: 10000,
    });
    isConnected = true;
    console.log(`[MongoDB Connected]: ${conn.connection.host} / database: addymize`);

    // Ensure master admin exists in MongoDB database
    await ensureMasterAdmin();
  } catch (error) {
    isConnected = false;
    console.warn(`[MongoDB Notice]: (${error.message}). Running with in-memory persistence fallback.`);
  }
};

const getDBStatus = () => isConnected;

module.exports = { connectDB, getDBStatus, ensureMasterAdmin };
