const Pricing = require('../models/Pricing');
const { getDBStatus } = require('../config/db');
const { mockPricing } = require('../utils/mockData');

// @desc    Get all pricing plans
// @route   GET /api/pricing
// @access  Public
const getPricing = async (req, res, next) => {
  try {
    if (getDBStatus()) {
      const plans = await Pricing.find().sort({ order: 1 });
      if (plans && plans.length > 0) {
        return res.json({ success: true, count: plans.length, data: plans });
      }
    }
    res.json({ success: true, count: mockPricing.length, data: mockPricing });
  } catch (error) {
    next(error);
  }
};

module.exports = { getPricing };
