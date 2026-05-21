/**
 * Single source of truth for portfolio content (aligned with resume).
 */

export const profile = {
  name: "Akash Agarwal",
  headline:
    "Co-founder, Sharedmemory.ai · Former Amazon Web Services SDE Intern · Backend & distributed systems",
  location: "United States",

  /**
   * Your active company — surfaced in the hero for recruiters.
   * Set `website` to your landing URL whenever it is live; omit or leave blank if private.
   */
  startup: {
    name: "Sharedmemory.ai",
    role: "Co-Founder & Founding Engineer",
    foundedMonth: "Nov 2025",
    tagline:
      "Durable AI memory persistence for agents — a multi-tier SaaS platform with orchestration, IDE integrations, and reliability patterns tuned for partial failure.",
    website: "",
  },

  links: {
    phone: "+1-623-281-6287",
    email: "mailto:akashagarwal2908@gmail.com",
    linkedin: "https://linkedin.com/in/akash-agarwal2908",
    github: "https://github.com/Akash-Agarwal-X",
  },

  resume: {
    fileName: "Akash_Agarwal.pdf",
    label: "Download resume",
  },

  highlights: [
    "ELB Radar compliance tooling overhaul — investigator time down from 4+ hours to under two minutes",
    "97% storage efficiency via DynamoDB + compression-aware indexing (billions of ELB state records)",
    "2× hackathon finalist (Innovation Hacks 2.0 · Village Hacks 2026) — RxRefactor & Reductoken",
    "MACE multi-agent orchestration — shared-memory coordination on GitHub (team of 4)",
  ],

  /** Personal intro (carries forward themes from your original About page, updated with current roles). */
  about: {
    paragraphs: [
      "I'm Akash Agarwal. I grew up in Pune, India, and I'm now based in the United States. I'm Co-Founder & Founding Engineer at Sharedmemory.ai (started Nov 2025). Before that I was an SDE Intern at AWS focused on ELB storage and tooling, and I ship research-facing platforms at Arizona State University.",
      `I care about backends that stay correct under load: distributed orchestration, multi-threaded coordination, DynamoDB-era storage design, Kubernetes rollouts on AWS/GCP, and pragmatic automation (testing/monitoring/dev workflow). Outside of IC work I enjoy writing engineering articles and chasing hard systems problems.`,
    ],
    interests: [
      "Exploring new technologies",
      "Writing tech blogs",
      "Playing games",
      "Travelling",
    ],
    quote: "Live, learn, and grow!",
  },

  experience: [
    {
      company: "Sharedmemory.ai",
      title: "Co-Founder & Founding Engineer",
      period: "Nov 2025 – Present",
      location: "Remote",
      bullets: [
        "Architected a distributed, multi-tiered SaaS platform for AI memory persistence — high availability and horizontal scalability across independent agent runtimes and IDE integrations.",
        "Designed the core orchestration engine with concurrent coordination, conflict resolution via vector-clock ordering, and trust-tiered durability for long-term context retention.",
        "Built fault-tolerant backend services using strategy, observer, and chain-of-responsibility patterns; reliable consistency across distributed nodes under partial failure.",
      ],
    },
    {
      company: "Amazon Web Services (AWS)",
      title: "SDE Intern",
      period: "May 2025 – Aug 2025",
      location: "Seattle, WA",
      bullets: [
        "Designed a high-throughput, low-latency distributed storage layer on DynamoDB with encryption-aware compression — 97% storage efficiency and monthly cost from ~$1,089 to ~$24.75.",
        "Engineered epoch-based indexing for O(1) writes and sub-ms point queries across billions of ELB state change records while preserving durability across regions.",
        "Built fault-tolerant recovery subsystems with automated replay and consistency verification — zero data loss across tested failure and partition scenarios.",
        "Revamped ELB Radar compliance tooling: average investigation time dropped from 4+ hours to under 2 minutes with stronger fleet observability.",
      ],
    },
    {
      company: "Arizona State University",
      title: "Software Engineer, Research Systems",
      period: "Mar 2025 – May 2026",
      location: "Tempe, AZ",
      bullets: [
        "Delivered containerized, Kubernetes-backed services on GCP with health checks and rolling restarts — zero-downtime upgrades across three university systems.",
        "Designed REST lifecycle APIs plus CAS/SAML SSO for a self-service portal supporting 50+ research teams — provisioning from days to minutes.",
      ],
    },
    {
      company: "Neova Solutions",
      title: "Software Engineer",
      period: "Apr 2023 – Aug 2024",
      location: "Pune, India",
      bullets: [
        "Built a Python monitoring framework grounded in SOLID and patterns (factory, decorator, observer) — 27% higher defect detection and 96.6% on-time release rate.",
        "Mentored two engineers on scalable systems; drove automated testing adoption and cut regression cycle time by over 60%.",
      ],
    },
    {
      company: "Tata Consultancy Services (TCS)",
      title: "Software Engineer",
      period: "Jun 2021 – Aug 2022",
      location: "Pune, India",
      bullets: [
        "Architected Java / Spring Boot microservices for high-throughput transaction processing; reduced p95 latency ~36% via concurrency tuning, query optimization, and pooling.",
        "Led zero-downtime migration of 15+ legacy monoliths to containerized services on AWS EKS with blue/green deployments; ~40% lower annual infra spend.",
      ],
    },
  ],

  education: [
    {
      school: "Arizona State University",
      degree: "M.S., Software Engineering",
      detail: "CGPA 4.0 / 4.0 · May 2026",
      location: "Tempe, AZ",
    },
    {
      school: "University of Pune",
      degree: "M.S., Computer Science",
      detail: "May 2023",
      location: "Pune, India",
    },
    {
      school: "University of Pune",
      degree: "B.S., Computer Science",
      detail: "May 2021",
      location: "Pune, India",
    },
  ],

  /** Awards, competitions, and headline academic outcomes (paired with Publications for papers). */
  recognition: {
    academicScores: [
      {
        label: "M.S., Software Engineering",
        issuer: "Arizona State University",
        value: "4.0 / 4.0 CGPA",
        note: "Tempe, AZ · May 2026",
      },
    ],
    awards: [
      {
        title: "2nd place — Innovation Hacks 2.0 (AntonRX track)",
        year: "2026",
        description:
          "RxRefactor — RAG over 6,100+ payer policy chunks; drug coverage lookups in seconds at ~$0.01/query.",
        link: {
          label: "Try RxRefactor",
          href: "https://anton-rx-frontend-770871054693.us-central1.run.app/",
        },
      },
      {
        title: "2nd place — Village Hacks (AutoDB track)",
        year: "2026",
        description:
          "Reductoken — persists agent workflows and decisions so later runs resume state; ~70% token reduction.",
        link: {
          label: "Try Reductoken",
          href: "https://reductoken-frontend-770871054693.us-central1.run.app/",
        },
      },
      {
        title: "ASU Sun Award",
        issuer: "Arizona State University",
        year: "2025",
        description:
          "Recognized for outstanding contribution to research-driven web application development.",
      },
      {
        title: "Excellence Award",
        issuer: "Tata Consultancy Services",
        year: "2022",
        description:
          "Recognized for outstanding performance and technical contributions.",
      },
    ],
    openSource: [
      {
        title: "MACE (Multi-Agent Coordination Engine)",
        href: "https://github.com/Girish-123-dev/SER594-Team25-MACE-Multi_Agent_Coordination_Engine",
        description:
          "Team of four — coursework open repo on GitHub. Central orchestrator routes tasks across agents using shared-memory coordination.",
      },
    ],
  },

  skills: {
    languages: [
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "C++",
      "C",
      "SQL",
    ],
    backend: [
      "Spring Boot",
      "Microservices",
      "REST",
      "GraphQL",
      "WebSocket",
      "Apache Kafka",
      "Apache Flink",
      "Event-driven architecture",
      "HA & fault tolerance",
      "Concurrency",
      "OOP design patterns",
      "Scalable systems",
    ],
    cloud: [
      "AWS",
      "EKS",
      "EC2",
      "DynamoDB",
      "Lambda",
      "S3",
      "RDS",
      "AWS CDK",
      "CloudWatch",
      "IAM",
      "Route53",
      "GCP",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Linux",
      "CI/CD",
      "Blue-green deployments",
    ],
    data: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "MongoDB",
      "DynamoDB",
      "Schema design",
      "Caching & indexing",
      "Distributed tracing",
    ],
    quality: ["JUnit", "PyTest", "JMeter", "Git", "React", "Node.js", "Datadog"],
    aiAssist: ["Cursor", "Claude Code", "GitHub Copilot"],
  },

  projects: [
    {
      name: "RxRefactor",
      badge: "2nd place · Innovation Hacks 2.0 (AntonRX track)",
      period: "2026",
      tech: ["RAG", "Insurance / healthcare data", "Vector search", "GCP"],
      description:
        "RAG pipeline over 6,100+ US payer policy chunks: drug coverage lookups in seconds at about $0.01/query.",
      links: [
        {
          label: "Live app",
          href: "https://anton-rx-frontend-770871054693.us-central1.run.app/",
        },
      ],
    },
    {
      name: "Reductoken",
      badge: "2nd place · Village Hacks 2026 (AutoDB track)",
      period: "2026",
      tech: ["Agent memory", "State persistence", "Token optimization", "GCP"],
      description:
        "Saves structured agent workflows and decisions so future agents reload that state instead of cold-starting context — roughly 70% token savings.",
      links: [
        {
          label: "Live app",
          href: "https://reductoken-frontend-770871054693.us-central1.run.app/",
        },
      ],
    },
    {
      name: "MACE (Multi-Agent Coordination Engine)",
      badge: "Team of 4 · SER594 (ASU)",
      period: "Jan 2026 – May 2026",
      tech: ["Python", "Multi-agent systems", "Shared memory", "Orchestration"],
      description:
        "Central orchestrator decomposes goals, assigns work across agents, and surfaces conflicts — duplicate execution, dependency violations, resource clashes — coordinating through shared memory so agents converge instead of colliding.",
      links: [
        {
          label: "GitHub repo",
          href: "https://github.com/Girish-123-dev/SER594-Team25-MACE-Multi_Agent_Coordination_Engine",
        },
      ],
    },
  ],

  /** Peer-reviewed papers (ported from your previous portfolio — IRJET). */
  publications: [
    {
      title: "Understanding the Nature of Consciousness with AI",
      subtitle: "IRJET · Volume 10, Issue 8 · 2023",
      image: "/media/publication-consciousness-ai.jpeg",
      description:
        "Explores how AI can sharpen our framing of consciousness: modeling self-awareness-style dynamics, interpreting neural correlates from data, and designing human–machine probes that constrain theories of mind.",
      link: {
        label: "View publication (PDF)",
        href: "https://www.irjet.net/archives/V10/i8/IRJET-V10I8149.pdf",
      },
    },
    {
      title: "AI-Enabled Black Hole Detection and Deflection",
      subtitle: "IRJET · Volume 10, Issue 9 · 2023",
      image: "/media/publication-black-hole-ai.jpeg",
      description:
        "Reviews detection signals for black-hole-scale physics plus how AI-assisted inference and simulation can sift gravitational-wave style observations and stress-test mitigation strategies.",
      link: {
        label: "View publication (PDF)",
        href: "https://www.irjet.net/archives/V10/i9/IRJET-V10I924.pdf",
      },
    },
  ],

  /** Long-form engineering writing originally featured on your site. */
  blogs: [
    {
      title: "Leveraging AI to Automate Test Case Generation with Playwright",
      subtitle: "Neova Solutions · May 2024",
      image: "/media/playwright-testing-blog.jpeg",
      description:
        "How AI-assisted workflows pair with Microsoft's Playwright to generate richer regression suites faster — turning flaky manual scripting into prioritized, repeatable coverage backed by deterministic automation primitives.",
      link: {
        label: "Read on Neova Solutions",
        href: "https://www.neovasolutions.com/2024/05/23/leveraging-ai-to-automate-test-case-generation-with-playwright/",
      },
    },
  ],
};
