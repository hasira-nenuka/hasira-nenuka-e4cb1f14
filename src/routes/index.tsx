import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Projects } from "@/components/portfolio/Projects";
import { GitHubShowcase } from "@/components/portfolio/GitHubShowcase";
import { Certifications } from "@/components/portfolio/Certifications";
import { CyberSecurity } from "@/components/portfolio/CyberSecurity";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Loader } from "@/components/portfolio/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hasira Nenuka — Information Technology Undergraduate & Full-Stack Developer" },
      { name: "description", content: "Portfolio of Hasira Nenuka, an Information Technology undergraduate and full-stack developer building scalable, secure and modern web applications." },
      { property: "og:title", content: "Hasira Nenuka — Information Technology Student" },
      { property: "og:description", content: "Full-stack developer building modern, scalable software." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-dvh">
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <GitHubShowcase />
      <Certifications />
      <CyberSecurity />
      <Contact />
      <Footer />
    </main>
  );
}
