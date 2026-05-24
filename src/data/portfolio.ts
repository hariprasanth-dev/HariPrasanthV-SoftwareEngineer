import {
  Project,
  SkillGroup,
  Experience,
  Education,
  Certification,
  Language,
} from "../types";

export const PERSONAL_INFO = {
  name: "Hari Prasanth V",
  roleTitle: "Frontend Engineer — React · Next.js · TypeScript",
  email: "hari.prasanth.v.dev@gmail.com",
  phone: "+91 82709 89679",
  linkedin: "linkedin.com/in/v-hari-prasanth",
  github: "github.com/hariprasanth-dev",
  portfolioUrl: "hari-prasanth-v-software-engineer.vercel.app",
  location: "Tiruppur, India · Open to relocation to Germany",
  visaStatus:
    "Indian citizen · EU Blue Card eligible · Visa sponsorship required",
  noticePeriod: "15 days",
  workMode: "On-site, Hybrid, or Remote — fully flexible",
};

export const PROJECTS: Project[] = [
  {
    id: "crayoon",
    name: "Crayoon",
    type: "Enterprise Uniform Management & E-Commerce Platform",
    client: "ApplogiQ (Production Client)",
    timeline: "Aug 2025 – Feb 2026",
    problem:
      "Schools and corporate clients had no unified system to manage uniform catalogues, size allocations, and order fulfilment — leading to manual errors and slow delivery cycles.",
    approach: [
      "Architected a full-scale uniform management and e-commerce system.",
      "Built 20+ reusable React components shared across web and mobile platforms.",
      "Integrated FastAPI backend for real-time order handling and inventory updates.",
      "Co-authored a Jest + React Testing Library strategy for 100% core form coverage.",
    ],
    impact: [
      { label: "UI Dev Time", value: "↓ 30%" },
      { label: "Regression Confidence", value: "↑ 60%" },
    ],
    techStack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Jest",
      "RTL",
    ],
    imagePath: "/images/projects/crayoon.jpg",
    projectUrl: "https://www.crayoon.in/",
    deepDive: {
      architectureReasoning:
        "[Explain here why you chose Next.js for its built-in routing and SEO capabilities for the public-facing catalogue, while keeping the internal management dashboard strictly as a client-side layout to optimize for state-heavy uniform customizers.]",
      tradeoffs: [
        {
          considered: "Redux for state",
          whyRejected: "Overhead of boilerplate for rapid development cycle",
          whyChosen: "React Query + Context API",
        },
      ],
      wouldDoDifferently:
        "I would have introduced a monorepo structure earlier to share types more seamlessly between the FastAPI backend and the React frontend.",
      codeSnippet:
        "// Representative snippet showing a generic UniformCustomizer component\ninterface Props {\n  sizes: string[];\n  onUpdate: (selection: string) => void;\n}\n\nexport const UniformCustomizer = ({ sizes, onUpdate }: Props) => {\n  // Implementation logic for real-time size allocation\n};",
    },
  },
  {
    id: "vigilance",
    name: "Vigilance",
    type: "Security Assessment & Reporting System",
    client: "ApplogiQ (Production Client)",
    timeline: "Mar 2025 – Aug 2025",
    problem:
      "Field managers were using paper-based tools for property security assessments, resulting in slow, error-prone report generation on mobile devices.",
    approach: [
      "Engineered a data-driven web application for conducting risk assessments.",
      "Implemented DOM virtualization and lazy loading for large datasets (1000+ records).",
      "Designed interactive dashboards and multi-step form workflows.",
    ],
    impact: [
      { label: "Mobile Report Load", value: "↓ 40%" },
      { label: "Data Entry Accuracy", value: "↑ 95%" },
    ],
    techStack: [
      "React.js",
      "TypeScript",
      "FastAPI",
      "DOM Virtualization",
      "REST APIs",
    ],
    imagePath: "/images/projects/vigilance.jpg",
    deepDive: {
      architectureReasoning:
        "[Explain here why you chose DOM virtualization over infinite scroll — e.g., the assessment tables required consistent sorting across thousands of rows without triggering multiple network requests on field-strength mobile networks.]",
      tradeoffs: [
        {
          considered: "Standard Table",
          whyRejected: "Mobile performance degraded with 500+ records",
          whyChosen: "Virtualized List",
        },
      ],
      wouldDoDifferently:
        "Implement offline-first capability using PWA features to handle field assessments in areas with zero connectivity.",
      codeSnippet:
        "// Virtualization logic helper\nconst renderRow = ({ index, style }) => (\n  <div style={style} className='border-b'>\n    {data[index].assessmentName}\n  </div>\n);",
    },
  },
  {
    id: "shopq",
    name: "ShopQ",
    type: "SaaS E-Commerce Landing & Conversion Interface",
    client: "ApplogiQ (Production Client)",
    timeline: "Sep 2024 – Mar 2025",
    problem:
      "The client needed a high-conversion landing platform to support a go-to-market launch for their catalog management system.",
    approach: [
      "Delivered a responsive, component-driven UI with React.js and Bootstrap.",
      "Implemented validated lead-capture forms and interactive product demos.",
      "Optimized user flows for demo-booking conversions.",
    ],
    impact: [
      { label: "Conversion Rate", value: "↑ 25%" },
      { label: "Cross-Device Compatibility", value: "100%" },
    ],
    techStack: ["React.js", "Bootstrap", "REST APIs", "Formik", "Yup"],
    imagePath: "/images/projects/shopq.png",
    projectUrl: "https://www.shopq.online/",
    deepDive: {
      architectureReasoning:
        "[Explain here why you chose Bootstrap for this specific landing page — e.g., the requirement for rapid-prototyping and leveraging a massive library of pre-built conversion components to hit a strict 2-week go-to-market deadline.]",
      tradeoffs: [
        {
          considered: "Custom CSS",
          whyRejected: "Time-to-market constraints",
          whyChosen: "Bootstrap Utility Layer",
        },
      ],
      wouldDoDifferently:
        "I would use Tailwind CSS instead of Bootstrap for better control over the design tokens and a smaller final CSS bundle size.",
      codeSnippet:
        "// Lead capture validation schema\nconst SignupSchema = Yup.object().shape({\n  email: Yup.string().email('Invalid email').required('Required'),\n});",
    },
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js 14",
      "TypeScript",
      "JavaScript (ES2022+)",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Styling",
    skills: ["Tailwind CSS", "Bootstrap", "Responsive Design", "Motion"],
  },
  {
    category: "State & Data",
    skills: ["Redux Toolkit", "React Query", "Context API"],
  },
  { category: "Testing", skills: ["Jest", "React Testing Library"] },
  {
    category: "Backend / APIs",
    skills: ["FastAPI (Python)", "RESTful APIs", "PostgreSQL"],
  },
  {
    category: "Infrastructure",
    skills: ["AWS (S3, EC2)", "Firebase", "Docker", "GitHub Actions"],
  },
  { category: "Tooling", skills: ["Vite", "Webpack", "Git", "Figma Handoff"] },
  {
    category: "Performance",
    skills: [
      "DOM Virtualization",
      "Lazy Loading",
      "Code Splitting",
      "Core Web Vitals",
    ],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    title: "Software Engineer — Frontend",
    company: "ApplogiQ",
    location: "Tiruppur, India",
    period: "Jul 2024 – Present",
    responsibilities: [
      "Developed production-ready frontend solutions across real estate, SaaS, healthcare, and e-commerce verticals.",
      "Integrated FastAPI-based REST APIs across 3 live production applications, shipping priority features on schedule.",
      "Maintained cross-browser compatibility and component-based UI architecture.",
      "Configured CI/CD pipelines using GitHub Actions to automate build and testing workflows.",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Business Administration with Computer Applications",
    institution: "RVS College of Arts and Science",
    location: "Coimbatore, India",
    period: "Sep 2021 – Apr 2024",
    notes:
      "Coursework included programming concepts, web technologies, database management, and IT systems.",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Full-Stack Web Developer Certification",
    issuer: "SkillVertex",
    period: "Mar 2023 – Jun 2023",
    topics: ["React.js", "Responsive UI Design", "REST API Integration"],
  },
];

export const LANGUAGES: Language[] = [
  { name: "Tamil", level: "Native", proficiency: 100, flag: "in" },
  { name: "English", level: "Professional (B2+)", proficiency: 85, flag: "gb" },
  { name: "German", level: "Beginner (A1)", proficiency: 20, flag: "de" },
  { name: "Hindi", level: "Conversational", proficiency: 75, flag: "in" },
];
