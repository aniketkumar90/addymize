const Project = require('../models/Project');
const { getDBStatus } = require('../config/db');

const mockProjects = [
  {
    title: 'OmniChannel E-Commerce Engine',
    slug: 'omnichannel-ecommerce-engine',
    category: 'E-commerce',
    description: 'Ultra-low latency commerce infrastructure with dynamic inventory synchronization.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    technologies: ['Next.js', 'Node.js', 'TailwindCSS', 'Redis'],
    metrics: '+85% Conversion',
    featured: true
  },
  {
    title: 'Cloud Telemetry & Observability Console',
    slug: 'cloud-telemetry-console',
    category: 'DevOps & Cloud',
    description: 'Unified microservice monitoring with real-time anomaly detection.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    technologies: ['React', 'Express', 'MongoDB', 'Docker'],
    metrics: '99.999% Reliability',
    featured: true
  }
];

const getProjects = async (req, res, next) => {
  try {
    if (getDBStatus()) {
      const projects = await Project.find({ status: 'published' });
      if (projects.length > 0) return res.json({ success: true, count: projects.length, data: projects });
    }
    res.json({ success: true, count: mockProjects.length, data: mockProjects });
  } catch (error) {
    next(error);
  }
};

module.exports = { getProjects };
