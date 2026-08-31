import { useTranslation } from '../context/i18nContext';
import { Project, AdditionalProject, SkillGroup, Experience, Education, Certification, Language } from '../types';

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
    noticePeriod: "Immediate / 15 days",
    workMode: t("portfolio.personalInfo.workMode"),
  };

  const PROJECTS: Project[] = [
    {
      id: "applogiq",
      name: "ApplogiQ Website & Admin",
      type: t("portfolio.projects.applogiq.type"),
      client: t("portfolio.projects.applogiq.client"),
      timeline: "Jun 2026 – Present",
      problem: t("portfolio.projects.applogiq.problem"),
      approach: t("portfolio.projects.applogiq.approach"),
      impact: t("portfolio.projects.applogiq.impact"),
      techStack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
      imagePath: "/images/projects/applogiq.jpg",
      projectUrl: "https://www.applogiq.org/",
      deepDive: {
        architectureReasoning: t("portfolio.projects.applogiq.deepDive.architectureReasoning"),
        tradeoffs: t("portfolio.projects.applogiq.deepDive.tradeoffs"),
        wouldDoDifferently: t("portfolio.projects.applogiq.deepDive.wouldDoDifferently"),
        codeSnippet: `type LeadPayload = {\n  source: "website" | "admin";\n  name: string;\n  email: string;\n};\n\nexport async function syncLead(payload: LeadPayload) {\n  return fetch("/api/leads", {\n    method: "POST",\n    body: JSON.stringify(payload),\n  });\n}`,
      },
    },
    {
      id: "planora",
      name: "Planora",
      type: t("portfolio.projects.planora.type"),
      client: t("portfolio.projects.planora.client"),
      timeline: "May 2026 – Present",
      problem: t("portfolio.projects.planora.problem"),
      approach: t("portfolio.projects.planora.approach"),
      impact: t("portfolio.projects.planora.impact"),
      techStack: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "FastAPI",
        "Cursor AI",
      ],
      deepDive: {
        architectureReasoning: t("portfolio.projects.planora.deepDive.architectureReasoning"),
        tradeoffs: t("portfolio.projects.planora.deepDive.tradeoffs"),
        wouldDoDifferently: t("portfolio.projects.planora.deepDive.wouldDoDifferently"),
        codeSnippet: `const canAccess = (role: Role, module: Module) => {\n  return role.permissions.includes(module.key);\n};\n\nexport const useModuleGuard = (module: Module) => {\n  const { user } = useAuth();\n  return canAccess(user.role, module);\n};`,
      },
    },
    {
      id: "time4digital",
      name: "Time4Digital Portfolio",
      type: t("portfolio.projects.time4digital.type"),
      client: t("portfolio.projects.time4digital.client"),
      timeline: "Feb 2026 – Present",
      problem: t("portfolio.projects.time4digital.problem"),
      approach: t("portfolio.projects.time4digital.approach"),
      impact: t("portfolio.projects.time4digital.impact"),
      techStack: ["Contao CMS", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
      imagePath: "/images/projects/time4digital.png",
      projectUrl: "https://www.time4digital.lu/en/",
      relatedLinks: [
        { label: "TS-Concept", url: "https://www.ts-concept.lu/", imagePath: "/images/projects/tsconcept.jpg" },
        { label: "Modetreff", url: "https://www.modetreff-schuster.de/", imagePath: "/images/projects/modetreff.webp" },
        { label: "Luxambulance", url: "https://www.luxambulance.lu/", imagePath: "/images/projects/luxambulance.jpeg" },
      ],
      deepDive: {
        architectureReasoning: t("portfolio.projects.time4digital.deepDive.architectureReasoning"),
        tradeoffs: t("portfolio.projects.time4digital.deepDive.tradeoffs"),
        wouldDoDifferently: t("portfolio.projects.time4digital.deepDive.wouldDoDifferently"),
        codeSnippet: `{# Contao — reusable service-module include #}\n<div class="service-grid">\n  {% for item in module.services %}\n    <article class="service-card">\n      <h3>{{ item.title }}</h3>\n      <p>{{ item.summary }}</p>\n    </article>\n  {% endfor %}\n</div>`,
      },
    },
    {
      id: "terravista",
      name: "TerraVista",
      type: t("portfolio.projects.terravista.type"),
      client: t("portfolio.projects.terravista.client"),
      timeline: "Jan 2026 – Present",
      problem: t("portfolio.projects.terravista.problem"),
      approach: t("portfolio.projects.terravista.approach"),
      impact: t("portfolio.projects.terravista.impact"),
      techStack: ["React.js", "HTML5", "CSS3", "Bootstrap"],
      imagePath: "/images/projects/terravista.webp",
      projectUrl: "https://www.terravistahome.com/",
      deepDive: {
        architectureReasoning: t("portfolio.projects.terravista.deepDive.architectureReasoning"),
        tradeoffs: t("portfolio.projects.terravista.deepDive.tradeoffs"),
        wouldDoDifferently: t("portfolio.projects.terravista.deepDive.wouldDoDifferently"),
        codeSnippet: `const ConsultationForm = () => {\n  const [slot, setSlot] = useState<string | null>(null);\n\n  return (\n    <form onSubmit={bookConsultation}>\n      <select onChange={(e) => setSlot(e.target.value)}>\n        {availableSlots.map((s) => (\n          <option key={s.id} value={s.id}>{s.label}</option>\n        ))}\n      </select>\n    </form>\n  );\n};`,
      },
    },
    {
      id: "crayoon",
      name: "Crayoon",
      type: t("portfolio.projects.crayoon.type"),
      client: t("portfolio.projects.crayoon.client"),
      timeline: "Oct 2025 – Jan 2026",
      problem: t("portfolio.projects.crayoon.problem"),
      approach: t("portfolio.projects.crayoon.approach"),
      impact: t("portfolio.projects.crayoon.impact"),
      techStack: [
        "Next.js",
        "React.js",
        "Python FastAPI",
        "PostgreSQL",
        "TypeScript",
        "Tailwind CSS",
      ],
      imagePath: "/images/projects/crayoon.png",
      projectUrl: "https://www.crayoon.in/",
      deepDive: {
        architectureReasoning: t("portfolio.projects.crayoon.deepDive.architectureReasoning"),
        tradeoffs: t("portfolio.projects.crayoon.deepDive.tradeoffs"),
        wouldDoDifferently: t("portfolio.projects.crayoon.deepDive.wouldDoDifferently"),
        codeSnippet: `interface Props {\n  sizes: string[];\n  onUpdate: (selection: string) => void;\n}\n\nexport const UniformCustomizer = ({ sizes, onUpdate }: Props) => {\n  // Real-time size allocation against inventory\n};`,
      },
    },
    {
      id: "vigilance",
      name: "Vigilance",
      type: t("portfolio.projects.vigilance.type"),
      client: t("portfolio.projects.vigilance.client"),
      timeline: "Jul 2025 – Oct 2025",
      problem: t("portfolio.projects.vigilance.problem"),
      approach: t("portfolio.projects.vigilance.approach"),
      impact: t("portfolio.projects.vigilance.impact"),
      techStack: [
        "React.js",
        "Python FastAPI",
        "Bootstrap",
        "REST APIs",
        "DOM Virtualization",
      ],
      deepDive: {
        architectureReasoning: t("portfolio.projects.vigilance.deepDive.architectureReasoning"),
        tradeoffs: t("portfolio.projects.vigilance.deepDive.tradeoffs"),
        wouldDoDifferently: t("portfolio.projects.vigilance.deepDive.wouldDoDifferently"),
        codeSnippet: `const renderRow = ({ index, style }) => (\n  <div style={style} className="border-b">\n    {data[index].assessmentName}\n  </div>\n);`,
      },
    },
    {
      id: "shopq",
      name: "ShopQ",
      type: t("portfolio.projects.shopq.type"),
      client: t("portfolio.projects.shopq.client"),
      timeline: "Dec 2024 – Mar 2025",
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
        codeSnippet: `const SignupSchema = Yup.object().shape({\n  email: Yup.string().email("Invalid email").required("Required"),\n});`,
      },
    },
  ];

  const ADDITIONAL_PROJECTS: AdditionalProject[] = [
    {
      id: "leadsynq",
      name: "LeadSynQ",
      type: t("portfolio.additionalProjects.leadsynq.type"),
      client: t("portfolio.additionalProjects.leadsynq.client"),
      timeline: "Sep 2024 – Dec 2024",
      summary: t("portfolio.additionalProjects.leadsynq.summary"),
      techStack: ["React.js", "REST APIs", "CRM Workflows", "Role-based UI"],
      imagePath: "/images/projects/leadsynq.png",
      projectUrl: "https://leadsynq.com/",
    },
    {
      id: "tecosoft",
      name: "Tecosoft",
      type: t("portfolio.additionalProjects.tecosoft.type"),
      client: t("portfolio.additionalProjects.tecosoft.client"),
      timeline: t("portfolio.additionalProjects.tecosoft.timeline"),
      summary: t("portfolio.additionalProjects.tecosoft.summary"),
      techStack: ["React.js", "Landing UI", "IIoT"],
      imagePath: "/images/projects/tecosoft.png",
      projectUrl: "https://tecosoft.ai/",
    },
    {
      id: "ayushyaai",
      name: "Ayushya AI",
      type: t("portfolio.additionalProjects.ayushyaai.type"),
      client: t("portfolio.additionalProjects.ayushyaai.client"),
      timeline: t("portfolio.additionalProjects.ayushyaai.timeline"),
      summary: t("portfolio.additionalProjects.ayushyaai.summary"),
      techStack: ["React.js", "Healthcare UI", "Multilingual Forms"],
      imagePath: "/images/projects/ayushyaai.png",
      projectUrl: "https://www.ayushyaai.com/",
    },
  ];

  const SKILL_GROUPS: SkillGroup[] = [
    {
      category: t("portfolio.skillGroups.frontend"),
      skills: [
        "React.js",
        "Next.js (App Router / SSR)",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
      ],
    },
    {
      category: t("portfolio.skillGroups.styling"),
      skills: ["Tailwind CSS", "Bootstrap 5", "Responsive Design", "Mobile-First UI/UX"],
    },
    {
      category: t("portfolio.skillGroups.stateData"),
      skills: ["TanStack Query", "Redux Toolkit", "Context API"],
    },
    {
      category: t("portfolio.skillGroups.backendApis"),
      skills: ["Python (FastAPI)", "Contao CMS", "RESTful APIs", "PostgreSQL", "Firebase"],
    },
    {
      category: t("portfolio.skillGroups.infrastructure"),
      skills: ["GitHub Actions", "Vercel", "Vite", "Webpack"],
    },
    {
      category: t("portfolio.skillGroups.tooling"),
      skills: ["Cursor AI", "Git", "Postman", "GitHub"],
    },
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
    { name: t("portfolio.languages.french.name"), level: t("portfolio.languages.french.level"), proficiency: 25, flag: "fr" },
  ];

  return {
    PERSONAL_INFO,
    PROJECTS,
    ADDITIONAL_PROJECTS,
    SKILL_GROUPS,
    EXPERIENCE,
    EDUCATION,
    CERTIFICATIONS,
    LANGUAGES,
  };
};
