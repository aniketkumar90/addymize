const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    features: [{ type: String }],
    iconName: { type: String, default: 'Layers' },
    previewImage: { type: String, default: '' },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Service || mongoose.model('Service', serviceSchema);
