const CaseStudy = require('../models/CaseStudy');
const { getDBStatus } = require('../config/db');
const { mockCaseStudies } = require('../utils/mockData');

// @desc    Get all case studies
// @route   GET /api/case-studies
// @access  Public
const getCaseStudies = async (req, res, next) => {
  try {
    if (getDBStatus()) {
      const cases = await CaseStudy.find().sort({ order: 1 });
      if (cases && cases.length > 0) {
        return res.json({ success: true, count: cases.length, data: cases });
      }
    }
    res.json({ success: true, count: mockCaseStudies.length, data: mockCaseStudies });
  } catch (error) {
    next(error);
  }
};

module.exports = { getCaseStudies };
