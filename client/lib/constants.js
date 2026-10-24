export const NAV_LINKS = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
];

export const HERO_STATS = [
  { value: '450+', label: 'Clients', subtext: 'Global enterprise partners' },
  { value: '98%', label: 'Retention', subtext: 'Long-term client trust' },
  { value: '5-Star', label: 'Average', subtext: 'Industry rating score' },
  { value: 'Global', label: 'Reach', subtext: 'Across 34+ countries' },
];

export const SOLUTIONS_DATA = [
  {
    id: 'modular-web',
    title: 'Modular Web Development',
    description: 'Scalable digital experiences built for modern businesses.',
    details: 'Next-generation composable frontend architectures engineered for lightning performance, design token fidelity, and effortless scalability.',
    badge: 'Core Framework',
    icon: 'Layers',
    glowColor: 'rgba(234, 179, 8, 0.25)', // Gold/Amber glow
    borderColor: 'border-amber-500/30',
  },
  {
    id: 'crm-dashboards',
    title: 'Intelligent CRM Dashboards',
    description: 'Powerful dashboards that turn business data into actionable insights.',
    details: 'Live analytical telemetry, user lifecycle pipelines, and automated intelligence layers that bring crystal-clear clarity to executive decisions.',
    badge: 'AI Telemetry',
    icon: 'BarChart3',
    glowColor: 'rgba(56, 189, 248, 0.25)', // Cyan glow
    borderColor: 'border-cyan-500/30',
  },
  {
    id: 'digital-identity',
    title: 'Digital Identity & E-commerce',
    description: 'Secure digital experiences and high-converting commerce platforms.',
    details: 'Zero-trust biometric session authentication coupled with frictionless checkout funnels optimized for maximum transaction velocity.',
    badge: 'Global Commerce',
    icon: 'ShoppingBag',
    glowColor: 'rgba(168, 85, 247, 0.25)', // Purple glow
    borderColor: 'border-purple-500/30',
  },
];

export const PRICING_DATA = [
  {
    id: 'starter',
    name: 'Starter',
    subtitle: 'Web monthly plan',
    monthlyPrice: 0,
    annualPrice: 0,
    displayPrice: 'Free / Custom',
    periodNote: 'Monthly or normal plan',
    annualNote: 'All Annual Plan',
    description: 'Essential launchpad for high-growth startups and foundational digital prototypes.',
    features: [
      'Tailored Next.js Responsive Layout',
      'Modern Glassmorphic Visuals',
      'Basic CRM & Telemetry Hook',
      'Community Support & Updates',
      'Standard SSL & Edge Caching'
    ],
    isPopular: false,
    highlighted: false,
    cta: 'Get Started Free',
  },
  {
    id: 'growth',
    name: 'Growth',
    subtitle: 'Web growth plan',
    monthlyPrice: 115,
    annualPrice: 95,
    displayPrice: '$115',
    periodNote: 'Monthly or normal plan',
    annualNote: 'All Annual Plan',
    description: 'For growing brands looking to scale digital conversions, CRM telemetry, and workflows.',
    features: [
      'Everything in Starter',
      'Intelligent CRM Dashboard Suite',
      'Real-Time Analytics & Live Charts',
      'Cloudinary Media Pipeline & CDN',
      '24/7 Priority Support & Slack Channel',
      'Automated Lead Scoring Engine'
    ],
    isPopular: false,
    highlighted: false,
    cta: 'Start Growth Plan',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    subtitle: 'Web monthly plan',
    monthlyPrice: 480,
    annualPrice: 390,
    displayPrice: '$480',
    periodNote: 'Annual of monthly plan',
    annualNote: 'Annual Annual Plan',
    description: 'Bespoke enterprise engineering with dedicated architecture, SLA, and custom AI agents.',
    features: [
      'Everything in Growth + Unlimited Scale',
      'Custom Biometric & SSO Digital Identity',
      'High-Performance Composable E-Commerce',
      '99.99% Uptime Guarantee SLA',
      'Dedicated Principal Solutions Architect',
      'SOC2 Type II & Zero-Trust Compliance',
      'Custom Machine Learning Insights'
    ],
    isPopular: true,
    highlighted: true,
    badge: 'Annual',
    cta: 'Claim Enterprise Access',
  },
];

export const FEATURES_DATA = [
  {
    icon: 'Sparkles',
    title: 'AI-Powered Analytics',
    description: 'Automated predictive forecasting and behavior clustering synthesized into readable insights.',
  },
  {
    icon: 'Cloud',
    title: 'Cloud Infrastructure',
    description: 'Distributed edge containers deployed globally for ultra-low latency and zero cold starts.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Secure Authentication',
    description: 'Multi-factor authentication, biometric passkeys, and encrypted token session management.',
  },
  {
    icon: 'LayoutDashboard',
    title: 'Advanced CRM',
    description: 'Unified customer telemetry, deal-flow Kanban boards, and high-velocity workflow triggers.',
  },
  {
    icon: 'Activity',
    title: 'Real-Time Insights',
    description: 'Live WebSocket pipelines streaming performance metrics and server health without refreshing.',
  },
  {
    icon: 'Cpu',
    title: 'Scalable Architecture',
    description: 'Modular microservice topology crafted to effortlessly withstand 100x traffic spikes.',
  },
  {
    icon: 'Share2',
    title: 'API Integrations',
    description: 'Turnkey webhooks and RESTful connectors for Stripe, Cloudinary, HubSpot, and custom endpoints.',
  },
  {
    icon: 'Lock',
    title: 'Enterprise Security',
    description: 'Zero-trust network isolation, end-to-end encryption, and continuous vulnerability scans.',
  },
];

export const CASE_STUDIES_DATA = [
  {
    title: 'Fintech Dashboard',
    metric: '+42% Engagement',
    category: 'Financial Tech',
    description: 'Transformed an opaque transaction system into an intuitive, high-frequency liquidity dashboard.',
    tags: ['Next.js', 'WebSockets', 'Fintech'],
    badge: 'Case Study 01',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
  },
  {
    title: 'E-commerce Platform',
    metric: '+67% Conversion',
    category: 'Digital Retail',
    description: 'Redesigned checkout funnel and catalog pipeline, slashing friction and maximizing average order value.',
    tags: ['Headless Commerce', 'Tailwind', 'Cloudinary'],
    badge: 'Case Study 02',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
  },
  {
    title: 'Enterprise CRM',
    metric: '-31% Processing Time',
    category: 'Enterprise SaaS',
    description: 'Automated customer intake and telemetry analytics, saving enterprise account reps 14 hours per week.',
    tags: ['Node.js', 'MongoDB', 'Analytics'],
    badge: 'Case Study 03',
    gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
  },
];

export const ABOUT_METRICS = [
  { value: '99.9%', label: 'Uptime SLA', desc: 'Guaranteed mission-critical availability' },
  { value: '24/7', label: 'Support', desc: 'Direct engineering escalations' },
  { value: '50+', label: 'Integrations', desc: 'Plug-and-play with modern stacks' },
  { value: 'Zero Trust', label: 'Enterprise Security', desc: 'Military-grade end-to-end encryption' },
];

export const BLOG_POSTS_DATA = [
  {
    title: 'Architecting Dark Futuristic SaaS Interfaces with Next.js & Tailwind',
    category: 'Design Engineering',
    excerpt: 'How modern ambient glow effects, radial light gradients, and glassmorphic UI tokens transform ordinary web applications into high-converting enterprise assets.',
    date: 'March 28, 2026',
    readTime: '6 min read',
    author: 'Alex Sterling',
  },
  {
    title: 'From Monolith to Modular: Scaling Enterprise CRM Dashboards in 2026',
    category: 'Architecture',
    excerpt: 'Learn how we architected micro-frontends and WebSocket data streams for ultra-responsive analytics dashboards processing 10,000+ events per second.',
    date: 'March 22, 2026',
    readTime: '8 min read',
    author: 'Marcus Vance',
  },
  {
    title: 'Next-Gen Cloud Identity: Balancing Frictionless UX with Zero Trust',
    category: 'Cloud Security',
    excerpt: 'Passkeys, biometric authorization, and distributed session tokens: How to build impenetrable security flows without hurting e-commerce conversion.',
    date: 'March 15, 2026',
    readTime: '5 min read',
    author: 'Elena Rostova',
  },
];
