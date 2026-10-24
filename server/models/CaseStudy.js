const mongoose = require('mongoose');

const caseStudySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    metric: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, default: '' },
    tags: [{ type: String }],
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.models.CaseStudy || mongoose.model('CaseStudy', caseStudySchema);
