import {
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/puppala_prudhvi_1015?lqvp=MTFtaHY0eGIxM2VudA==",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/puppala-prudhvi-n-63a48b3a2",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/puppalaprudhvinagasai",
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Experience & Hackathons",
    link: "#experience",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/puppalaprudhvinagasai",
};

// Row 1: 13 items (Top widest row in pyramid)
export const SKILL_DATA = [
  {
    skill_name: "HTML5",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS3",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React.js",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "python.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Java",
    image: "java.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

// Row 2: 10 items (Tapering row 2)
export const FRONTEND_SKILL = [
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "SQL",
    image: "sql.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "RESTful APIs",
    image: "rest.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Responsive Web Design",
    image: "responsive.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Git",
    image: "git.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "GitHub",
    image: "github.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "VS Code",
    image: "vscode.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Streamlit",
    image: "streamlit.svg",
    width: 70,
    height: 70,
  },
] as const;

// Row 3: 8 items (Tapering row 3)
export const BACKEND_SKILL = [
  {
    skill_name: "Docker (Learning)",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "AWS Basics (Learning)",
    image: "aws.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "DSA",
    image: "dsa.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "OOP",
    image: "oop.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "DBMS",
    image: "dbms.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Operating Systems",
    image: "os.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Computer Networks",
    image: "networks.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "ML Fundamentals",
    image: "ml.svg",
    width: 65,
    height: 65,
  },
] as const;

// Row 4: 4 items (Tapering row 4)
export const FULLSTACK_SKILL = [
  {
    skill_name: "Java",
    image: "java.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Python",
    image: "python.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "TypeScript (Learning)",
    image: "ts.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
] as const;

// Row 5: 1 item (Apex at bottom center)
export const OTHER_SKILL = [
  {
    skill_name: "C",
    image: "c.svg",
    width: 65,
    height: 65,
  },
] as const;

export const PROJECTS = [
  {
    title: "AgriPool — Agricultural Produce Aggregation & Settlement Platform",
    domain: "Agriculture & Supply Chain",
    tech: "Web Application, Produce Pooling & Settlement Workflows",
    description:
      "Agriculture & supply chain platform for agricultural produce aggregation, digital lot management, logistics coordination, and settlement workflows.",
    image: "/projects/agripool.jpg",
    link: "https://agriculture-one-tau.vercel.app/",
    isLive: true,
  },
  {
    title: "MedSafe — Smart Medication Adherence & Safety Platform",
    domain: "Healthcare & Medication Safety",
    tech: "React.js, Node.js, AI/ML, REST APIs",
    description:
      "Healthcare web platform for medication adherence tracking, AI-driven drug interaction checking, and automated caregiver escalation alerts with a responsive interface for patients and caregivers.",
    image: "/projects/medsafe.jpg",
    link: "https://healthcare-xi-five.vercel.app/",
    isLive: true,
  },
  {
    title: "Avenza AI",
    domain: "Agentic AI & Autonomous Workflows",
    tech: "AI Project",
    description:
      "Agentic AI platform representing autonomous agents, multi-step AI workflows, and intelligent reasoning with source code on GitHub (live deployment pending).",
    image: "/projects/avenza-ai.svg",
    link: "https://github.com/puppalaprudhvinagasai/avenza-AI.git",
    status: "Hosted on GitHub (Not live hosted yet)",
    isLive: false,
  },
  {
    title: "Movie Recommendation System",
    domain: "Cinema & AI Recommender Engine",
    tech: "Python, Pandas, Scikit-learn, Streamlit, Git",
    description:
      "Realistic cinema and streaming recommendation system built with Python, Pandas, Scikit-learn, Streamlit, and Git, using data cleaning, feature engineering, TF-IDF Vectorization, and Cosine Similarity.",
    image: "/projects/movie-recommender.svg",
    link: "https://github.com/puppalaprudhvinagasai/Movie-recommender-system.git",
    status: "Hosted on GitHub (Not live hosted yet)",
    isLive: false,
  },
] as const;

export const EXPERIENCES = [
  {
    title: "HackSprint (Sept 2026)",
    organization:
      "Swarnandhra College of Engineering & Technology (Dept. of IT & CSE - Data Science)",
    badge: "Certificate of Participation",
    description:
      "24-Hour National Level Hackathon focusing on real-world engineering solutions and innovative software development.",
  },
  {
    title: "Code Clash & Pulse Quest",
    organization: "Elan & nVision 2026, IIT Hyderabad",
    badge: "Technical Competition",
    description:
      "Competitive coding and innovation-driven technical events challenging algorithmic efficiency, problem-solving, and logic.",
  },
  {
    title: "Designathon",
    organization: "IIT Jodhpur",
    badge: "National-Level Competition",
    description:
      "National-level product design competition focused on user-centric thinking, UX architecture, and modern product strategy.",
  },
  {
    title: "Xcelerate",
    organization: "Bangalore Institute of Technology",
    badge: "24-Hour Hackathon",
    description:
      "24-Hour Hackathon centered on rapid end-to-end prototyping and delivering robust functional MVPs under tight deadlines.",
  },
  {
    title: "BIT Hackathon 2025",
    organization: "Bangalore Institute of Technology",
    badge: "Top 100 Teams",
    description:
      "Ranked among the Top 100 Teams in competitive technology problem statements, software design, and execution.",
  },
  {
    title: "LeetCode",
    organization: "Data Structures & Algorithms",
    badge: "150+ Problems Solved",
    description:
      "Solved 150+ Data Structures & Algorithms (DSA) problems, strengthening analytical problem-solving and algorithmic foundations.",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Contact",
    data: [
      {
        name: "puppalaprudhvinagasai@gmail.com",
        icon: null,
        link: "mailto:puppalaprudhvinagasai@gmail.com",
      },
      {
        name: "+91 9000392639",
        icon: null,
        link: "tel:+919000392639",
      },
      {
        name: "Machilipatnam, Andhra Pradesh",
        icon: null,
        link: "#contact",
      },
    ],
  },
  {
    title: "Connect",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/puppala-prudhvi-n-63a48b3a2",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/puppalaprudhvinagasai",
      },
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/puppala_prudhvi_1015?lqvp=MTFtaHY0eGIxM2VudA==",
      },
    ],
  },
  {
    title: "Navigation",
    data: [
      {
        name: "About",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Skills",
        icon: null,
        link: "#skills",
      },
      {
        name: "Projects",
        icon: null,
        link: "#projects",
      },
      {
        name: "Experience & Hackathons",
        icon: null,
        link: "#experience",
      },
    ],
  },
] as const;
