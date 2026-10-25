export const NAV_LINKS = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
];

export const HERO_STATS = [
  { value: '150+', label: 'Clients', subtext: 'Enterprise partners & businesses' },
  { value: '98%', label: 'Retention', subtext: 'Long-term client trust' },
  { value: '5-Star', label: 'Average', subtext: 'Industry rating score' },
  { value: '3+', label: 'Countries', subtext: 'Global reach & operations' },
];

export const SOLUTIONS_DATA = [
  {
    id: 'crm',
    title: 'Intelligent CRM System',
    description: 'Powerful CRM to manage leads, sales pipelines, and customer relationships.',
    details: 'Live analytical telemetry, user lifecycle pipelines, deal-flow Kanban boards, automated lead scoring, and intelligent dashboards that bring crystal-clear clarity to every sales decision.',
    badge: 'CRM Platform',
    icon: 'BarChart3',
    glowColor: 'rgba(56, 189, 248, 0.25)',
    borderColor: 'border-cyan-500/30',
  },
  {
    id: 'hrms',
    title: 'HRMS — Human Resource Management',
    description: 'End-to-end HR platform to manage your entire workforce lifecycle.',
    details: 'Hiring & onboarding, payroll processing, attendance tracking, leave management, performance reviews, and granular role permissions — all in one unified HRMS platform.',
    badge: 'HRMS Platform',
    icon: 'Users',
    glowColor: 'rgba(234, 179, 8, 0.25)',
    borderColor: 'border-amber-500/30',
  },
];

export const PRICING_DATA = [
  {
    id: 'starter',
    name: 'Starter',
    subtitle: 'CRM & HRMS Essential Plan',
    monthlyPrice: 99,
    annualPrice: 79,
    annualTotal: 948,
    originalAnnualTotal: 1188,
    unit: 'per employee / month',
    description: 'Essential launchpad for small teams getting started with CRM & HR management.',
    features: [
      'Core CRM Pipeline (Lead tracking)',
      'HRMS Core (Attendance & Leave tracking)',
      'Employee Directory & Profile Management',
      'Standard Performance & Sales Reports',
      'Email & Standard WhatsApp Support',
    ],
    isPopular: false,
    highlighted: false,
    cta: 'Choose Starter',
  },
  {
    id: 'growth',
    name: 'Growth',
    subtitle: 'CRM & HRMS Most Popular',
    monthlyPrice: 149,
    annualPrice: 119,
    annualTotal: 1428,
    originalAnnualTotal: 1788,
    unit: 'per employee / month',
    description: 'For growing businesses scaling their sales pipeline and automating HR operations.',
    features: [
      'Everything in Starter',
      'Automated Payroll Processing & Payslips',
      'Advanced CRM Sales Pipelines & Kanban',
      'Automated Shift & Leave Approvals',
      'Document Vault & Offer Letter Generator',
      'Priority Phone & WhatsApp Support',
    ],
    isPopular: true,
    highlighted: true,
    cta: 'Start Growth Plan',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    subtitle: 'Full-Scale Enterprise Suite',
    monthlyPrice: 199,
    annualPrice: 159,
    annualTotal: 1908,
    originalAnnualTotal: 2388,
    unit: 'per employee / month',
    description: 'Comprehensive enterprise CRM & HRMS with dedicated architecture, SLA, and custom integrations.',
    features: [
      'Everything in Growth + Unlimited Scale',
      'Custom Workflow Automations & Webhooks',
      'Multi-Branch & Department Hierarchies',
      'Statutory Compliance (PF, ESI, TDS, Form 16)',
      '99.99% Uptime Guarantee & Custom SLA',
      'Dedicated Account Manager & 24/7 Hotline',
    ],
    isPopular: false,
    highlighted: false,
    cta: 'Claim Enterprise Access',
  },
];

export const FEATURES_DATA = [
  {
    icon: 'LayoutDashboard',
    title: 'CRM Dashboard',
    description: 'Unified customer telemetry, deal-flow Kanban boards, and high-velocity workflow triggers.',
  },
  {
    icon: 'Activity',
    title: 'Sales Pipeline',
    description: 'Live sales pipeline tracking with real-time WebSocket updates and automated lead scoring.',
  },
  {
    icon: 'Users',
    title: 'Employee Management',
    description: 'Centralized employee database, department hierarchies, and verified profile management.',
  },
  {
    icon: 'CreditCard',
    title: 'Payroll Processing',
    description: 'Automated monthly salary slips, statutory deductions, and expense reimbursement workflows.',
  },
  {
    icon: 'Star',
    title: 'Performance Reviews',
    description: 'Structured appraisal cycles, goal tracking, and performance passbook for every employee.',
  },
  {
    icon: 'Sparkles',
    title: 'AI-Powered Analytics',
    description: 'Automated predictive forecasting and behavior clustering synthesized into readable HR & CRM insights.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Role-Based Access',
    description: 'Granular 51-point role permissions, department isolation, and hierarchy access control.',
  },
  {
    icon: 'Share2',
    title: 'API Integrations',
    description: 'Turnkey webhooks and RESTful connectors for Slack, accounting tools, and custom endpoints.',
  },
];

export const CASE_STUDIES_DATA = [
  {
    title: 'Enterprise CRM Deployment',
    metric: '-31% Processing Time',
    category: 'CRM Platform',
    description: 'Automated customer intake and telemetry analytics, saving enterprise sales reps 14 hours per week and boosting deal closures.',
    tags: ['CRM', 'Node.js', 'Analytics'],
    badge: 'Case Study 01',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
  },
  {
    title: 'HRMS for 1,200 Employees',
    metric: '+67% HR Efficiency',
    category: 'HRMS Platform',
    description: 'Deployed full-scale HRMS covering payroll, leave, attendance, and performance reviews for a mid-size manufacturing firm.',
    tags: ['HRMS', 'Payroll', 'Attendance'],
    badge: 'Case Study 02',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
  },
  {
    title: 'CRM + HRMS Integration',
    metric: '+42% Productivity',
    category: 'Unified Platform',
    description: 'Unified CRM and HRMS on a single platform, enabling seamless data flow between sales teams and HR operations.',
    tags: ['CRM', 'HRMS', 'Integration'],
    badge: 'Case Study 03',
    gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
  },
];

export const ABOUT_METRICS = [
  { value: '99.9%', label: 'Uptime SLA', desc: 'Guaranteed mission-critical availability' },
  { value: '24/7', label: 'Support', desc: 'Direct engineering escalations' },
  { value: '150+', label: 'Businesses', desc: 'Using our CRM & HRMS platform' },
  { value: '3+', label: 'Countries', desc: 'Global presence & enterprise reach' },
];

export const BLOG_POSTS_DATA = [
  {
    title: 'How Intelligent CRM Dashboards Are Transforming Sales Teams in 2026',
    category: 'CRM Insights',
    excerpt: 'How modern CRM telemetry, AI lead scoring, and real-time pipeline visibility help sales teams close more deals with less manual effort.',
    date: 'March 28, 2026',
    readTime: '6 min read',
    author: 'Alex Sterling',
  },
  {
    title: 'HRMS in 2026: From Manual Payroll to Fully Automated Workforce Management',
    category: 'HR Technology',
    excerpt: 'Learn how modern HRMS platforms automate payroll, attendance, leave, and performance reviews — saving HR teams 20+ hours per week.',
    date: 'March 22, 2026',
    readTime: '8 min read',
    author: 'Marcus Vance',
  },
  {
    title: 'Why Integrating CRM and HRMS on One Platform Drives Business Growth',
    category: 'Platform Strategy',
    excerpt: 'A unified CRM & HRMS platform eliminates data silos, aligns sales and people operations, and unlocks powerful cross-functional insights.',
    date: 'March 15, 2026',
    readTime: '5 min read',
    author: 'Elena Rostova',
  },
];
