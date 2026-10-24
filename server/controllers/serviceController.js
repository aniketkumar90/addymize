const Service = require('../models/Service');
const { getDBStatus } = require('../config/db');
const { mockServices } = require('../utils/mockData');

// @desc    Get all services
// @route   GET /api/services
// @access  Public
const getServices = async (req, res, next) => {
  try {
    if (getDBStatus()) {
      const services = await Service.find().sort({ order: 1 });
      if (services && services.length > 0) {
        return res.json({ success: true, count: services.length, data: services });
      }
    }
    // Fallback to rich mock data
    res.json({ success: true, count: mockServices.length, data: mockServices });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a new service
// @route   POST /api/services
// @access  Public/Admin
const createService = async (req, res, next) => {
  try {
    const { title, slug, description, features, iconName, order } = req.body;
    let service;
    if (getDBStatus()) {
      service = await Service.create({
        title,
        slug: slug || title.toLowerCase().replace(/\s+/g, '-'),
        description,
        features: features || [],
        iconName: iconName || 'Layers',
        order: order || 0,
      });
    } else {
      service = {
        _id: 'srv-' + Date.now(),
        title,
        slug: slug || title.toLowerCase().replace(/\s+/g, '-'),
        description,
        features: features || [],
        iconName: iconName || 'Layers',
        order: order || 0,
      };
      mockServices.push(service);
    }
    res.status(201).json({ success: true, data: service });
  } catch (error) {
    next(error);
  }
};

module.exports = { getServices, createService };
