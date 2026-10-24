const Lead = require('../models/Lead');
const { getDBStatus } = require('../config/db');

const inMemoryLeads = [
  {
    _id: 'lead-demo-1',
    name: 'Ananya Sharma',
    email: 'ananya@cloudmatrix.com',
    phone: '+91 99887 76655',
    company: 'CloudMatrix Systems',
    message: 'Interested in enterprise CRM telemetry with custom machine learning pipelines.',
    source: 'Website Header Demo Modal',
    status: 'new',
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(), // 5 hours ago
  },
  {
    _id: 'lead-demo-2',
    name: 'Rohan Mehta',
    email: 'rohan.m@scaletech.org',
    phone: '+91 97766 55443',
    company: 'ScaleTech Global',
    message: 'Would like a live demo of the Modular Web Architecture and Edge deployment.',
    source: 'Hero Preview CTA',
    status: 'contacted',
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString(), // 18 hours ago
  },
];

// @desc    Register a new demo lead
// @route   POST /api/leads
// @access  Public
const createLead = async (req, res, next) => {
  try {
    const { name, email, phone, company, message, source } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Name and email are required to request a demo.',
      });
    }

    let savedLead;
    if (getDBStatus()) {
      savedLead = await Lead.create({
        name,
        email,
        phone: phone || '',
        company: company || '',
        message: message || '',
        source: source || 'website_header_modal',
        status: 'new',
      });
    } else {
      savedLead = {
        _id: 'lead-' + Date.now(),
        name,
        email,
        phone: phone || '',
        company: company || '',
        message: message || '',
        source: source || 'website_header_modal',
        status: 'new',
        createdAt: new Date().toISOString(),
      };
      inMemoryLeads.unshift(savedLead);
    }

    res.status(201).json({
      success: true,
      message: 'Demo slot reserved! Our solutions architect will reach out shortly.',
      data: savedLead,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all leads
// @route   GET /api/leads
// @access  Public/Admin
const getLeads = async (req, res, next) => {
  try {
    let leads;
    if (getDBStatus()) {
      leads = await Lead.find().sort({ createdAt: -1 });
    } else {
      leads = inMemoryLeads;
    }
    res.json({
      success: true,
      count: leads.length,
      data: leads,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update lead status
// @route   PATCH /api/leads/:id
// @access  Public/Admin
const updateLeadStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (getDBStatus()) {
      const lead = await Lead.findByIdAndUpdate(id, { status }, { new: true });
      if (!lead) return res.status(404).json({ success: false, message: 'Lead not found' });
      return res.json({ success: true, data: lead });
    } else {
      const lead = inMemoryLeads.find((l) => l._id === id);
      if (lead) {
        lead.status = status;
        return res.json({ success: true, data: lead });
      }
      return res.status(404).json({ success: false, message: 'Lead not found' });
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Delete lead
// @route   DELETE /api/leads/:id
// @access  Public/Admin
const deleteLead = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (getDBStatus()) {
      await Lead.findByIdAndDelete(id);
    } else {
      const idx = inMemoryLeads.findIndex((l) => l._id === id);
      if (idx !== -1) {
        inMemoryLeads.splice(idx, 1);
      }
    }

    res.json({ success: true, message: 'Lead deleted successfully.' });
  } catch (error) {
    next(error);
  }
};

module.exports = { createLead, getLeads, updateLeadStatus, deleteLead };
