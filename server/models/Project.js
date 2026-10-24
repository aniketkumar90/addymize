const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String, default: '' },
    images: [{ type: String }],
    technologies: [{ type: String }],
    metrics: { type: String, default: '' },
    featured: { type: Boolean, default: false },
    status: { type: String, enum: ['draft', 'published'], default: 'published' },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Project || mongoose.model('Project', projectSchema);
