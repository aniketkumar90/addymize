const mongoose = require('mongoose');

const pricingSchema = new mongoose.Schema(
  {
    tier: { type: String, required: true }, // Starter, Growth, Enterprise
    monthlyPrice: { type: Number, required: true },
    annualPrice: { type: Number, required: true },
    subtitle: { type: String, default: '' },
    description: { type: String, default: '' },
    features: [{ type: String }],
    isPopular: { type: Boolean, default: false },
    ctaText: { type: String, default: 'Get Started' },
    badge: { type: String, default: '' },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Pricing || mongoose.model('Pricing', pricingSchema);
