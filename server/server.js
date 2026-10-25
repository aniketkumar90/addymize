require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const { connectDB, getDBStatus } = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

// Route imports
const contactRoutes = require('./routes/contactRoutes');
const leadRoutes = require('./routes/leadRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const pricingRoutes = require('./routes/pricingRoutes');
const caseStudyRoutes = require('./routes/caseStudyRoutes');
const blogRoutes = require('./routes/blogRoutes');
const projectRoutes = require('./routes/projectRoutes');
const userRoutes = require('./routes/userRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5050;

// Connect to MongoDB
connectDB();

// Global Middlewares - Flexible production-ready CORS
const corsOptions = {
  origin: (origin, callback) => {
    // Allow non-browser requests (Postman, curl, server-to-server)
    if (!origin) return callback(null, true);

    // If CLIENT_URL is specified (can be comma-separated list of domains)
    if (process.env.CLIENT_URL) {
      const allowed = process.env.CLIENT_URL.split(',').map((u) => u.trim().replace(/\/$/, ''));
      if (allowed.includes(origin) || allowed.includes('*')) {
        return callback(null, true);
      }
    }

    // Always allow localhost and common hosting domains to prevent CORS errors
    if (
      origin.includes('localhost') ||
      origin.includes('127.0.0.1') ||
      origin.endsWith('.vercel.app') ||
      origin.endsWith('.onrender.com') ||
      origin.includes('addymize')
    ) {
      return callback(null, true);
    }

    // Default permit to prevent hosting blockage
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

// Static folder for local uploads fallback
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Root route for hosting health checks (Render, Railway, etc.)
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    service: 'Addymize Digital Solutions API',
    version: '1.0.0',
    database: getDBStatus() ? 'MongoDB Connected' : 'Hybrid Mock/Memory Fallback',
    timestamp: new Date().toISOString(),
  });
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'Addymize Digital Solutions API',
    database: getDBStatus() ? 'MongoDB Connected' : 'Hybrid Mock/Memory Fallback',
    timestamp: new Date().toISOString(),
  });
});

// Mount API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/leads', leadRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/pricing', pricingRoutes);
app.use('/api/case-studies', caseStudyRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/auth', authRoutes);

// 404 handler for unknown routes
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `API endpoint '${req.originalUrl}' does not exist on Addymize server.`,
  });
});

// Central Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`[Addymize Server Running]: http://localhost:${PORT}`);
  console.log(`[Database Status]: ${getDBStatus() ? 'Connected' : 'Memory/Fallback Mode'}`);
});
