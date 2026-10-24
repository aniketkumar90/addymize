const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: '' },
    company: { type: String, default: '' },
    message: { type: String, required: true },
    status: { type: String, enum: ['new', 'read', 'responded', 'archived'], default: 'new' },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
