const express = require('express');
const router = express.Router();
const {
  createLead,
  getLeads,
  updateLeadStatus,
  deleteLead,
} = require('../controllers/leadController');

router.route('/').post(createLead).get(getLeads);
router.route('/:id').patch(updateLeadStatus).delete(deleteLead);

module.exports = router;
