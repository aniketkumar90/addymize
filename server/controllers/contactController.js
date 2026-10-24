const Contact = require('../models/Contact');
const { getDBStatus } = require('../config/db');

// In-memory array for demo/fallback when Mongo is not active
const inMemoryContacts = [
  {
    _id: 'contact-demo-1',
    name: 'Vikram Malhotra',
    email: 'vikram@horizonfintech.com',
    phone: '+91 98765 43210',
    company: 'Horizon Fintech Global',
    message: 'Looking to overhaul our core financial dashboard with real-time WebSockets and high-security compliance.',
    status: 'new',
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(), // 2 hours ago
  },
  {
    _id: 'contact-demo-2',
    name: 'Sneha Patel',
    email: 'sneha.p@apexretail.io',
    phone: '+91 98111 22334',
    company: 'Apex Retail Brands',
    message: 'We need custom headless Shopify/Next.js store architecture for our 45,000 SKU luxury catalog.',
    status: 'contacted',
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(), // 1 day ago
  },
];

// @desc    Submit a contact message
// @route   POST /api/contact
// @access  Public
const submitContact = async (req, res, next) => {
  try {
    const { name, email, phone, company, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message.',
      });
    }

    let savedContact;
    if (getDBStatus()) {
      savedContact = await Contact.create({
        name,
        email,
        phone: phone || '',
        company: company || '',
        message,
        status: 'new',
      });
    } else {
      savedContact = {
        _id: 'contact-' + Date.now(),
        name,
        email,
        phone: phone || '',
        company: company || '',
        message,
        status: 'new',
        createdAt: new Date().toISOString(),
      };
      inMemoryContacts.unshift(savedContact);
    }

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received. Our team will contact you within 24 hours.',
      data: savedContact,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all contact messages (Admin)
// @route   GET /api/contact
// @access  Public/Admin
const getContacts = async (req, res, next) => {
  try {
    let contacts;
    if (getDBStatus()) {
      contacts = await Contact.find().sort({ createdAt: -1 });
    } else {
      contacts = inMemoryContacts;
    }

    res.json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update contact status
// @route   PATCH /api/contact/:id
// @access  Public/Admin
const updateContactStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (getDBStatus()) {
      const contact = await Contact.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );
      if (!contact) {
        return res.status(404).json({ success: false, message: 'Submission not found' });
      }
      return res.json({ success: true, data: contact });
    } else {
      const contact = inMemoryContacts.find((c) => c._id === id);
      if (contact) {
        contact.status = status;
        return res.json({ success: true, data: contact });
      }
      return res.status(404).json({ success: false, message: 'Submission not found' });
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Delete contact message
// @route   DELETE /api/contact/:id
// @access  Public/Admin
const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (getDBStatus()) {
      await Contact.findByIdAndDelete(id);
    } else {
      const idx = inMemoryContacts.findIndex((c) => c._id === id);
      if (idx !== -1) {
        inMemoryContacts.splice(idx, 1);
      }
    }

    res.json({ success: true, message: 'Submission deleted successfully.' });
  } catch (error) {
    next(error);
  }
};

module.exports = { submitContact, getContacts, updateContactStatus, deleteContact };
