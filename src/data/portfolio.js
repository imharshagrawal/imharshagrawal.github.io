export const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
]

export const STATS = [
  { value: '7',    label: 'Years experience' },
  { value: '7',    label: 'Enterprise clients' },
  { value: '100+', label: 'Planners supported' },
  { value: '30%',  label: 'Recommendation adoption' },
  { value: '5×',   label: 'Revenue uplift (KreditBee)' },
]

export const SKILLS = [
  {
    category: 'Product & Analytics',
    items: ['Product Management','Business Analysis','Data Analytics','EDA','Storyboarding','Roadmapping','UAT','Backlog Mgmt'],
    color: 'accent',
  },
  {
    category: 'Languages & Querying',
    items: ['SQL','Python','Shell Scripting','Groovy Script'],
    color: 'electric',
  },
  {
    category: 'Cloud & Data Platforms',
    items: ['AWS Redshift','S3','EC2','QuickSight','Athena','DMS','IBM Netezza','Toad DB2','Change Data Capture'],
    color: 'emerald',
  },
  {
    category: 'Engineering',
    items: ['ETL Pipelines','Data Warehousing','Data Engineering','GIT','Bitbucket'],
    color: 'amber',
  },
]

export const EXPERIENCE = [
  {
    role: 'Senior Business Analyst — Product Management',
    company: 'Impact Analytics',
    location: 'Bengaluru, India',
    period: 'Jul 2024 – Present',
    subRole: 'InventorySmart (Ordering) — AI-Powered Inventory Planning',
    color: 'accent',
    highlights: [
      'Owned end-to-end product lifecycle of the Ordering module within InventorySmart, an AI-powered inventory planning platform reducing stockouts, excess inventory, and lost sales.',
      'Led 0→1 product development: defined workflows, business logic, UX, data requirements, and functional architecture with Engineering & Data Science teams.',
      'Collaborated with 18+ cross-functional stakeholders across Product, Engineering, QA, Data Science, Solution Consulting, and Business Analysis.',
      'Launched and scaled across 7 enterprise retailers in the US and Australia, supporting 100+ planners and allocators.',
      'Delivered core capabilities: Automated Order Recommendations, PO Expedite, Safety Stock Optimization, PO Rebalancing, and Ad-Hoc Ordering.',
      'Achieved ~30% recommendation adoption across deployed customers, validating product value.',
      'Delivered 3+ major product enhancements post-launch based on usage analytics and customer feedback.',
      'Received executive recognition for strong product health and contribution to InventorySmart\'s strategic growth.',
    ],
    tags: ['0→1 Product', '7 Retailers', '100+ Planners', '30% Adoption'],
  },
  {
    role: 'Senior Data Analyst — Marketing Analytics',
    company: 'KreditBee',
    location: 'Bengaluru, India',
    period: 'Oct 2023 – Jun 2024',
    subRole: 'FinTech Lending Analytics',
    color: 'electric',
    highlights: [
      'Managed portfolios of 15+ financial partners daily, delivering insights on lead conversion, cost-to-conversion, and funnel analysis.',
      'Developed and maintained dashboards providing financial insights for faster strategic decision-making.',
      'Delivered data-driven strategies that boosted partners\' monthly disbursement revenue from ₹1–2 Cr to ₹8–9 Cr — a ~5×growth.',
      'Built new business partnerships to drive customer acquisition and revenue generation.',
      'Identified performance bottlenecks and devised strategies to resolve recurring database and pipeline issues.',
    ],
    tags: ['15+ Partners', '₹8–9 Cr Revenue', 'Funnel Analytics', '5× Growth'],
  },
  {
    role: 'Apprentice Leader — Senior Decision Scientist',
    company: 'Mu Sigma',
    location: 'Bengaluru, India',
    period: 'Oct 2019 – May 2023',
    subRole: 'Australia Bank & Insurance — BFSI Analytics',
    color: 'emerald',
    highlights: [
      'Met ARPC regulatory requirements by identifying property risk for Individual, Strata, and Small Business segments.',
      'Led a team of 5 to develop data assets for ARPC compliance, enabling accurate portfolio and operational reporting.',
      'Identified asynchronized Corporate Property policy assets directly impacting ~750M AUD in uninsured exposure.',
      'Enabled Digital Sales & automated online quote generation for Bike and Car products — ~0.9M AUD benefit in Q4 FY22.',
      'Led Life Insurance data platform migration (~15 data sources) post divestment, saving 2.5M–2.7M AUD while meeting regulatory compliance.',
      'Designed consumer protection framework with an analytical dashboard to monitor Target Market Definitions.',
    ],
    tags: ['~750M AUD Impact', '2.7M AUD Saved', '0.9M AUD Benefit', 'Team Lead'],
  },
]

export const PROJECTS = [
  {
    title: 'InventorySmart — Ordering Module',
    description: 'AI-powered 0→1 inventory ordering platform. Launched across 7 enterprise retailers in US & Australia, supporting 100+ planners with automated recommendations.',
    icon: '📦',
    stack: ['Product', 'AI/ML', 'React', 'AWS', 'Retail SaaS'],
    highlight: '30% adoption rate',
    color: 'accent',
    live: null,
    code: null,
  },
  {
    title: 'FinTech Partner Analytics Dashboard',
    description: 'Marketing analytics platform for 15+ lending partners. Delivered funnel insights and data-driven strategies that grew monthly revenue by 5× from ₹1–2 Cr to ₹8–9 Cr.',
    icon: '📊',
    stack: ['SQL', 'Python', 'QuickSight', 'ETL', 'FinTech'],
    highlight: '5× revenue growth',
    color: 'electric',
    live: null,
    code: null,
  },
  {
    title: 'ARPC Cyclone Compliance Framework',
    description: 'Regulatory data framework for Australian Reinsurance Pool for Cyclone (ARPC). Identified 750M AUD in potentially uninsured exposure across Individual, Strata, and SMB segments.',
    icon: '🛡️',
    stack: ['IBM Netezza', 'ETL', 'Compliance', 'BI', 'BFSI'],
    highlight: '~750M AUD exposure identified',
    color: 'emerald',
    live: null,
    code: null,
  },
  {
    title: 'Life Insurance Data Migration',
    description: 'End-to-end migration of ~15 data sources for Australia\'s largest General Insurer post Life Insurance divestment. Complied with regulatory requirements and saved 2.5–2.7M AUD.',
    icon: '🔄',
    stack: ['Data Engineering', 'IBM CDC', 'Toad DB2', 'BFSI'],
    highlight: '2.7M AUD saved',
    color: 'amber',
    live: null,
    code: null,
  },
]

export const CERTIFICATIONS = [
  { name: 'AWS Cloud Practitioner Essentials', id: 'XYFSAQ56D2N6', issuer: 'Amazon Web Services' },
  { name: 'SQL for Data Science', id: 'VHB5YQZA87MD', issuer: 'Coursera' },
]

export const SOCIAL = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/harshagrawal', icon: 'linkedin' },
  { label: 'GitHub',   href: 'https://github.com/harshagrawal',   icon: 'github' },
  { label: 'Email',    href: 'mailto:h3108.agrawal@gmail.com',      icon: 'mail' },
]
