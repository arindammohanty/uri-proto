import {
  BadgeCheck,
  Briefcase,
  Eye,
  Facebook,
  FilePenLine,
  FileText,
  Gauge,
  Gem,
  Handshake,
  Instagram,
  LineChart,
  Linkedin,
  SearchCheck,
  Twitter,
  UserRoundCheck,
  Users,
  Zap,
} from "lucide-react";
import type {
  FaqItem,
  FeatureRow,
  FooterColumn,
  Industry,
  JobListing,
  NavLink,
  ProcessStep,
  Service,
  ServiceDetail,
  SocialLink,
  Stat,
  TeamMember,
  Testimonial,
  ValueCard,
} from "@/types";

export const SITE_NAME = "URI Tech";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/jobs" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const HERO_BADGES = [
  { value: "5000+", label: "Placements" },
  { value: "200+", label: "Companies" },
];

export const HERO_HEADLINE = {
  prefix: "Unlock Your Career with",
  highlight: "Exclusive Campus Jobs",
};

export const HERO_SUBTEXT =
  "Land your dream job faster with exclusive placements, real-time hiring insights, and direct connections to top recruiters, all in one platform.";

export const HERO_REVIEW = {
  rating: "4.9",
  label: "Over 100+ reviews",
};

export const HERO_AVATARS = [
  { id: "1", src: "/avatars/hero-avatar-1.svg", alt: "URI Tech user review" },
  { id: "2", src: "/avatars/hero-avatar-2.svg", alt: "URI Tech user review" },
  { id: "3", src: "/avatars/hero-avatar-3.svg", alt: "URI Tech user review" },
];

export const SERVICES: Service[] = [
  {
    id: "it-staffing",
    title: "IT Staffing",
    description: "Access a pool of vetted IT professionals ready to join your team.",
    icon: Users,
  },
  {
    id: "contract-hiring",
    title: "Contract Hiring",
    description: "Flexible contract staffing for short-term projects and seasonal needs.",
    icon: FilePenLine,
  },
  {
    id: "permanent-placement",
    title: "Permanent Placement",
    description: "Find the perfect full-time candidates for long-term success.",
    icon: UserRoundCheck,
  },
  {
    id: "hr-consulting",
    title: "HR Consulting",
    description: "Strategic HR solutions to optimize your talent management.",
    icon: Briefcase,
  },
];

export const ABOUT_PARAGRAPHS = [
  "URI Tech is a leading IT staffing and recruitment firm with over 15 years of experience connecting top-tier technology professionals with innovative companies.",
  "Our mission is to bridge the gap between exceptional talent and forward-thinking organizations. We understand the unique challenges of the tech industry and provide customized staffing solutions that drive business success.",
  "With a dedicated team of recruiters and a vast network of IT professionals, we deliver quality candidates faster, ensuring you stay ahead in today's competitive market.",
];

export const STATS: Stat[] = [
  { id: "placements", value: "5000+", label: "Placements" },
  { id: "clients", value: "200+", label: "Client Companies" },
  { id: "experience", value: "15+", label: "Years Experience" },
  { id: "satisfaction", value: "95%", label: "Client Satisfaction" },
];

export const INDUSTRIES_SUBTEXT =
  "Specialized staffing solutions across key technology sectors";

export const INDUSTRIES: Industry[] = [
  {
    id: "it-software",
    label: "IT & Software",
    icon: "/industries/it-software.svg",
    alt: "IT and software industry illustration",
  },
  {
    id: "manufacturing",
    label: "Manufacturing & Logistics",
    icon: "/industries/manufacturing.svg",
    alt: "Manufacturing and logistics industry illustration",
  },
  {
    id: "finance",
    label: "Finance & Accounting",
    icon: "/industries/finance.svg",
    alt: "Finance and accounting industry illustration",
  },
  {
    id: "retail",
    label: "Retail & E-Commerce",
    icon: "/industries/retail.svg",
    alt: "Retail and e-commerce industry illustration",
  },
  {
    id: "healthcare",
    label: "Healthcare & Pharmaceuticals",
    icon: "/industries/healthcare.svg",
    alt: "Healthcare and pharmaceuticals industry illustration",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Amit Sharma",
    title: "Software Engineer at Infosys",
    quote:
      "URI Tech helped me land my dream role at Infosys within weeks. Their recruiters understood my skill set deeply, coached me through every interview stage, and connected me with opportunities I would not have found on my own. The entire experience was seamless and professional.",
    avatar: "/avatars/testimonial-1.svg",
  },
  {
    id: "2",
    name: "Dr. Rajan Gupta",
    title: "Placement Head, XYZ University",
    quote:
      "Our partnership with URI Tech has transformed campus placement outcomes. They have placed over 200 of our graduates at top companies, with significant package improvements year over year. Their team works closely with our placement cell to prepare students and match them with the right employers.",
    avatar: "/avatars/testimonial-2.svg",
  },
  {
    id: "3",
    name: "Dr. Rajan Gupta",
    title: "Placement Head, XYZ University",
    quote:
      "URI Tech's campus recruitment expertise has been invaluable. They bring serious employers to our drives and follow through until every selected candidate is successfully onboarded.",
    avatar: "/avatars/testimonial-2.svg",
  },
  {
    id: "4",
    name: "Priya Mehta",
    title: "HR Manager at TCS",
    quote:
      "Wonderful staffing partner. URI Tech delivers quality candidates faster than anyone we have worked with.",
    avatar: "/avatars/testimonial-4.svg",
  },
  {
    id: "5",
    name: "Rohan Malhotra",
    title: "Marketing Associate at Deloitte",
    quote:
      "The URI Tech process is straightforward and efficient. No lengthy back-and-forth, just direct connections to roles that match your profile. Highly recommend for early-career professionals.",
    avatar: "/avatars/testimonial-5.svg",
  },
  {
    id: "6",
    name: "Rohan Malhotra",
    title: "Marketing Associate at Deloitte",
    quote:
      "I would call URI Tech the most efficient recruitment platform I have used. Quick responses, transparent communication, and genuine opportunities, it just works.",
    avatar: "/avatars/testimonial-5.svg",
  },
];

export const CONTACT_SUBTEXT =
  "Ready to find your next hire or career opportunity? Contact us today.";

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Head Office",
    content: [
      "URI Tech Pvt. Ltd.",
      "3rd Floor, Tech Park Tower",
      "Sector 62, Noida",
      "Uttar Pradesh 201301, India",
    ],
  },
  {
    title: "Contact Us",
    content: ["+91 120 456 7890", "info@uritech.com"],
  },
  {
    title: "Services",
    links: [
      { label: "IT Staffing", href: "/services" },
      { label: "Contract Hiring", href: "/services" },
      { label: "Permanent Placement", href: "/services" },
      { label: "HR Consulting", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Jobs", href: "/jobs" },
      { label: "Industries", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "X (Twitter)", href: "https://twitter.com", icon: Twitter },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
];

export const COPYRIGHT = "Copyright 2026 URI Tech. All rights reserved.";

export const JOB_LOCATION_OPTIONS = [
  "All Locations",
  "Bhubaneswar",
  "Bangalore",
  "Hyderabad",
  "Mumbai",
  "Delhi",
  "Remote",
];

export const JOB_TYPE_OPTIONS = [
  "All Types",
  "Full-Time",
  "Part-Time",
  "Contract",
  "Internship",
];

export const JOB_EXPERIENCE_OPTIONS = [
  "All Levels",
  "Fresher (0-1 yr)",
  "Junior (1-3 yrs)",
  "Mid (3-5 yrs)",
  "Senior (5+ yrs)",
];

export const JOB_DEPARTMENTS = [
  "IT & Software",
  "Finance & Accounting",
  "HR",
  "Operations",
  "Sales",
];

export const JOB_WORK_MODES = ["On-site", "Remote", "Hybrid"];

export const JOB_LISTINGS: JobListing[] = [
  {
    id: "senior-react-developer",
    title: "Senior React Developer",
    company: "Infosys Ltd.",
    location: "Bhubaneswar, Odisha",
    locationFilter: "Bhubaneswar",
    type: "Full-Time",
    experience: "3-5 yrs",
    experienceFilter: "Mid (3-5 yrs)",
    salary: "Rs 12-18 LPA",
    tags: ["React", "TypeScript", "Node.js"],
    posted: "2 days ago",
    department: "IT & Software",
    workMode: "On-site",
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    company: "TCS",
    location: "Bangalore, Karnataka",
    locationFilter: "Bangalore",
    type: "Full-Time",
    experience: "5+ yrs",
    experienceFilter: "Senior (5+ yrs)",
    salary: "Rs 20-28 LPA",
    tags: ["AWS", "Docker", "Kubernetes"],
    posted: "1 day ago",
    department: "IT & Software",
    workMode: "Hybrid",
  },
  {
    id: "hr-business-partner",
    title: "HR Business Partner",
    company: "Wipro Technologies",
    location: "Hyderabad, Telangana",
    locationFilter: "Hyderabad",
    type: "Full-Time",
    experience: "3-5 yrs",
    experienceFilter: "Mid (3-5 yrs)",
    salary: "Rs 8-12 LPA",
    tags: ["HR Strategy", "Talent Management", "HRIS"],
    posted: "3 days ago",
    department: "HR",
    workMode: "On-site",
  },
  {
    id: "cloud-infrastructure-architect",
    title: "Cloud Infrastructure Architect",
    company: "Cognizant",
    location: "Remote",
    locationFilter: "Remote",
    type: "Contract",
    experience: "5+ yrs",
    experienceFilter: "Senior (5+ yrs)",
    salary: "Rs 35-50 LPA",
    tags: ["AWS", "Azure", "Terraform"],
    posted: "Today",
    department: "IT & Software",
    workMode: "Remote",
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    company: "Zoho Corporation",
    location: "Mumbai, Maharashtra",
    locationFilter: "Mumbai",
    type: "Full-Time",
    experience: "1-3 yrs",
    experienceFilter: "Junior (1-3 yrs)",
    salary: "Rs 6-10 LPA",
    tags: ["Figma", "Prototyping", "Design Systems"],
    posted: "5 days ago",
    department: "IT & Software",
    workMode: "Hybrid",
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    company: "HCL Technologies",
    location: "Delhi NCR",
    locationFilter: "Delhi",
    type: "Full-Time",
    experience: "1-3 yrs",
    experienceFilter: "Junior (1-3 yrs)",
    salary: "Rs 7-11 LPA",
    tags: ["SQL", "Power BI", "Python"],
    posted: "4 days ago",
    department: "Finance & Accounting",
    workMode: "On-site",
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    company: "Tech Mahindra",
    location: "Pune, Maharashtra",
    locationFilter: "All Locations",
    type: "Full-Time",
    experience: "3-5 yrs",
    experienceFilter: "Mid (3-5 yrs)",
    salary: "Rs 14-20 LPA",
    tags: ["SIEM", "Threat Analysis", "CompTIA"],
    posted: "1 week ago",
    department: "IT & Software",
    workMode: "Hybrid",
  },
  {
    id: "it-recruiter-fresher",
    title: "IT Recruiter (Fresher)",
    company: "URI Tech",
    location: "Bhubaneswar, Odisha",
    locationFilter: "Bhubaneswar",
    type: "Full-Time",
    experience: "0-1 yr",
    experienceFilter: "Fresher (0-1 yr)",
    salary: "Rs 3-4.5 LPA",
    tags: ["Sourcing", "LinkedIn", "Communication"],
    posted: "Today",
    department: "HR",
    workMode: "On-site",
  },
  {
    id: "sap-functional-consultant",
    title: "SAP Functional Consultant",
    company: "Accenture",
    location: "Bangalore, Karnataka",
    locationFilter: "Bangalore",
    type: "Contract",
    experience: "5+ yrs",
    experienceFilter: "Senior (5+ yrs)",
    salary: "Rs 25-40 LPA",
    tags: ["SAP FICO", "S4 HANA", "ERP"],
    posted: "2 days ago",
    department: "Operations",
    workMode: "Hybrid",
  },
];

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: "it-staffing-detail",
    title: "IT Staffing",
    subhead: "The right tech talent, when you need them.",
    body: "We connect businesses with pre-vetted IT professionals from developers and architects to QA engineers and project managers. Our pool spans full-stack, cloud, data, and infrastructure talent, ready to join your team fast.",
    features: [
      "On-demand talent placement",
      "Pre-screened and interview-ready candidates",
      "Roles filled within 7-14 days",
      "Flexible engagement models",
    ],
    cta: "Explore IT Staffing ->",
    icon: Users,
  },
  {
    id: "contract-hiring-detail",
    title: "Contract Hiring",
    subhead: "Flexible staffing for short-term needs and seasonal peaks.",
    body: "Scale your workforce up or down with contract professionals who hit the ground running. Ideal for project-based work, seasonal demand spikes, and bridge hiring between permanent appointments.",
    features: [
      "Contract durations from 1 month to 2 years",
      "Full compliance and payroll handled",
      "Quick turnaround on urgent requirements",
      "Option to convert to permanent hire",
    ],
    cta: "Explore Contract Hiring ->",
    icon: FileText,
  },
  {
    id: "permanent-placement-detail",
    title: "Permanent Placement",
    subhead: "Find long-term candidates who truly fit your culture.",
    body: "Our permanent placement service goes beyond matching resumes to job descriptions. We assess technical skills, soft skills, and cultural alignment to deliver candidates who stay and grow with your company.",
    features: [
      "Deep candidate assessment process",
      "Industry-specialist recruiters",
      "90-day replacement guarantee",
      "End-to-end onboarding support",
    ],
    cta: "Explore Permanent Placement ->",
    icon: BadgeCheck,
  },
  {
    id: "hr-consulting-detail",
    title: "HR Consulting",
    subhead: "Strategic HR guidance to unlock your people's potential.",
    body: "From building your HR function from scratch to optimizing existing processes, our HR consultants bring hands-on experience across policy design, performance frameworks, compliance, and talent strategy.",
    features: [
      "HR process design and documentation",
      "Compensation and benefits benchmarking",
      "Performance management frameworks",
      "Statutory compliance and labour law advisory",
    ],
    cta: "Explore HR Consulting ->",
    icon: LineChart,
  },
];

export const HOW_WE_WORK_STEPS: ProcessStep[] = [
  {
    id: "understand",
    title: "Understand Your Need",
    description:
      "We start with a detailed brief: role requirements, team culture, timeline, and budget.",
  },
  {
    id: "source",
    title: "Source & Screen",
    description:
      "Our recruiters tap our network and run multi-stage screening to shortlist the best fits.",
  },
  {
    id: "interview",
    title: "You Interview",
    description:
      "We send a curated shortlist. You interview, give feedback, and we iterate fast.",
  },
  {
    id: "support",
    title: "Place & Support",
    description:
      "Once you select, we handle offer negotiation, documentation, and onboarding.",
  },
];

export const CORE_VALUES: ValueCard[] = [
  {
    id: "transparency",
    title: "Transparency",
    description: "We say what we mean, and we mean what we say. No surprises.",
    icon: Eye,
  },
  {
    id: "speed",
    title: "Speed",
    description: "Great candidates move fast. So do we.",
    icon: Zap,
  },
  {
    id: "quality",
    title: "Quality",
    description: "We'd rather send you 3 great candidates than 30 mediocre ones.",
    icon: Gem,
  },
  {
    id: "long-term-fit",
    title: "Long-term Fit",
    description: "We measure success in years, not placements.",
    icon: SearchCheck,
  },
  {
    id: "expertise",
    title: "Expertise",
    description:
      "Our recruiters specialize. They know your industry, not just your job description.",
    icon: Gauge,
  },
  {
    id: "partnership",
    title: "Partnership",
    description: "We're not a vendor. We're an extension of your team.",
    icon: Handshake,
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "rajesh-kumar-nayak",
    name: "Rajesh Kumar Nayak",
    title: "Founder & CEO",
    quote:
      "15 years in IT recruitment. Passionate about placing people in roles where they thrive.",
    initials: "RK",
  },
  {
    id: "priya-sahu",
    name: "Priya Sahu",
    title: "Head of Talent Acquisition",
    quote:
      "Specialist in tech and engineering hiring. Has personally placed 1,200+ candidates.",
    initials: "PS",
  },
  {
    id: "amit-patra",
    name: "Amit Patra",
    title: "Client Relations Lead",
    quote:
      "Works directly with enterprise clients to build long-term hiring partnerships.",
    initials: "AP",
  },
];

export const WHY_CHOOSE_FEATURES: FeatureRow[] = [
  {
    id: "screened",
    title: "Pre-Screened Talent Pool",
    description: "Every candidate is interviewed and verified before you see them.",
  },
  {
    id: "fast",
    title: "Fast Turnaround",
    description: "Average time-to-shortlist: 5 business days.",
  },
  {
    id: "specialists",
    title: "Industry-Specialist Recruiters",
    description:
      "We hire recruiters who've worked in tech, not just recruited for it.",
  },
  {
    id: "guarantee",
    title: "Replacement Guarantee",
    description:
      "Permanent placements: free replacement within 90 days if needed.",
  },
  {
    id: "network",
    title: "Pan-India Network",
    description:
      "Active pools across Bhubaneswar, Bangalore, Hyderabad, Delhi, Mumbai.",
  },
];

export const CLIENT_LOGOS = [
  "Infosys",
  "Wipro",
  "TCS",
  "HCL",
  "Cognizant",
  "Tech Mahindra",
  "Mphasis",
  "Hexaware",
  "NIIT Technologies",
  "Mindtree",
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "fill-position",
    question: "How quickly can you fill a position?",
    answer:
      "For most mid-level IT roles, we can deliver a shortlist of 3-5 pre-screened candidates within 5 business days.",
  },
  {
    id: "client-size",
    question: "Do you work with startups or only enterprise clients?",
    answer:
      "We work with companies of all sizes, from early-stage startups to large enterprises. Our processes scale accordingly.",
  },
  {
    id: "industries",
    question: "What industries do you specialize in?",
    answer:
      "We focus primarily on IT & Software, but also cover Finance & Accounting, HR, Healthcare, and E-Commerce.",
  },
  {
    id: "candidate-fee",
    question: "Is there a fee for job seekers?",
    answer:
      "No. Our services are completely free for candidates. We are paid by the hiring company.",
  },
  {
    id: "replacement",
    question: "What is your replacement guarantee?",
    answer:
      "For permanent placements, if a candidate leaves or is let go within 90 days, we'll replace them at no additional charge.",
  },
  {
    id: "submit-cv",
    question: "How do I submit my CV if I don't see a matching job?",
    answer:
      "Use the I'm Looking for a Job form on this page. We'll add you to our talent pool and reach out when a matching role opens up.",
  },
];
