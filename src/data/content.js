export const person = {
  name: 'Nitish Agrawal',
  title: 'Senior Product Manager',
  location: 'Montreal, QC, Canada',
  email: 'agrawalnitish16@gmail.com',
  linkedin: 'https://ca.linkedin.com/in/agrawalnitish16',
}

export const about = {
  tagline: 'Product Manager with 10+ years building data-driven financial products.',
  bio: 'I turn complex systems into products people trust. From financial surveillance platforms at Morgan Stanley to analytics tooling at BNP Paribas — I operate at the intersection of engineering, data, and business strategy. I ship with urgency, communicate with clarity, and lead with ownership. Beyond the day job, I build real products using Claude Code and the Claude API — bridging the gap between PM thinking and hands-on execution in the age of AI.',
}

export const stats = [
  { prefix: '+', value: 30, suffix: '%', label: 'increase in misconduct detection' },
  { prefix: '', value: 95, suffix: '%', label: 'UAT user acceptance rate' },
  { prefix: '', value: 100, suffix: '%', label: 'on-time delivery record' },
]

export const skillGroups = [
  {
    category: 'Product & Delivery',
    items: ['Product roadmaps', 'Backlog management', 'Sprint planning', 'Agile / Scrum', 'Release management', 'Feature launches', 'Iterative delivery'],
  },
  {
    category: 'Discovery & Strategy',
    items: ['Systems thinking', 'First-principles analysis', 'Problem discovery', 'User journeys', 'Workflow mapping'],
  },
  {
    category: 'Data & Analytics',
    items: ['SQL', 'KPI definition', 'Funnel analysis', 'A/B testing', 'Metrics-driven decisions', 'Data analysis'],
  },
  {
    category: 'Collaboration & Communication',
    items: ['Cross-functional leadership', 'Stakeholder management', 'Executive communication', 'Technical-to-non-technical translation'],
  },
  {
    category: 'Financial & Risk Expertise',
    items: ['Financial Products', 'Wealth Management', 'Risk Platforms', 'Compliance Systems', 'Trading & Surveillance', 'Fraud & Misconduct Detection', 'Regulatory Requirements'],
  },
  {
    category: 'Documentation & Quality',
    items: ['PRDs', 'BRDs', 'FRDs', 'UAT planning', 'Post-launch monitoring', 'Incident analysis'],
  },
  {
    category: 'AI & Emerging Technology',
    items: ['Claude Code', 'Claude API', 'Prompt engineering', 'LLM integration', 'AI-assisted development', 'Agentic workflows', 'AI product specification'],
  },
]

export const tools = [
  'Jira', 'Confluence', 'PowerBI', 'Qlikview', 'Roadmunk',
  'Informatica', 'GitHub', 'SQL Developer', 'Actimize',
  'Moodys', 'Autosys', 'Visio', 'SharePoint', 'MS Office',
  'Claude Code', 'Claude API', 'Cursor',
]

export const experience = [
  {
    role: 'Senior Product Manager',
    company: 'Morgan Stanley',
    location: 'Montreal, QC',
    period: 'May 2022 — Present',
    bullets: [
      'Owned and shipped multiple financial surveillance products end-to-end, increasing misconduct detection by 30% through iterative, data-driven releases.',
      'Defined product vision, roadmap, and priorities — balancing business impact, technical tradeoffs, and delivery speed in a complex, regulated environment.',
      'Simplified complex operational workflows by mapping systems end to end, partnering with engineering to remove bottlenecks.',
      'Consistently met 100% of delivery timelines using Agile; led UAT achieving 95% user acceptance.',
      'Served as the primary communication bridge between engineering, compliance, and business teams — translating complex technical architectures into clear, actionable decisions.',
    ],
  },
  {
    role: 'Business Analyst (AVP)',
    company: 'BNP Paribas',
    location: 'Montreal, QC',
    period: 'Sep 2017 — May 2022',
    bullets: [
      'Produced clear workflow and functional documents driving balanced solutions across people, process, and technology.',
      'Translated user requests into precise technical requirements for development and testing teams.',
      'Defined User Story acceptance criteria used by developers, testers, and release managers.',
      'Worked with data visualization tools (Qlikview, Tableau) and closely with ETL teams to source data across upstream/downstream systems.',
    ],
  },
  {
    role: 'Software QA Analyst',
    company: 'TrackTik Canada Inc.',
    location: 'Montreal, QC',
    period: 'May 2016 — Sep 2017',
    bullets: [
      'Performed blackbox, sanity, database, and regression testing across QA, pre-production, and production environments for a SaaS security operations platform.',
      'Collaborated with product, sales, and engineering teams; led sprint deployments with the product owner using Agile methodology.',
    ],
  },
  {
    role: 'Software QA Intern',
    company: 'Nuance Communications (Microsoft)',
    location: 'Montreal, QC',
    period: 'Jan 2016 — Apr 2016',
    bullets: [
      'Wrote functional test cases for new features and performed regression, functional, and black-box testing on the Nuance client portal.',
      'Analyze new features and write functional test cases against their requirements.',
    ],
  },
]

export const projects = [
  {
    id: '01',
    title: 'FitWithNitish',
    subtitle: 'Personal Fitness Platform',
    description: 'A full-stack fitness web app designed and built entirely using Claude Code — workout tracking, nutrition logging, progress dashboards, and adaptive training plans. Proof that a PM who understands AI tooling can ship a real product end-to-end without a dev team.',
    tags: ['React', 'Node.js', 'Tailwind CSS', 'Chart.js', 'Claude Code'],
    status: 'In Progress',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    accent: '#D4A853',
    featured: true,
    link: null,
  },
  {
    id: '02',
    title: 'ResumeAI',
    subtitle: 'AI-Powered Resume Screener',
    description: 'Paste a job description and a resume — get an instant match score, gap analysis, and rewrite suggestions powered by Claude AI. Cuts screening time for hiring managers by 80%.',
    tags: ['Claude API', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    status: 'Building',
    gradient: 'linear-gradient(135deg, #0d1117 0%, #1a1f2e 50%, #0d2137 100%)',
    accent: '#58a6ff',
    featured: false,
    link: null,
  },
  {
    id: '03',
    title: 'PM Copilot',
    subtitle: 'AI Product Management Assistant',
    description: 'An AI assistant that helps PMs write PRDs, generate user stories from rough ideas, run competitive analysis, and draft stakeholder updates — trained on PM best practices.',
    tags: ['Claude API', 'React', 'Supabase', 'Vercel AI SDK'],
    status: 'Coming Soon',
    gradient: 'linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 50%, #1a0a2e 100%)',
    accent: '#a855f7',
    featured: false,
    link: null,
  },
  {
    id: '04',
    title: 'DataLens',
    subtitle: 'Natural Language SQL Generator',
    description: 'Ask questions in plain English, get SQL queries back instantly. Built for non-technical stakeholders who need quick answers from databases without waiting on analysts.',
    tags: ['Claude API', 'Python', 'FastAPI', 'React', 'PostgreSQL'],
    status: 'Coming Soon',
    gradient: 'linear-gradient(135deg, #0a1a0a 0%, #0d2b0d 50%, #1a3a1a 100%)',
    accent: '#4ade80',
    featured: false,
    link: null,
  },
]

export const certifications = [
  {
    title: 'Product Management Professional Certificate',
    issuer: 'Aha!',
    date: 'May 2024',
  },
  {
    title: 'Business Analytics Nanodegree',
    issuer: 'Udacity',
    date: 'May 2022',
  },
]

export const education = [
  {
    degree: 'Master of Engineering',
    school: 'Concordia University',
    location: 'Montreal, QC',
    period: '2013 — 2015',
  },
  {
    degree: 'Bachelor of Science in Information Technology',
    school: 'Radharaman Institute of Research and Technology',
    location: 'Bhopal, India',
    period: '2008 — 2012',
  },
]
