const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, default: '' },
    role: { type: String, enum: ['user', 'admin'], default: 'admin' },
    avatar: { type: String, default: '' },
    resetToken: { type: String, default: '' },
    resetTokenExpire: { type: Date },
  },
  { timestamps: true }
);

// Method to verify password against bcrypt hash
userSchema.methods.matchPassword = async function (enteredPassword) {
  if (!this.password) return false;
  if (this.password.startsWith('$2a$') || this.password.startsWith('$2b$')) {
    return await bcrypt.compare(enteredPassword, this.password);
  }
  return enteredPassword === this.password;
};

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
