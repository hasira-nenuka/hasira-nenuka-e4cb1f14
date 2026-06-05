export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
  { href: "#certs", label: "Achievements" },
  { href: "#security", label: "Cyber Security" },
  { href: "#contact", label: "Contact" },
];

export const SKILLS = [
  { group: "Frontend", items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"] },
  { group: "Backend", items: ["Java", "Spring Boot", "Node.js", "Express.js", "PHP", "Python"] },
  { group: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Oracle Database"] },
  { group: "Tools", items: ["Git", "GitHub", "Docker", "Linux", "VS Code", "Postman"] },
  { group: "Other Knowledge", items: ["REST APIs", "OOP", "Data Structures", "Algorithms", "Database Design", "Agile Development"] },
];

import internshipImg from "@/assets/projects/internship.png.asset.json";
import languageImg from "@/assets/projects/language.png.asset.json";
import facilitiesImg from "@/assets/projects/facilities.png.asset.json";
import helpdeskImg from "@/assets/projects/helpdesk.png.asset.json";
import mernImg from "@/assets/projects/mern.png.asset.json";
import testautoImg from "@/assets/projects/testauto.jpg.asset.json";

export type ProjectCategory = "Frontend" | "Backend" | "Full Stack" | "Academic";

export const PROJECTS: {
  title: string;
  description: string;
  tech: string[];
  category: ProjectCategory[];
  github?: string;
  demo?: string;
  gradient: string;
  image?: string;
}[] = [
  {
    title: "University Internship & Career Management System",
    description: "A complete platform to manage internships, career opportunities, applications, approvals, communication and analytics.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    category: ["Full Stack", "Academic"],
    github: "#",
    demo: "#",
    gradient: "from-blue-500/30 to-purple-500/30",
    image: internshipImg.url,
  },
  {
    title: "Automated Language Conversion Tests",
    description: "Playwright UI automation suite for Singlish and Thanglish to Sinhala and Tamil language conversion testing.",
    tech: ["Playwright", "TypeScript", "Node.js", "GitHub Actions"],
    category: ["Academic"],
    github: "#",
    gradient: "from-emerald-500/30 to-cyan-500/30",
    image: languageImg.url,
  },
  {
    title: "Facilities Halls Booking System",
    description: "A campus facilities platform for hall bookings, maintenance requests, ticket tracking, approvals and role-based access.",
    tech: ["React", "Node.js", "MongoDB"],
    category: ["Full Stack", "Academic"],
    github: "#",
    demo: "#",
    gradient: "from-indigo-500/30 to-blue-500/30",
    image: facilitiesImg.url,
  },
  {
    title: "Helpdesk Management System",
    description: "A complete ticket support system with user and admin dashboards, ticket assignment, PDF exports and REST API endpoints.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    category: ["Full Stack"],
    github: "#",
    demo: "#",
    gradient: "from-violet-500/30 to-indigo-500/30",
    image: helpdeskImg.url,
  },
  {
    title: "MERN Application",
    description: "A full-stack MERN application that manages orders, inventory, finance, support/helpdesk and navigation integrations.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    category: ["Full Stack"],
    github: "#",
    demo: "#",
    gradient: "from-fuchsia-500/30 to-pink-500/30",
    image: mernImg.url,
  },
  {
    title: "Test Automation Assignment",
    description: "Exploration of automation testing types — unit, integration, performance, regression, smoke and API testing.",
    tech: ["Selenium", "Java", "TestNG"],
    category: ["Academic"],
    github: "#",
    gradient: "from-cyan-500/30 to-blue-500/30",
    image: testautoImg.url,
  },
];

export const PROJECT_FILTERS: (ProjectCategory | "All")[] = ["All", "Frontend", "Backend", "Full Stack", "Academic"];

export const EDUCATION = {
  degree: "Bachelor of Science Honours in Information Technology",
  university: "Sri Lanka Institute of Information Technology (SLIIT)",
  gpa: "2.12",
  graduation: "Expected 2027",
  modules: [
    "Database Systems",
    "Software Engineering",
    "Web Application Development",
    "Data Structures & Algorithms",
    "Computer Networks",
    "Information Security",
  ],
};

export const CERTIFICATIONS = [
  { title: "University Coursework Projects", org: "Software Engineering Department", year: "2023 – Present" },
  { title: "Programming Certifications", org: "Oracle / Microsoft Learn", year: "2024" },
  { title: "Online Learning Certificates", org: "Coursera • Udemy", year: "2023 – 2024" },
  { title: "Hackathons", org: "University & Inter-University Events", year: "2024" },
  { title: "Workshops", org: "Industry Tech Talks", year: "2023 – 2024" },
];

export const SECURITY_INTERESTS = [
  { title: "Network Security", desc: "Understanding protocols, firewalls and secure architectures." },
  { title: "Ethical Hacking Fundamentals", desc: "Learning offensive security in controlled lab environments." },
  { title: "Secure Software Development", desc: "Applying OWASP best practices throughout the SDLC." },
  { title: "Linux Administration", desc: "Hardening servers and managing permissions on Unix systems." },
  { title: "Web Application Security", desc: "Mitigating XSS, CSRF, SQL injection and auth flaws." },
];

export const STATS = [
  { value: "3+", label: "Years of Learning" },
  { value: "15+", label: "Completed Projects" },
  { value: "20+", label: "Technologies Learned" },
  { value: "10+", label: "Academic Achievements" },
];

export const SOCIALS = {
  github: "https://github.com/hasira-nenuka",
  linkedin: "https://linkedin.com/",
  email: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=hasiranenuka20896@gmail.com",
};
