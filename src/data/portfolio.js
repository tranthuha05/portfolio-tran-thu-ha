export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Research Projects', href: '#research-projects' },
  { label: 'Data & Digital Projects', href: '#data-digital-projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const profile = {
  name: 'Tran Thu Ha',
  title: 'Data Analysis & Public Policy Student',
  intro:
    'I am interested in research, data analysis, and digital tools for solving economic, social, and business problems. My work focuses on applied research, policy-related topics, dashboard development, and decision-support tools.',
  email: 'tranha17122005@gmail.com',
  location: 'Hanoi, Vietnam',
};

export const education = {
  school: 'University of Economics and Business - Vietnam National University, Hanoi',
  degree: 'B.A. in Data Analysis and Public Policy',
  period: '2023 - Present',
  highlights: [
    'GPA: 3.81/4.0',
    'Academic Excellence Scholarship, Semester I 2023-2024',
    'Academic Excellence Scholarship, Semester I 2024-2025',
  ],
};

export const researchProjects = [
  {
    title: 'Tourism Development, Governance Quality, and the Informal Economy',
    status: 'Ongoing Research',
    role: 'Co-author',
    description:
      'This research examines the relationship between tourism development, governance quality, and the informal economy across countries.',
    contributions: [
      'Collected and organized cross-country panel data.',
      'Built the variable framework for tourism, governance, informal economy, and control variables.',
      'Supported literature review and empirical model preparation.',
    ],
    tools: ['Excel', 'Stata/Python', 'WDI', 'WGI', 'World Bank database'],
    keywords: ['Tourism', 'Governance', 'Informal Economy', 'Panel Data'],
    actions: [],
  },
  {
    title:
      'Beyond Push and Pull: International Labor Migration Intention from Hai Phong, Vietnam',
    status: 'Faculty-recognized Research Project | Manuscript in Preparation',
    role: 'Research Team Leader',
    description:
      'This project studies the multidimensional drivers of international labor migration intention from Hai Phong, Vietnam. The research received an excellent evaluation at the faculty level and is currently being developed into an academic manuscript.',
    contributions: [
      'Led and coordinated the student research team.',
      'Processed survey data and supported model development.',
      'Contributed to the research framework, empirical analysis, and academic writing process.',
    ],
    tools: ['Stata', 'Excel'],
    keywords: [
      'Migration Intention',
      'Labor Migration',
      'Survey Data',
      'Development Economics',
    ],
    actions: [],
  },
  {
    title: 'Consumer Willingness to Pay for Certified Coffee Products',
    status: 'Ongoing Research Project',
    role: 'Research Member',
    description:
      'This project examines consumer willingness to pay for certified coffee products, with a focus on sustainable consumption and certified agricultural products.',
    contributions: [
      'Wrote the background report on global coffee production.',
      'Participated in survey activities and data collection.',
      'Supported research development and data collection.',
    ],
    tools: ['Desk research', 'Excel', 'Survey data'],
    keywords: ['Certified Coffee', 'Willingness to Pay', 'Sustainable Consumption'],
    actions: [],
  },
];

export const digitalProjects = [
  {
    title: 'Decision-Making Models Web App',
    status: 'Completed / In Development',
    role: 'Developer and Content Builder',
    description:
      'A web-based learning application designed to support the study of decision-making models through interactive content and visual explanation.',
    contributions: [
      'Built the web app using Python and Streamlit.',
      'Designed learning content and model explanations.',
      'Integrated interactive elements and visual outputs.',
    ],
    tools: ['Python', 'Streamlit', 'GitHub'],
    keywords: ['Web App', 'Decision-Making Models', 'Python', 'Streamlit'],
    actions: [
      {
        label: 'Live Demo',
        href: 'https://cmhrqd-njd53d8tgap2rs2iw5jcwl.streamlit.app/',
      },
      {
        label: 'GitHub Repository',
        href: 'https://github.com/tranthuha05/cmhrqd',
      },
    ],
  },
  {
    title: 'Business Intelligence Dashboard for Enterprise Analysis',
    status: 'Academic Course Project',
    role: 'Dashboard Builder / Data Analyst',
    description:
      'A Power BI dashboard project developed to analyze business performance and support data-driven decision-making for an enterprise case.',
    contributions: [
      'Cleaned and organized business data.',
      'Built interactive dashboards and key performance indicators.',
      'Presented business insights through visual reports.',
    ],
    tools: ['Power BI', 'Excel'],
    keywords: [
      'Business Intelligence',
      'Dashboard',
      'Data Visualization',
      'Business Analysis',
    ],
    actions: [
      { label: 'Dashboard Preview', href: null },
      { label: 'Power BI File', href: null },
    ],
  },
  {
    title: 'Decision Support Workflow for Local Grocery Stores',
    status: 'Applied Automation Project',
    role: 'Workflow Designer',
    description:
      'An n8n workflow project designed to support decision-making for local grocery stores by organizing information and automating repetitive tasks.',
    contributions: [
      'Mapped the decision-making process for local grocery stores.',
      'Designed workflow logic using n8n.',
      'Built a workflow prototype for decision support and task automation.',
    ],
    tools: ['n8n', 'Workflow automation'],
    keywords: ['n8n', 'Automation', 'Decision Support', 'Local Business'],
    actions: [{ label: 'n8n Workflow', href: null }],
  },
];

export const skills = [
  {
    title: 'Research',
    items: ['Literature review', 'Data collection', 'Academic writing', 'Policy analysis'],
  },
  {
    title: 'Data Analysis',
    items: [
      'SPSS',
      'Stata',
      'Excel Advanced',
      'Data cleaning',
      'Statistical analysis',
      'Basic econometric modeling',
    ],
  },
  {
    title: 'Digital Tools',
    items: ['Python', 'Streamlit', 'Power BI', 'n8n', 'GitHub'],
  },
  {
    title: 'Languages',
    items: ['Vietnamese: Native', 'English: IELTS', 'German: Currently learning'],
  },
];

export const experiences = [
  {
    title: 'Executive Committee Member',
    organization:
      'Youth Union, QH-2023-E KTPT 1 - Faculty of Development Economics',
    period: '2023 - Present',
    description:
      'Supported class and faculty-level activities, student events, and internal coordination.',
  },
  {
    title: 'External Relations Member',
    organization: 'Green Entrepreneurship and Environmental Action Club',
    period: '2024 - 2025',
    description:
      'Supported external relations and event organization, including Green Entrepreneurship Camp 2024.',
  },
];

export const certificates = [
  'IELTS, 2023',
  'Microsoft Office Specialist, 2025',
  'Certificate of Party Awareness Training, 2025',
];
