const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: '' },
    company: { type: String, default: '' },
    message: { type: String, default: '' },
    source: { type: String, default: 'website_hero_modal' },
    status: { type: String, enum: ['new', 'contacted', 'qualified', 'converted', 'closed'], default: 'new' },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Lead || mongoose.model('Lead', leadSchema);
