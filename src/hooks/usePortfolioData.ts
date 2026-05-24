import { useTranslation } from '../context/i18nContext';
import { Project, SkillGroup, Experience, Education, Certification, Language } from '../types';

export const usePortfolioData = () => {
  const { t } = useTranslation();

  const PERSONAL_INFO = {
    name: "Hari Prasanth V",
    roleTitle: t("portfolio.personalInfo.roleTitle"),
    email: "hari.prasanth.v.dev@gmail.com",
    phone: "+91 82709 89679",
    linkedin: "linkedin.com/in/v-hari-prasanth",
    github: "github.com/hariprasanth-dev",
    portfolioUrl: "hari-prasanth-v-software-engineer.vercel.app",
    location: t("portfolio.personalInfo.location"),
    visaStatus: t("portfolio.personalInfo.visaStatus"),
    noticePeriod: "15 days",
    workMode: t("portfolio.personalInfo.workMode"),
  };

  const PROJECTS: Project[] = [
    {
      id: "crayoon",
      name: "Crayoon",
      type: t("portfolio.projects.crayoon.type"),
      client: t("portfolio.projects.crayoon.client"),
      timeline: "Aug 2025 – Feb 2026",
      problem: t("portfolio.projects.crayoon.problem"),
      approach: t("portfolio.projects.crayoon.approach"),
      impact: t("portfolio.projects.crayoon.impact"),
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
        architectureReasoning: t("portfolio.projects.crayoon.deepDive.architectureReasoning"),
        tradeoffs: t("portfolio.projects.crayoon.deepDive.tradeoffs"),
        wouldDoDifferently: t("portfolio.projects.crayoon.deepDive.wouldDoDifferently"),
        codeSnippet: `// Representative snippet showing a generic UniformCustomizer component\ninterface Props {\n  sizes: string[];\n  onUpdate: (selection: string) => void;\n}\n\nexport const UniformCustomizer = ({ sizes, onUpdate }: Props) => {\n  // Implementation logic for real-time size allocation\n};`,
      },
    },
    {
      id: "vigilance",
      name: "Vigilance",
      type: t("portfolio.projects.vigilance.type"),
      client: t("portfolio.projects.vigilance.client"),
      timeline: "Mar 2025 – Aug 2025",
      problem: t("portfolio.projects.vigilance.problem"),
      approach: t("portfolio.projects.vigilance.approach"),
      impact: t("portfolio.projects.vigilance.impact"),
      techStack: [
        "React.js",
        "TypeScript",
        "FastAPI",
        "DOM Virtualization",
        "REST APIs",
      ],
      imagePath: "/images/projects/vigilance.jpg",
      deepDive: {
        architectureReasoning: t("portfolio.projects.vigilance.deepDive.architectureReasoning"),
        tradeoffs: t("portfolio.projects.vigilance.deepDive.tradeoffs"),
        wouldDoDifferently: t("portfolio.projects.vigilance.deepDive.wouldDoDifferently"),
        codeSnippet: `// Virtualization logic helper\nconst renderRow = ({ index, style }) => (\n  <div style={style} className='border-b'>\n    {data[index].assessmentName}\n  </div>\n);`,
      },
    },
    {
      id: "shopq",
      name: "ShopQ",
      type: t("portfolio.projects.shopq.type"),
      client: t("portfolio.projects.shopq.client"),
      timeline: "Sep 2024 – Mar 2025",
      problem: t("portfolio.projects.shopq.problem"),
      approach: t("portfolio.projects.shopq.approach"),
      impact: t("portfolio.projects.shopq.impact"),
      techStack: ["React.js", "Bootstrap", "REST APIs", "Formik", "Yup"],
      imagePath: "/images/projects/shopq.png",
      projectUrl: "https://www.shopq.online/",
      deepDive: {
        architectureReasoning: t("portfolio.projects.shopq.deepDive.architectureReasoning"),
        tradeoffs: t("portfolio.projects.shopq.deepDive.tradeoffs"),
        wouldDoDifferently: t("portfolio.projects.shopq.deepDive.wouldDoDifferently"),
        codeSnippet: `// Lead capture validation schema\nconst SignupSchema = Yup.object().shape({\n  email: Yup.string().email('Invalid email').required('Required'),\n});`,
      },
    },
  ];

  const SKILL_GROUPS: SkillGroup[] = [
    {
      category: t("portfolio.skillGroups.frontend"),
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
      category: t("portfolio.skillGroups.styling"),
      skills: ["Tailwind CSS", "Bootstrap", "Responsive Design", "Motion"],
    },
    {
      category: t("portfolio.skillGroups.stateData"),
      skills: ["Redux Toolkit", "React Query", "Context API"],
    },
    { category: t("portfolio.skillGroups.testing"), skills: ["Jest", "React Testing Library"] },
    {
      category: t("portfolio.skillGroups.backendApis"),
      skills: ["FastAPI (Python)", "RESTful APIs", "PostgreSQL"],
    },
    {
      category: t("portfolio.skillGroups.infrastructure"),
      skills: ["AWS (S3, EC2)", "Firebase", "Docker", "GitHub Actions"],
    },
    { category: t("portfolio.skillGroups.tooling"), skills: ["Vite", "Webpack", "Git", "Figma Handoff"] },
    {
      category: t("portfolio.skillGroups.performance"),
      skills: [
        "DOM Virtualization",
        "Lazy Loading",
        "Code Splitting",
        "Core Web Vitals",
      ],
    },
  ];

  const EXPERIENCE: Experience[] = [
    {
      title: t("portfolio.experience.0.title"),
      company: t("portfolio.experience.0.company"),
      location: t("portfolio.experience.0.location"),
      period: t("portfolio.experience.0.period"),
      responsibilities: t("portfolio.experience.0.responsibilities"),
    },
  ];

  const EDUCATION: Education[] = [
    {
      degree: t("portfolio.education.0.degree"),
      institution: t("portfolio.education.0.institution"),
      location: t("portfolio.education.0.location"),
      period: t("portfolio.education.0.period"),
      notes: t("portfolio.education.0.notes"),
    },
  ];

  const CERTIFICATIONS: Certification[] = [
    {
      title: t("portfolio.certifications.0.title"),
      issuer: t("portfolio.certifications.0.issuer"),
      period: t("portfolio.certifications.0.period"),
      topics: t("portfolio.certifications.0.topics"),
    },
  ];

  const LANGUAGES: Language[] = [
    { name: t("portfolio.languages.tamil.name"), level: t("portfolio.languages.tamil.level"), proficiency: 100, flag: "in" },
    { name: t("portfolio.languages.english.name"), level: t("portfolio.languages.english.level"), proficiency: 85, flag: "gb" },
    { name: t("portfolio.languages.german.name"), level: t("portfolio.languages.german.level"), proficiency: 20, flag: "de" },
    { name: t("portfolio.languages.hindi.name"), level: t("portfolio.languages.hindi.level"), proficiency: 75, flag: "in" },
  ];

  return { PERSONAL_INFO, PROJECTS, SKILL_GROUPS, EXPERIENCE, EDUCATION, CERTIFICATIONS, LANGUAGES };
};
