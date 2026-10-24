const Blog = require('../models/Blog');
const { getDBStatus } = require('../config/db');
const { mockBlogs } = require('../utils/mockData');

// @desc    Get all blogs
// @route   GET /api/blogs
// @access  Public
const getBlogs = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit, 10) || 10;
    const page = parseInt(req.query.page, 10) || 1;

    let blogList = mockBlogs;

    if (getDBStatus()) {
      const blogs = await Blog.find({}).sort({ createdAt: -1 });
      if (blogs && blogs.length > 0) {
        blogList = blogs;
      }
    }

    const startIndex = (page - 1) * limit;
    const paginated = blogList.slice(startIndex, startIndex + limit);

    res.json({
      success: true,
      count: blogList.length,
      page,
      data: paginated,
      blogs: paginated, // Support both response shapes
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single blog by slug
// @route   GET /api/blogs/:slug
// @access  Public
const getBlogBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    if (getDBStatus()) {
      const blog = await Blog.findOne({ slug });
      if (blog) {
        return res.json({ success: true, data: blog });
      }
    }
    const found = mockBlogs.find((b) => b.slug === slug);
    if (found) {
      return res.json({ success: true, data: found });
    }

    // Dynamic fallback article for requested slug
    const cleanTitle = slug
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase());

    const generated = {
      _id: 'blog-' + Date.now(),
      title: cleanTitle,
      slug,
      category: 'Education & Technology',
      author: {
        name: 'Addymize Editorial',
        role: 'Senior Academic Architect',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      },
      featuredImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
      excerpt: `Comprehensive guide and latest updates regarding ${cleanTitle}.`,
      content: `Welcome to the official overview for ${cleanTitle}. All guidelines, syllabus, and online admission procedures are supported with sub-second digital portals.`,
      readTime: '5 min read',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    mockBlogs.push(generated);
    res.json({ success: true, data: generated });
  } catch (error) {
    next(error);
  }
};

module.exports = { getBlogs, getBlogBySlug };
