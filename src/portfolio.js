/* Personal portfolio configuration — edit this file to update site content */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const PUBLIC = process.env.PUBLIC_URL || "";

const splashScreen = {
  enabled: false,
  animation: splashAnimation,
  duration: 1200
};

const illustration = {
  animated: false
};

const greeting = {
  username: "Shubham Gupta",
  title: "Shubham Gupta",
  roleTitle: "AI-Enabled Backend Engineer",
  roleBadge: "Backend · SaaS · LLM Applications",
  subTitle:
    "4.5+ years building scalable APIs and SaaS backends with Laravel, Node.js, MySQL, and DynamoDB — now integrating **LLMs, embeddings, and AI-powered workflows** into production products.",
  profileImage: `${PUBLIC}/shubham/sg-white-bg.png`,
  email: "shubhamkumargupta8@gmail.com",
  phone: "+91 7004083341",
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};

const aboutSection = {
  display: true,
  title: "About Me",
  summaryTitle: "Professional Summary",
  paragraphs: [
    "**AI-Enabled Backend Engineer** with 4.5+ years of experience building scalable web and SaaS applications. Specialized in Laravel, PHP, Node.js, and API-driven systems with strong focus on clean architecture, performance, and secure integrations.",
    "Experienced in marketplace platforms, CRM systems, e-commerce backends, and education SaaS — from database design to production deployment. Now bringing **AI** into the backend: integrating **LLM APIs**, building **embedding-based semantic search**, and using **AI-assisted development** to ship faster with better quality."
  ],
  stats: [
    {value: "4.5+", label: "Years Experience"},
    {value: "10+", label: "Products & Projects"},
    {value: "7+", label: "Core Technologies"},
    {value: "50+", label: "APIs Built"}
  ],
  coreTechnologies: [
    "PHP",
    "Laravel",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MySQL",
    "MariaDB",
    "DynamoDB",
    "REST APIs",
    "AWS",
    "Docker",
    "Git"
  ],
  aiTitle: "AI & LLM Engineering",
  aiTechnologies: [
    "LLM Applications",
    "Embeddings & Vector Search",
    "RAG (Retrieval-Augmented Generation)",
    "OpenAI, Claude & Gemini APIs",
    "MariaDB Vector Search",
    "Prompt Engineering",
    "Structured Outputs & Function Calling",
    "AI-Assisted Development",
    "AI-Generated Docs & VAPT Reports"
  ],
  keyExpertise: [
    "SaaS backend development & multi-tenant workflows",
    "REST API design & third-party integrations",
    "MySQL schema design & query optimization",
    "DynamoDB & cloud-ready data modeling",
    "Laravel & Node.js/Express microservices",
    "Authentication, webhooks & payment gateways",
    "Scalable architecture & system maintainability",
    "**LLM-powered features & AI integration** into existing products",
    "**Embeddings, semantic search & RAG pipelines**",
    "**AI-assisted development** & workflow automation"
  ]
};

const socialMediaLinks = {
  github: "https://github.com/im-shubhamgupta",
  linkedin: "https://www.linkedin.com/in/shubham-gupta-200761191",
  gmail: "shubhamkumargupta8@gmail.com",
  display: true
};

const skillsSection = {
  title: "Technical Expertise",
  subTitle: "AI-ENABLED BACKEND ENGINEERING · SAAS · LLM APPLICATIONS",
  skills: [
    emoji(
      "Design and ship scalable REST APIs, background jobs, and domain-driven backend modules"
    ),
    emoji(
      "Build and maintain SaaS products — auth, billing hooks, admin workflows, and integrations"
    ),
    emoji(
      "Model data in MySQL and DynamoDB with performance, consistency, and migration discipline"
    ),
    emoji(
      "Integrate LLMs, embeddings, and RAG into backend services for smarter product capabilities"
    )
  ],
  softwareSkills: [
    {skillName: "Laravel", fontAwesomeClassname: "fab fa-laravel"},
    {skillName: "PHP", fontAwesomeClassname: "fab fa-php"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "Node.js", fontAwesomeClassname: "fab fa-node"},
    {skillName: "Express", fontAwesomeClassname: "fas fa-server"},
    {skillName: "MySQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "DynamoDB", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "AWS", fontAwesomeClassname: "fab fa-aws"}
  ],
  display: false
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "NIELIT",
      logo: require("./assets/images/logo/nielit-logo.webp"),
      subHeader: "O Level — Information Technology",
      duration: "2021 – 2022",
      desc: "Foundation in IT with 71% — strengthened fundamentals in computing and software concepts."
    },
    {
      schoolName: "Vinoba Bhave University",
      logo: require("./assets/images/logo/vbu-logo.png"),
      subHeader: "Bachelor's Degree (Commerce)",
      duration: "2014 – 2017",
      desc: "Bachelor's in Commerce with 69% from Hazaribagh, Jharkhand."
    }
  ]
};

const techStack = {
  viewSkillBars: false,
  title: "Core Proficiency",
  experience: [
    {Stack: "Laravel / PHP", progressPercentage: "95%"},
    {Stack: "Node.js / Express.js", progressPercentage: "85%"},
    {Stack: "MySQL", progressPercentage: "90%"},
    {Stack: "DynamoDB", progressPercentage: "75%"},
    {Stack: "API Design & System Architecture", progressPercentage: "88%"},
    {Stack: "LLM Applications & AI Integration", progressPercentage: "75%"}
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  title: "Experience",
  subtitle:
    "Building backend systems and SaaS features for product teams across industries.",
  experience: [
    {
      role: "PHP Developer (AI-Enabled Backend)",
      company: "Talentrack",
      companylogo: require("./assets/images/logo/talentrack-logo.avif"),
      href: "https://talentrack.in",
      date: "February 2025 – Present",
      desc: "**AI-focused** backend development for India's leading MECA (Media, Entertainment, Creative & Advertising) marketplace connecting brands with agencies, freelancers, and creators.",
      descBullets: [
        "Built **LLM-powered content features** using **OpenAI, Claude, and Gemini APIs**",
        "Implemented **embedding-based semantic search** with **MariaDB vector storage**",
        "Developed **AI matching and recommendations** connecting brands with the right talent",
        "Ship features faster using **AI-assisted development**, alongside Laravel APIs for core marketplace workflows"
      ]
    },
    {
      role: "Software Developer",
      company: "RJS Tech Solutions",
      href: "https://rjs.in/",
      companylogo: require("./assets/images/logo/rjs-logo3.jpg"),
      date: "July 2023 – January 2025",
      desc: "Full-cycle backend work on mobile and web products for a Kolkata-based product studio.",
      descBullets: [
        "Built REST APIs and admin backends supporting games and consumer apps",
        "Integrated third-party services and optimized MySQL-backed features",
        "Delivered production fixes and feature releases in agile sprints"
      ]
    },
    {
      role: "Software Developer",
      company: "iSoftcare Technology",
      href: "https://isoftcare.com/",
      companylogo: require("./assets/images/logo/isoft-logo.png"),
      date: "August 2022 – June 2023",
      desc: "Delivered custom web solutions for client products across domains.",
      descBullets: [
        "Implemented Laravel/PHP modules for client SaaS and internal tools",
        "Designed database schemas and CRUD flows for business operations",
        "Supported deployments and post-release maintenance"
      ]
    },
    {
      role: "PHP Developer (Intern)",
      company: "Jharkhand IT Solutions",
      href: "https://www.jharkhanditsolutions.com/",
      companylogo: require("./assets/images/logo/jis-web-logo.png"),
      date: "May 2022 – July 2022",
      desc: "Web development internship building foundational backend and CMS features.",
      descBullets: [
        "Contributed to PHP/Laravel features for client websites",
        "Learned production practices: Git, code review, and bug fixing"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: false
};

const bigProjects = {
  title: "Featured Projects",
  subtitle:
    "SaaS and product platforms where I contributed backend architecture, APIs, and scalable delivery.",
  projects: [
    {
      image: require("./assets/images/logo/talentrack-logo.avif"),
      projectName: "Talentrack — AI-Powered Talent Marketplace",
      category: "AI · SaaS Marketplace",
      projectDesc:
        "Talent marketplace connecting brands with creators and agencies. I built **AI features** end to end — **LLM-generated content**, **embedding-based semantic search**, and **AI talent matching** using **OpenAI, Claude, and Gemini** with **MariaDB vector search**.",
      tags: [
        "Laravel",
        "OpenAI",
        "Claude",
        "Gemini",
        "Embeddings",
        "MariaDB Vector"
      ],
      footerLink: [{name: "Visit Website", url: "https://talentrack.in/"}]
    },
    {
      image: require("./assets/images/logo/satvic-logo.avif"),
      projectName: "Satvic Movement",
      category: "SaaS · Health & Wellness",
      projectDesc:
        "Backend for a large online wellness community. I worked on the Laravel services behind its content, user journeys, and third-party integrations, keeping the platform reliable as it grew.",
      tags: ["Laravel", "MySQL", "Integrations"],
      footerLink: [{name: "Visit Website", url: "https://satvicmovement.org/"}]
    },
    {
      image: require("./assets/images/logo/bazaloni.png"),
      projectName: "Bazaloni CRM",
      category: "SaaS · CRM",
      projectDesc:
        "Built the backend of a CRM that runs tea auction and trade operations across India — sales, purchase, and inventory workflows, with role-based access for each team.",
      tags: ["PHP", "MySQL", "Business Logic"],
      footerLink: [{name: "Visit Website", url: "http://www.bazaloni.com/"}]
    },
    {
      image: require("./assets/images/logo/abhigya-logo.png"),
      projectName: "Institute Management System",
      category: "SaaS · EdTech",
      projectDesc:
        "Built a complete institute management system — admissions, fees, attendance, timetables, and reports — replacing manual paperwork for the admin team.",
      tags: ["Laravel", "MySQL", "Admin Panels"],
      footerLink: [{name: "Visit Website", url: "http://www.abhigya.in/"}]
    },
    {
      image: require("./assets/images/logo/phindbooks-logo.png"),
      projectName: "PhindBooks",
      category: "E-commerce",
      projectDesc:
        "Developed the e-commerce backend for a Dubai-based online and retail bookstore — product catalog, categories, and order flows.",
      tags: ["PHP", "MySQL", "E-commerce"],
      footerLink: [{name: "Visit Website", url: "https://phindbooks.ae/"}]
    },
    {
      image: require("./assets/images/logo/hotel-managment-system.png"),
      projectName: "Hotel Management System",
      category: "Operations SaaS",
      projectDesc:
        "Built a hotel management system that automates reservations, check-in/out, billing, and room inventory for hotel staff.",
      tags: ["PHP", "MySQL", "Workflows"],
      footerLink: [
        {
          name: "View Demo",
          url: "https://isoftcare.in/demo/hotel/index.php"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Certifications"),
  subtitle: "Professional credentials and continuous learning.",
  achievementsCards: [
    {
      title: "be10X AI Tools Workshop",
      subtitle:
        "Hands-on **AI training** (Jan 2026) — using **ChatGPT and AI tools** to code and debug faster, analyse data, and speed up everyday engineering workflows.",
      image: `${PUBLIC}/shubham/b10x.png`,
      imageAlt: "be10X AI Tools Workshop Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: `${PUBLIC}/shubham/b10x.png`
        }
      ]
    },
    {
      title: "Multi-Cloud DevOps",
      subtitle:
        "Cloud fundamentals, DevOps practices, and deployment workflows across modern infrastructure.",
      image: `${PUBLIC}/shubham/multi-cloud-devops.png`,
      imageAlt: "Multi-Cloud DevOps Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: `${PUBLIC}/shubham/multi-cloud-devops.png`
        }
      ]
    },
    {
      title: "C++ Programming",
      subtitle:
        "Hindustan Infotech Computer Training Centre — object-oriented programming and core CS fundamentals. Scored 87% (Grade A).",
      image: require("./assets/images/logo/cpp-logo.png"),
      imageAlt: "C++ Programming Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1PnA_4ygfnKEwjXEdWLBGvydi3okt6SIG/view"
        }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "Insights on backend engineering, SaaS, and emerging AI workflows.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji("Speaking and community contributions."),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast"),
  subtitle: "",
  podcast: [],
  display: false
};

const resumeSection = {
  display: false
};

const contactInfo = {
  title: emoji("Let's Connect"),
  href: "https://api.whatsapp.com/send?phone=7004083341&text=Hi%20Shubham",
  subtitle:
    "Open to **AI-enabled backend** roles at product companies. Let's discuss architecture, SaaS, or **LLM-powered** products.",
  number: "+91 7004083341",
  email_address: "shubhamkumargupta8@gmail.com",
  // Contact form (shown when REACT_APP_WEB3FORMS_ACCESS_KEY is set)
  formTitle: "Let's Connect",
  formSubtitle:
    "Hiring a backend developer? Share the opportunity details, and I'll get back to you via email."
};

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  aboutSection,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
