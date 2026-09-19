type WorkItem = {
  company: string
  period: string
  badge: string
  description: string
  metrics: readonly (readonly [string, string])[]
  stack: readonly string[]
  href: string | null
  linkLabel: string | null
  featured: boolean
}

export const navItems = [
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "#disciplines", label: "Value" },
  { href: "#work", label: "Proof" },
  { href: "#products", label: "Products" },
  { href: "#process", label: "Lifecycle" },
  { href: "#stack", label: "Stack" },
] as const

export const disciplines = [
  {
    title: "Full-Stack System Architecture",
    description:
      "I design and build complete systems from data schema through deployed UI. You get a production-ready product engineered to scale — not a prototype or a patched stack of vendor tools.",
    tags: ["Django DRF", "Next.js", "PostgreSQL", "Redis", "Docker"],
    icon: "server",
  },
  {
    title: "AI Integration & RAG Pipelines",
    description:
      "RAG pipelines, vector search with pgvector and HNSW, LLM orchestration, agentic workflows, and async ingestion via Celery. AI that solves real problems in production.",
    tags: ["LLMs", "RAG", "pgvector", "HNSW", "Celery"],
    icon: "ai",
  },
  {
    title: "Backend Engineering & Secure APIs",
    description:
      "Secure, scalable Python/Django REST APIs for fintech, SaaS, and platform products. Payments, authentication, RBAC, KYC validation, audit trails, and async processing built production-ready from day one.",
    tags: ["Python", "Django", "FastAPI", "JWT/OAuth2", "RBAC"],
    icon: "layers",
  },
  {
    title: "Frontend Engineering & UI Systems",
    description:
      "React and Next.js TypeScript systems built for real users under real load. Financial dashboards, transaction workflows, complex data tables, responsive component systems, and accessibility-first design.",
    tags: ["React", "Next.js", "TypeScript", "TailwindCSS", "Shadcn/UI"],
    icon: "shield",
  },
  {
    title: "Security Hardening & Compliance",
    description:
      "I wire security into every layer: HttpOnly cookie auth, device fingerprinting, login-attempt monitoring, XSS/CSRF prevention, input validation, KYC integration, and full security event audit trails.",
    tags: ["HttpOnly Auth", "Fingerprinting", "KYC/BVN", "Audit Logs"],
    icon: "secure",
  },
  {
    title: "Technical Leadership & Architecture Consulting",
    description:
      "CTO-level technical leadership available as a contractor. I review architecture decisions, define engineering standards, unblock teams, and translate business goals into systems that ship and scale.",
    tags: ["Architecture", "CTO Advisory", "Code Review", "Team Mentoring"],
    icon: "signal",
  },
] as const

export const workItems = [
  {
    company: "Accessivo",
    period: "Aug 2025 – Jan 2026",
    badge: "Full-Stack · Fintech",
    description:
      "Designed and built the entire Accessivo fintech platform as the sole engineer — from database schema through deployed UI. The platform went from zero to 6,700+ onboarded users processing over ₦35M in transaction volume within weeks of launch.",
    metrics: [
      ["6,700+", "Users Onboarded"],
      ["₦35M+", "Transaction Volume"],
      ["100%", "Sole Architecture"],
      ["0→Prod", "Full Build Cycle"],
    ],
    stack: [
      "Django DRF",
      "PostgreSQL",
      "Redis",
      "JWT/OAuth2",
      "React",
      "TypeScript",
      "Shadcn/UI",
      "BVN/KYC",
    ],
    href: "https://accessivo.io",
    linkLabel: "accessivo.io →",
    featured: true,
  },
  {
    company: "Rollpay",
    period: "Oct 2025 – Feb 2026",
    badge: "Frontend · Fintech",
    description:
      "Architected secure frontend systems across Business, Talent, and Admin products. Built scalable dashboards for high-volume financial data with payout, reconciliation, and transaction workflows.",
    metrics: [
      ["3", "Products Led"],
      ["High-Vol", "Transaction Scale"],
    ],
    stack: ["React", "TypeScript", "React Query", "Agile"],
    href: "https://rollpay.app",
    linkLabel: "rollpay.app →",
    featured: false,
  },
  {
    company: "Trackiose",
    period: "Feb 2025 – Oct 2025",
    badge: "Full-Stack · AI Workflow",
    description:
      "Shipped weekly features on a Django and React platform for agent workflow management. Integrated AI sentiment analysis, automated reporting pipelines, and role-specific dashboards for Admin, Customer, and Agent users.",
    metrics: [
      ["3", "User Role Types"],
      ["AI", "Sentiment Analysis"],
    ],
    stack: ["Django", "React", "AI Sentiment", "Reporting"],
    href: "https://trackiose.com",
    linkLabel: "trackiose.com →",
    featured: false,
  },
  {
    company: "EwekoAggregate",
    period: "Sep 2023 – Jun 2025",
    badge: "Backend · B2B Platform",
    description:
      "Built order management, inventory, and procurement REST APIs with JWT authentication, multi-tier RBAC, order tracking, and a full supply-chain frontend using Next.js and TailwindCSS.",
    metrics: [
      ["B2B", "Platform Type"],
      ["RBAC", "Access Control"],
    ],
    stack: ["Django", "PostgreSQL", "JWT", "Next.js", "TypeScript"],
    href: "https://ewekoaggregate.com",
    linkLabel: "ewekoaggregate.com →",
    featured: false,
  },
  {
    company: "Centiiv",
    period: "Jul 2023 – Apr 2024",
    badge: "Full-Stack · Web3 Payments",
    description:
      "Built payment processing and blockchain transaction APIs with webhook systems for async blockchain events, middleware audit logging, and real-time merchant analytics and transaction dashboards.",
    metrics: [
      ["Web3", "Payment Rail"],
      ["Real-time", "Dashboards"],
    ],
    stack: ["Django", "Blockchain", "Webhooks", "React"],
    href: "https://centiiv.com",
    linkLabel: "centiiv.com →",
    featured: false,
  },
  {
    company: "WISP Talk Africa",
    period: "Feb 2023 – Dec 2023",
    badge: "Full-Stack · EdTech",
    description:
      "Built the backend and frontend for an integrated e-learning, jobs, and community platform serving African professionals — covering course delivery, quiz systems, certification workflows, a job board, and community forums.",
    metrics: [
      ["EdTech", "Learning Platform"],
      ["Jobs", "Community Layer"],
    ],
    stack: ["Django", "MySQL", "Next.js", "TypeScript", "TailwindCSS"],
    href: null,
    linkLabel: null,
    featured: false,
  },
] as const satisfies readonly WorkItem[]

export const products = [
  {
    name: "OWU",
    status: "Completed",
    eyebrow: "Completed Fashion Operations Product · AI Integration Planned",
    description:
      "Fashion business management platform for Nigerian bridal, asoebi, menswear, and bespoke brands. Replaces measurement books and scattered WhatsApp follow-ups with digital client profiles, a measurement vault, consultations, order tracking, invoices, transactions, payment reminders, messaging, and a branded customer portal, with AI-assisted operations planned next.",
    tags: [
      "Fashion Operations",
      "Customer Portal",
      "Measurements",
      "Orders & Invoices",
      "AI Integration Planned",
      "Next.js",
      "TypeScript",
    ],
    visual: "fashion",
    href: "https://owu.onimisea.com",
    linkLabel: "Visit OWU →",
  },
  {
    name: "Onimisera",
    status: "Completed",
    eyebrow: "Completed Personal AI Product · Solo Founder",
    description:
      "AI-powered learning platform and AI copilot for mastering any subject. Five-level explanation depth, RAG pipelines over academic content, credit-based billing, integrated assessment workflows, and async ingestion built around production-grade learning systems.",
    tags: ["LLMs", "RAG", "pgvector", "Django", "Next.js", "Celery"],
    visual: "learning",
    href: null,
    linkLabel: null,
  },
  {
    name: "Oisere",
    status: "In Planning",
    eyebrow: "Undergoing Planning · AI Safety Product",
    description:
      "Civilian safety and emergency response product for live/real-time geolocation tracking, offline and last-known location continuity when registered devices are unavailable, emergency alerts to law enforcement agencies, and rescue-team coordination workflows.",
    tags: [
      "Safety Tech",
      "Geolocation",
      "Emergency Alerts",
      "AI Triage",
      "Response Workflow",
    ],
    visual: "safety",
    href: null,
    linkLabel: null,
  },
  {
    name: "OnimiTradeOS",
    status: "Coming Soon",
    eyebrow: "Coming Soon · AI-Infused Product",
    description:
      "AI-infused algorithmic trading operating system. Strategy versioning, signal generation, risk decision engine, walk-forward backtesting, and a self-improving AI engine that evaluates, hypothesises, and iterates on trading strategies autonomously in production.",
    tags: ["Algorithmic Trading", "AI Engine", "Django", "Celery", "PostgreSQL"],
    visual: "trading",
    href: null,
    linkLabel: null,
  },
] as const

export const processSteps = [
  "Business Goals & Objectives",
  "Product & Technical Requirements",
  "System & Architecture Design",
  "Development & Execution",
  "Deployment & Infrastructure",
  "Testing & Quality Assurance",
  "Security Hardening",
  "Maintenance & Continuous Improvement",
] as const

export const stackGroups = [
  {
    label: "Languages & Frameworks",
    items: [
      "Python",
      "Django",
      "DRF",
      "FastAPI",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
    ],
  },
  {
    label: "AI & Data",
    items: [
      "LLMs",
      "Generative AI",
      "Agentic AI",
      "RAG Pipelines",
      "LangGraph",
      "LangChain",
      "Vector Search",
      "pgvector",
      "HNSW",
      "Embeddings",
      "Evaluation",
      "Celery Pipelines",
    ],
  },
  {
    label: "Databases & Storage",
    items: ["PostgreSQL", "Redis", "MySQL", "MongoDB", "Cloudflare R2"],
  },
  {
    label: "Infrastructure & DevOps",
    items: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Cloudflare",
      "Cloudflare R2",
      "GitHub Actions",
      "Nginx",
    ],
  },
  {
    label: "Security & API",
    items: [
      "JWT / OAuth2",
      "RBAC",
      "Device Fingerprint",
      "KYC / BVN",
      "Webhooks",
      "Audit Logging",
    ],
  },
  {
    label: "Frontend & UI",
    items: [
      "TailwindCSS",
      "Shadcn UI",
      "TanStack Query",
      "Zustand",
      "Redux",
      "Framer Motion",
    ],
  },
] as const

export const founderRows = [
  [
    "Remote frontend role",
    "Fintech dashboards, SaaS interfaces, edtech platforms, design systems",
  ],
  ["Remote backend role", "Django, APIs, auth, PostgreSQL, queues, platform services"],
  ["Remote full-stack role", "AI SaaS, fintech, edtech, B2B platforms"],
  ["Technical consultation", "Architecture, rebuilds, system reviews"],
  ["Founder support", "PRDs, MVP architecture, production delivery"],
] as const

export const aboutMeta = [
  ["Based In", "Nigeria · Remote-first"],
  ["Availability", "Open to Opportunities"],
  ["Experience", "7+ Years Full-Stack"],
  ["Education", "B.Sc. Biochemistry, UNILORIN '23"],
  ["Domains", "Fintech, SaaS, AI, Web3"],
] as const

export const credentials = [
  [
    "Remote & Async Ready",
    "UTC+1 · Experienced in distributed, async-first teams",
    "globe",
  ],
  ["Full-Stack Ownership", "Schema → API → UI → Deployment — end to end", "layers"],
  [
    "Security-First Engineering",
    "Auth, RBAC, audit trails, fingerprinting, KYC validation",
    "secure",
  ],
  [
    "AI-Native by Design",
    "LLMs, RAG, agentic workflows, vector search, async AI pipelines in production",
    "signal",
  ],
  [
    "Founder Perspective",
    "Product thinking married to engineering execution — not one or the other",
    "network",
  ],
] as const
