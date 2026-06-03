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

export type ProjectCategory = "Frontend" | "Backend" | "Full Stack" | "Academic";

export const PROJECTS: {
  title: string;
  description: string;
  tech: string[];
  category: ProjectCategory[];
  github?: string;
  demo?: string;
  gradient: string;
}[] = [
  {
    title: "Smart Campus Management System",
    description: "An integrated campus platform for students, lecturers and admins to manage courses, schedules and resources in real time.",
    tech: ["React", "Spring Boot", "MySQL"],
    category: ["Full Stack", "Academic"],
    github: "#",
    demo: "#",
    gradient: "from-blue-500/30 to-purple-500/30",
  },
  {
    title: "Student Attendance Management System",
    description: "Desktop application for tracking student attendance with reports, analytics and role based access.",
    tech: ["Java", "MySQL"],
    category: ["Backend", "Academic"],
    github: "#",
    gradient: "from-indigo-500/30 to-blue-500/30",
  },
  {
    title: "E-Commerce Platform",
    description: "A full featured online store with product catalogue, cart, checkout and admin dashboard built on the MERN stack.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    category: ["Full Stack"],
    github: "#",
    demo: "#",
    gradient: "from-fuchsia-500/30 to-pink-500/30",
  },
  {
    title: "Hospital Management System",
    description: "Enterprise style hospital information system handling patients, appointments, billing and staff records.",
    tech: ["Java", "Oracle Database"],
    category: ["Backend", "Academic"],
    github: "#",
    gradient: "from-cyan-500/30 to-blue-500/30",
  },
  {
    title: "Portfolio Website",
    description: "Modern animated developer portfolio built with React and Tailwind CSS, featuring glassmorphism and smooth motion.",
    tech: ["React", "Tailwind CSS"],
    category: ["Frontend"],
    github: "#",
    demo: "#",
    gradient: "from-violet-500/30 to-indigo-500/30",
  },
  {
    title: "Task Management Application",
    description: "Real time task tracker with authentication, boards and drag and drop powered by Node.js and MongoDB.",
    tech: ["Node.js", "MongoDB", "Express"],
    category: ["Full Stack"],
    github: "#",
    demo: "#",
    gradient: "from-emerald-500/30 to-cyan-500/30",
  },
];

export const PROJECT_FILTERS: (ProjectCategory | "All")[] = ["All", "Frontend", "Backend", "Full Stack", "Academic"];

export const EDUCATION = {
  degree: "BSc (Hons) in Information Technology",
  university: "University Name",
  gpa: "3.8 / 4.0",
  graduation: "Expected 2026",
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
  email: "mailto:hasira@example.com",
};
