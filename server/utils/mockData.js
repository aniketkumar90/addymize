const mockServices = [
  {
    _id: "srv-1",
    title: "Modular Web Development",
    slug: "modular-web-development",
    description: "Scalable digital experiences built for modern businesses with headless Next.js architectures, edge rendering, and design systems.",
    features: ["Next.js & React Core", "Sub-second Page Speeds", "Ultra-responsive Layouts", "Custom Motion & Glass UI"],
    iconName: "Layers",
    order: 1,
    previewImage: "/images/service-web.png"
  },
  {
    _id: "srv-2",
    title: "Intelligent CRM Dashboards",
    slug: "intelligent-crm-dashboards",
    description: "Powerful dashboards that turn complex business telemetry into real-time actionable insights, customer tracking, and automated workflows.",
    features: ["Real-time KPI Tracking", "Predictive Retention Analytics", "Custom Charts & Data Grids", "Enterprise Team Permissions"],
    iconName: "BarChart3",
    order: 2,
    previewImage: "/images/service-crm.png"
  },
  {
    _id: "srv-3",
    title: "Digital Identity & E-commerce",
    slug: "digital-identity-ecommerce",
    description: "Secure digital experiences, multi-tenant authentication, and high-converting commerce platforms with frictionless global checkout.",
    features: ["Biometric & SSO Auth", "Global Multi-currency Checkout", "Automated Fraud Shield", "Sub-second Catalog Search"],
    iconName: "ShoppingBag",
    order: 3,
    previewImage: "/images/service-ecom.png"
  }
];

const mockPricing = [
  {
    _id: "price-1",
    tier: "Starter",
    subtitle: "Web monthly plan",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Perfect for startups and independent founders launching their first digital product.",
    features: [
      "Custom Landing Page Architecture",
      "Tailwind & Framer Motion UI",
      "Essential SEO & Performance Audit",
      "Community Support & Monthly Updates",
      "Standard SSL & Security Core"
    ],
    isPopular: false,
    ctaText: "Get Started Free",
    badge: "Free Tier",
    order: 1
  },
  {
    _id: "price-2",
    tier: "Growth",
    subtitle: "Web growth plan",
    monthlyPrice: 115,
    annualPrice: 95,
    description: "Ideal for scaling businesses requiring bespoke CRM dashboards and high-speed portals.",
    features: [
      "All Starter Features Included",
      "Intelligent CRM Dashboard System",
      "REST & GraphQL API Endpoints",
      "Multi-region CDN & Cloudinary Media",
      "Priority 24/7 Slack & Email Support",
      "Automated Database Backups"
    ],
    isPopular: false,
    ctaText: "Start Growth Plan",
    badge: "Popular",
    order: 2
  },
  {
    _id: "price-3",
    tier: "Enterprise",
    subtitle: "Web monthly plan",
    monthlyPrice: 480,
    annualPrice: 390,
    description: "Full-scale digital transformation with dedicated cloud infrastructure, custom AI models, and SLA.",
    features: [
      "Everything in Growth + Unlimited Scale",
      "Custom Microservices & Edge Pipelines",
      "Enterprise Biometric & SSO Identity",
      "99.99% Uptime Guarantee SLA",
      "Dedicated Full-Stack Solutions Architect",
      "Custom AI Intelligence Workflows",
      "Custom Security Audits & SOC2 Compliance"
    ],
    isPopular: true,
    ctaText: "Claim Enterprise Access",
    badge: "Annual Recommended",
    order: 3
  }
];

const mockCaseStudies = [
  {
    _id: "cs-1",
    title: "Fintech Dashboard & Banking Gateway",
    slug: "fintech-dashboard-banking-gateway",
    category: "Financial Tech",
    metric: "+42% Engagement",
    description: "Re-engineered a legacy global liquidity dashboard into an ultra-fast real-time financial telemetry console handling $120M+ monthly volume.",
    tags: ["Next.js", "WebSocket", "TailwindCSS", "Node.js"],
    image: "/images/case-fintech.png",
    featured: true,
    order: 1
  },
  {
    _id: "cs-2",
    title: "Luxury E-Commerce Global Portal",
    slug: "luxury-ecommerce-global-portal",
    category: "E-Commerce",
    metric: "+67% Conversion",
    description: "Architected a headless 3D interactive storefront with sub-second page transitions, dynamic currency routing, and AI-driven recommendations.",
    tags: ["React", "Cloudinary", "Stripe API", "MongoDB"],
    image: "/images/case-ecommerce.png",
    featured: true,
    order: 2
  },
  {
    _id: "cs-3",
    title: "Enterprise Cloud CRM Infrastructure",
    slug: "enterprise-cloud-crm-infrastructure",
    category: "SaaS Enterprise",
    metric: "-31% Processing Time",
    description: "Unified cross-department telemetry into a single glassmorphic CRM console with automated customer pipeline scoring.",
    tags: ["Express.js", "Mongoose", "Framer Motion", "Redis"],
    image: "/images/case-crm.png",
    featured: true,
    order: 3
  }
];

const mockBlogs = [
  {
    _id: "b-1",
    title: "Architecting Dark Futuristic SaaS Interfaces with Next.js & Tailwind",
    slug: "architecting-dark-futuristic-saas-interfaces",
    category: "Design Engineering",
    author: {
      name: "Alex Sterling",
      role: "Principal Frontend Architect",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    excerpt: "How modern ambient glow effects, radial light gradients, and glassmorphic UI tokens transform ordinary web applications into high-converting enterprise assets.",
    content: "Building dark futuristic SaaS websites requires strict visual discipline. Contrast ratios, layered glass surfaces, and subtle ambient gradients must harmonize without cluttering the user interface...",
    readTime: "6 min read",
    createdAt: new Date("2026-03-15").toISOString()
  },
  {
    _id: "b-2",
    title: "From Monolith to Modular: Scaling Enterprise CRM Dashboards in 2026",
    slug: "from-monolith-to-modular-scaling-dashboards",
    category: "Architecture",
    author: {
      name: "Marcus Vance",
      role: "VP of Engineering",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    featuredImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop&q=80",
    excerpt: "Learn how we architected micro-frontends and WebSocket data streams for ultra-responsive analytics dashboards processing 10,000+ events per second.",
    content: "Real-time enterprise metrics require zero lag. Combining lightweight SVG charts with reactive hooks allows users to filter tens of thousands of data points instantly...",
    readTime: "8 min read",
    createdAt: new Date("2026-03-22").toISOString()
  },
  {
    _id: "b-3",
    title: "Next-Gen Cloud Identity: Balancing Frictionless UX with Zero Trust",
    slug: "next-gen-cloud-identity-zero-trust",
    category: "Cloud Security",
    author: {
      name: "Elena Rostova",
      role: "Cybersecurity Lead",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
    },
    featuredImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    excerpt: "Passkeys, biometric authorization, and distributed session tokens: How to build impenetrable security flows without hurting e-commerce conversion.",
    content: "User authentication doesn't have to be cumbersome. By leveraging WebAuthn and progressive biometric authentication, digital brands can secure client data effortlessly...",
    readTime: "5 min read",
    createdAt: new Date("2026-03-28").toISOString()
  }
];

const mockStats = {
  clients: "450+",
  retention: "98%",
  averageRating: "5-Star",
  reach: "Global",
  activeUsers: "1.2M+",
  uptime: "99.99%",
  supportResponse: "< 15 mins"
};

module.exports = {
  mockServices,
  mockPricing,
  mockCaseStudies,
  mockBlogs,
  mockStats
};
