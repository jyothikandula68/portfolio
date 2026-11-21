export const personalInfo = {
  name: 'Kandula Jyothi',
  fullName: 'Kandula Jyothi',
  title: 'Senior Full-Stack Developer',
  experience: '2+ Years Experience',
  location: 'Hyderabad, India',
  email: 'jyothikandula68@gmail.com',
  phone: '+91 8179861822',
  linkedin: 'https://www.linkedin.com/in/jyothi-kandula-b7b77730b/',
  resumeUrl: '/Kandula-Jyothi-Resume.pdf',
  summary:
    'Senior full-stack developer with 2+ years building scalable SaaS platforms, enterprise applications, and cloud-native systems with NestJS, Node.js, React, Next.js, TypeScript, AWS, and Azure. I focus on document pipelines, workflow automation, payment integrations, and production systems for file processing, PDF generation, invoicing, and secure authentication.',
  about:
    'I design order and medical-record systems for requesters, processors, and admins. That includes an OMS portal with Stripe billing and invoice PDFs, Azure Functions and Blob pipelines for bulk upload and record delivery, Pusher notifications, Redis background jobs, plus medical-record storage and request tracking with role-based access, search, and audit history.',
};

export const stats = [
  { label: 'Years Experience', value: 2, suffix: '+', icon: '💼' },
  { label: 'Systems Shipped', value: 3, suffix: '', icon: '🚀' },
  { label: 'Technologies', value: 15, suffix: '+', icon: '⚡' },
  { label: 'Commitment', value: 100, suffix: '%', icon: '✨' },
];

export const capabilities: {
  title: string;
  description: string;
  tech: string[];
  iconKey:
    | 'invoice'
    | 'stripe'
    | 'files'
    | 'pdf'
    | 'upload'
    | 'email'
    | 'reports'
    | 'workflow'
    | 'security'
    | 'ringcentral'
    | 'ehr'
    | 'realtime';
}[] = [
  {
    title: 'Order Management Systems',
    description:
      'OMS portals and NestJS APIs for medical-record requests, with multi-step forms, applicant and facility details, record types, fees, and order status for requesters, processors, and admins.',
    tech: ['React', 'NestJS', 'MySQL', 'Sequelize'],
    iconKey: 'workflow',
  },
  {
    title: 'Stripe Payments & Invoices',
    description:
      'Online billing for record requests, including Stripe payments, receipts, and invoice PDFs so orders can be charged and paid from the portal.',
    tech: ['Stripe', 'NestJS', 'PDF'],
    iconKey: 'stripe',
  },
  {
    title: 'Azure File Pipelines',
    description:
      'Azure Functions and Blob pipelines for bulk upload, unzip, PDF packaging, declarations, HL7 files, and record delivery.',
    tech: ['Azure Functions', 'Blob Storage', 'HL7'],
    iconKey: 'files',
  },
  {
    title: 'PDF Generation & Processing',
    description:
      'PDF generation, encryption, merging, and packaging, plus DOCX processing, OCR workflows, and image processing for production document flows.',
    tech: ['Puppeteer', 'Playwright', 'Sharp'],
    iconKey: 'pdf',
  },
  {
    title: 'Medical Records System',
    description:
      'Screens and APIs to store and retrieve patient records by medical record number, facility, and record type, with upload, view, download, search, and role-based access.',
    tech: ['React', 'REST APIs', 'MSSQL'],
    iconKey: 'ehr',
  },
  {
    title: 'Request Tracking',
    description:
      'End-to-end tracking from intake through processing, invoicing, and release, with role-based queues, status timelines, audit logs, and notification hooks.',
    tech: ['React', 'Node.js', 'REST APIs'],
    iconKey: 'reports',
  },
  {
    title: 'Real-Time Updates',
    description:
      'Live order updates and in-app notifications with Pusher so requesters and internal teams see status changes as they happen.',
    tech: ['Pusher', 'WebSockets', 'React'],
    iconKey: 'realtime',
  },
  {
    title: 'Background Jobs & Email',
    description:
      'Redis-backed background jobs for email, reminders, and file processing, with caching that keeps order lists and detail screens responsive.',
    tech: ['Redis', 'Node.js', 'Azure'],
    iconKey: 'email',
  },
  {
    title: 'Secure Access Control',
    description:
      'REST APIs and authentication so requesters, processors, and admins only see their own orders, documents, and facility records.',
    tech: ['REST APIs', 'Node.js', 'NestJS'],
    iconKey: 'security',
  },
];

export const techStack = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Redux', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'NestJS', 'Express', 'GraphQL', 'Redis', 'FastAPI'],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'SQL Server'],
  },
  {
    category: 'Cloud',
    items: ['AWS', 'Azure', 'S3', 'Lambda'],
  },
  {
    category: 'Documents & Tools',
    items: ['Puppeteer', 'Playwright', 'Git', 'Postman'],
  },
];

export const education = [
  {
    degree: 'Master of Technology',
    field: '',
    school: '',
    period: 'October 2024',
    detail: 'Graduated October 2024',
    icon: '🎓',
  },
  {
    degree: 'Bachelor of Technology',
    field: '',
    school: '',
    period: 'August 2022',
    detail: 'Graduated August 2022',
    icon: '🎓',
  },
];

export const experiences = [
  {
    role: 'Sr. Software Engineer',
    company: 'Maxtechworks Pvt. Ltd.',
    location: 'Hyderabad, India',
    duration: 'July 2025 – Present',
    accent: '#22C55E',
    highlights: [
      'Built the OMS portal and NestJS APIs for medical-record requests, including multi-step forms, applicant and facility details, record types, and order status.',
      'Developed requester, request-processor, and admin screens for order details, invoices, fees, and facility configuration, backed by MySQL and Sequelize.',
      'Implemented Stripe payments, receipts, and invoice PDFs so record requests can be billed and paid online.',
      'Built Azure Functions and Blob pipelines for bulk upload, unzip, PDF packaging, declarations, HL7 files, and record delivery.',
      'Added real-time order updates and in-app notifications with Pusher, plus Redis-backed background jobs for email, reminders, and file processing.',
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Aadvi Tech Solution',
    location: 'Hyderabad, India',
    duration: 'June 2024 – June 2025',
    accent: '#A855F7',
    highlights: [
      'Delivered full-stack OMS features for creating and managing medical-record orders, including request forms, order details, and status updates.',
      'Built React screens and Node/Express APIs for facilities, applicants, record types, and request-processor workflows.',
      'Developed secure REST APIs and authentication so requesters, processors, and admins only see their own orders and documents.',
      'Improved list and order-detail performance with pagination, caching, and fewer repeat API calls.',
      'Built MRS screens and APIs to store and retrieve patient records by medical record number, facility, and record type, with upload, view, download, search, and role-based access.',
      'Connected MRS records to OMS requests so a new order can pull the right patient and facility documents.',
      'Built RTR screens and REST APIs to track each record request from intake through processing, invoicing, and release, with queues, status timelines, audit logs, and notification hooks.',
    ],
  },
];

export const projects: {
  title: string;
  description: string;
  features?: string[];
  tech: string[];
  gradient: string;
  icon: string;
  liveUrl?: string;
  githubUrl?: string;
  isPersonal?: boolean;
}[] = [
  {
    title: 'Order Management System',
    description:
      'Portal and APIs for creating, billing, and delivering medical-record orders across requester, processor, and admin roles.',
    features: [
      'Multi-step request forms with applicant, facility, and record-type details',
      'Stripe payments, receipts, and invoice PDFs',
      'Azure Functions and Blob pipelines for bulk upload, PDF packaging, and HL7 delivery',
      'Pusher notifications and Redis jobs for email, reminders, and file processing',
    ],
    tech: ['React', 'NestJS', 'MySQL', 'Stripe', 'Azure', 'Pusher', 'Redis'],
    gradient: 'from-emerald-600/30 to-blue-600/20',
    icon: '🗂️',
  },
  {
    title: 'Medical Records System',
    description:
      'System for storing and opening patient records by medical record number, facility, and record type.',
    features: [
      'Document upload, view, and download for authorized users',
      'Search, filters, and role-based access for patient, facility, and custodian data',
      'Linked to OMS so a new order can pull the matching patient and facility documents',
    ],
    tech: ['React', 'Node.js', 'Express', 'MSSQL', 'AWS'],
    gradient: 'from-violet-600/30 to-indigo-600/20',
    icon: '🏥',
  },
  {
    title: 'Record Request Tracking',
    description:
      'Tracking workflow that follows each record request from intake through processing, invoicing, and release.',
    features: [
      'Role-based queues and filters across pending, in-progress, and completed stages',
      'Status timelines, request history, and audit logs',
      'Notification hooks tied to OMS orders, documents, and payments',
    ],
    tech: ['React', 'REST APIs', 'Node.js', 'Redux'],
    gradient: 'from-amber-600/30 to-rose-600/20',
    icon: '📋',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
];

export const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
