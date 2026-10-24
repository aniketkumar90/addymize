const express = require('express');
const router = express.Router();
const { getCaseStudies } = require('../controllers/caseStudyController');

router.route('/').get(getCaseStudies);

module.exports = router;
