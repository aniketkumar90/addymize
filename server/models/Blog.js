const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    author: {
      name: { type: String, default: 'Addymize Team' },
      role: { type: String, default: 'Tech Lead' },
      avatar: { type: String, default: '' },
    },
    featuredImage: { type: String, default: '' },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    readTime: { type: String, default: '5 min read' },
    seoTitle: { type: String, default: '' },
    seoDescription: { type: String, default: '' },
    status: { type: String, enum: ['draft', 'published'], default: 'published' },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
