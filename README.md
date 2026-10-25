# Trackolab — Intelligent CRM & HRMS Platform

A modern full-stack web platform built with Next.js (Frontend) and Express / Node.js (Backend). Designed for high-scale workforce management, lead tracking, payroll processing, and interactive dashboards.

- **`client/`** — Next.js Frontend Application
- **`server/`** — Node.js & Express API Backend Server

---

## 🚀 Quick Start Guide

### 1. Backend Server Setup

```bash
cd server
npm install
npm run dev
```

The Express API server starts on **http://localhost:5000**.
- Health check: `http://localhost:5000/api/health`
- Note: If MongoDB is running locally at `mongodb://127.0.0.1:27017/addymize`, it connects automatically. If MongoDB is offline, the server gracefully activates its built-in memory/mock data fallback mode so the frontend always functions seamlessly!

To seed the MongoDB database with initial sample data:
```bash
cd server
npm run seed
```

### 2. Frontend Client Setup

```bash
cd client
npm install
npm run dev
```

The Next.js application will start on **http://localhost:3000**.

To build for production:
```bash
cd client
npm run build
npm run start
```

---

## 📁 Project Structure

```
addymize/
├── client/                     # Next.js Frontend Application
│   ├── app/
│   │   ├── globals.css         # Custom tokens, glassmorphism utilities & glow classes
│   │   ├── layout.js           # Plus Jakarta Sans typography, OpenGraph & SEO tags
│   │   └── page.jsx            # Main unified landing page with rounded outer shell
│   ├── components/
│   │   ├── Navbar.jsx          # Glass floating navbar with dropdown & mobile drawer
│   │   ├── Logo.jsx            # Multi-gradient triangular logo mark & brand text
│   │   ├── Button.jsx          # Primary gold, glass, cyan, and outline button variants
│   │   ├── GlassCard.jsx       # Reusable glassmorphic surface with ambient glow
│   │   ├── DashboardMockup.jsx # Interactive hero dashboard with live SVG charts & gauges
│   │   ├── FloatingCard.jsx    # Floating badges & UI elements
│   │   ├── HeroMedia.jsx       # Live dashboard mockup + reference video preview toggle
│   │   ├── StatsCard.jsx       # 4-column glass container (450+, 98%, 5-Star, Global)
│   │   └── DemoModal.jsx       # Interactive lead capture modal with live POST to /api/leads
│   ├── sections/
│   │   ├── Hero.jsx            # Hero section with gradient typography & CTAs
│   │   ├── Solutions.jsx       # 3 core cards (Modular Web, CRM Dashboards, Digital Identity)
│   │   ├── DashboardPreview.jsx# Dedicated telemetry preview with 7D/30D/90D filters
│   │   ├── Features.jsx        # 8-item platform architecture grid
│   │   ├── Pricing.jsx         # Monthly/Annual toggle with highlighted Enterprise card
│   │   ├── CaseStudies.jsx     # Real-world deployments with ROI metrics
│   │   ├── About.jsx           # Split layout with animated uptime & support metrics
│   │   ├── Blog.jsx            # Architecture deep-dive cards connected to API
│   │   ├── Contact.jsx         # Functional contact form submitting to /api/contact
│   │   ├── CTA.jsx             # Final high-conversion CTA with ambient glow
│   │   └── FooterSection.jsx   # Minimalist footer with columns & social SVG links
│   ├── public/
│   │   └── videos/
│   │       └── hero-preview.mp4 # Reference animation video
│   ├── lib/
│   │   ├── api.js              # Resilient client API connector
│   │   └── constants.js        # Content, mock data & navigation definitions
│   └── .env.local              # Client environment variables
│
└── server/                     # Express.js REST API Backend
    ├── config/
    │   ├── db.js               # MongoDB connection with graceful offline fallback
    │   └── cloudinary.js       # Cloudinary SDK configuration
    ├── controllers/            # Contact, leads, pricing, services, case studies, blogs, upload
    ├── models/                 # Mongoose schemas (User, Contact, Project, Service, Pricing, CaseStudy, Blog, Lead)
    ├── routes/                 # Express API routes
    ├── middleware/             # Error handler and Multer file upload
    ├── utils/                  # Cloudinary upload utility & seed data script
    ├── uploads/                # Local uploads fallback directory
    ├── server.js               # Main Express entry point
    ├── .env                    # Server environment variables
    └── .env.example
```

---

## 🎨 Color System & Aesthetics
- **Primary Background**: `#070A14` / `#080B16`
- **Secondary Surfaces**: `#0E1322`, `#141B2D`
- **Glass Surfaces**: `rgba(255, 255, 255, 0.04)` with `backdrop-filter: blur(16px)`
- **Borders**: `rgba(255, 255, 255, 0.08)`
- **Accents**:
  - Warm Golden Amber: `#F59E0B`
  - Cyber Cyan: `#38BDF8`
  - Violet/Purple: `#A855F7`
  - Emerald: `#10B981`
