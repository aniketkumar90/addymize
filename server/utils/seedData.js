const mongoose = require('mongoose');
require('dotenv').config();
const Service = require('../models/Service');
const Pricing = require('../models/Pricing');
const CaseStudy = require('../models/CaseStudy');
const Blog = require('../models/Blog');
const { mockServices, mockPricing, mockCaseStudies, mockBlogs } = require('./mockData');

const seedDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/addymize';
    await mongoose.connect(mongoUri);
    console.log('[Seed]: Connected to MongoDB');

    // Clean existing
    await Service.deleteMany({});
    await Pricing.deleteMany({});
    await CaseStudy.deleteMany({});
    await Blog.deleteMany({});

    // Clean IDs from mock arrays so Mongoose generates ObjectIds
    const cleanServices = mockServices.map(({ _id, ...rest }) => rest);
    const cleanPricing = mockPricing.map(({ _id, ...rest }) => rest);
    const cleanCaseStudies = mockCaseStudies.map(({ _id, ...rest }) => rest);
    const cleanBlogs = mockBlogs.map(({ _id, ...rest }) => rest);

    await Service.insertMany(cleanServices);
    await Pricing.insertMany(cleanPricing);
    await CaseStudy.insertMany(cleanCaseStudies);
    await Blog.insertMany(cleanBlogs);

    console.log('[Seed Success]: Seeded initial services, pricing, case studies, and blogs into MongoDB!');
    process.exit(0);
  } catch (err) {
    console.error('[Seed Error]:', err.message);
    process.exit(1);
  }
};

seedDB();
