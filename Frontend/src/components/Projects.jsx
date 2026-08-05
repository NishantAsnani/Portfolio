import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, Terminal, Brain, Cloud, ShoppingCart, FileText, Swords, Package } from "lucide-react";
import { GithubIcon as Github } from "./Icons";

/* Map project type → lucide icon */
const projectIcons = {
  "Dynamite-CLI": Terminal,
  "S.A.I.L": Brain,
  "BE-Ignite": Package,
  "Sentiment Analyzer": Cloud,
  "AlgoArena.IO": Swords,
  "Rentofy": ShoppingCart,
  "Resume Builder": FileText,
  "Class Diagram Generator": FileText,
};

const projects = [
  {
    title: "Dynamite-CLI",
    category: "DevTool / NPM Package",
    tags: ["NPM Package"],
    description:
      "A lightweight command-line tool that brings version control and consistency to DynamoDB migrations. Handles migration execution, rollbacks, and seeding — purpose-built for teams working with AWS.",
    tech: ["Node.js", "DynamoDB", "AWS SDK"],
    achievements: ["Published on npm", "Migration rollback support", "Seed data management"],
    link: "https://www.npmjs.com/package/dynamite-cli",
    github: "https://github.com/NishantAsnani/dynamite-cli",
    featured: true,
  },
  {
    title: "S.A.I.L",
    category: "AI Productivity",
    tags: ["AI"],
    description:
      "Speech Analysis Intelligence and Logging. An AI-powered meeting assistant that generates transcripts and Minutes of Meeting, synced with Google Calendar & Jira for seamless workflow integration.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "AssemblyAI"],
    achievements: ["Real-time transcription", "Jira integration", "Calendar sync"],
    github: "https://github.com/NishantAsnani/SAIL_be",
    featured: true,
  },
  {
    title: "BE-Ignite",
    category: "DevTool / NPM Package",
    tags: ["NPM Package"],
    description:
      "CLI tool for scaffolding production-ready backend projects with clean folder structure using Node.js, Express, and MongoDB.",
    tech: ["Node.js", "Express.js", "MongoDB"],
    link: "https://www.npmjs.com/package/beignite",
    github: "https://github.com/NishantAsnani/be-ignite",
    featured: false,
  },
  {
    title: "Sentiment Analyzer",
    category: "Cloud / AI",
    tags: ["Cloud", "AI"],
    description:
      "AI-driven sentiment analysis tool that classifies text data into positive, negative, or neutral sentiments using NLP and machine learning.",
    tech: ["Node.js", "AWS", "React"],
    github: "https://github.com/NishantAsnani/sentiment-analysis-be",
    featured: false,
  },
  {
    title: "AlgoArena.IO",
    category: "Skill Building",
    tags: ["Full Stack", "AI"],
    description:
      "Competitive programming platform with algorithmic challenges, real-time code execution, and AI-generated hints.",
    tech: ["React", "Node.js", "Express", "Judge0", "Groq AI"],
    github: "https://github.com/NishantAsnani/GenAI_AlgoArena",
    featured: false,
  },
  {
    title: "Rentofy",
    category: "E-Commerce",
    tags: ["Full Stack"],
    description:
      "Full-featured rental e-commerce platform with user authentication and secure booking.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/NishantAsnani/Rentofy",
    featured: false,
  },
  {
    title: "Resume Builder",
    category: "Productivity",
    tags: ["Full Stack"],
    description:
      "Full-stack application for creating, customizing, and downloading professional resumes.",
    tech: ["React", "Node.js", "Express", "PDFKit"],
    github: "https://github.com/NishantAsnani/Resume_Builder",
    featured: false,
  },
  {
    title: "Class Diagram Generator",
    category: "AI / Productivity",
    tags: ["AI", "Full Stack"],
    description:
      "An class diagram generator that transforms structured class-based input into clear UML-style diagrams for better software visualization.",
    tech: ["Node.js", "Express", "React"],
    github: "https://github.com/NishantAsnani/Class_Diagram_Generator",
    featured: false,
  },
];

const filterTags = ["All", "AI", "Full Stack", "Cloud", "NPM Package"];

/* ─── Featured project card (large hero treatment) ─── */
const FeaturedCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = projectIcons[project.title];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative p-8 md:p-10 border border-border rounded-lg transition-all duration-300"
      style={{
        background: hovered
          ? "linear-gradient(135deg, #121212 0%, rgba(255,122,24,0.03) 100%)"
          : "#121212",
        borderColor: hovered ? "rgba(255,122,24,0.2)" : "#1e1e1e",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12">
        <div>
          {/* Category + Icon */}
          <div className="flex items-center gap-3 mb-4">
            {Icon && (
              <div className="w-8 h-8 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Icon size={16} className="text-accent" aria-hidden="true" />
              </div>
            )}
            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-accent">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-heading font-bold text-[28px] md:text-[34px] tracking-[-0.02em] text-text-primary mb-4 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-text-muted text-[15px] leading-relaxed mb-6 max-w-[520px]">
            {project.description}
          </p>

          {/* Achievements */}
          {project.achievements && (
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
              {project.achievements.map((a) => (
                <span
                  key={a}
                  className="flex items-center gap-2 text-[13px] text-text-muted"
                >
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  {a}
                </span>
              ))}
            </div>
          )}

          {/* Tech with devicons */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <TechBadge key={t} name={t} />
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[13px] font-medium text-text-muted hover:text-text-primary transition-colors duration-200"
              >
                <Github size={15} />
                Source
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[13px] font-medium text-accent hover:opacity-80 transition-opacity duration-200"
              >
                <ExternalLink size={14} />
                Live
              </a>
            )}
          </div>
        </div>

        {/* Arrow icon */}
        <div className="hidden md:flex items-start pt-2">
          <motion.div
            animate={{ x: hovered ? 4 : 0, y: hovered ? -4 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight
              size={28}
              className="text-border group-hover:text-accent transition-colors duration-300"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Regular project card ─── */
const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = projectIcons[project.title];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group p-6 border border-border rounded-lg transition-all duration-300 flex flex-col"
      style={{
        background: hovered ? "#141414" : "#121212",
        borderColor: hovered ? "rgba(255,122,24,0.15)" : "#1e1e1e",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2.5">
          {Icon && (
            <Icon size={14} className="text-accent/70" aria-hidden="true" />
          )}
          <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-accent">
            {project.category}
          </span>
        </div>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-dim hover:text-text-primary transition-colors"
              aria-label={`View ${project.title} source on GitHub`}
            >
              <Github size={15} aria-hidden="true" />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-dim hover:text-accent transition-colors"
              aria-label={`Visit ${project.title} live demo`}
            >
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-heading font-semibold text-[17px] text-text-primary mb-3 group-hover:text-accent transition-colors duration-200">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-text-muted text-[13px] leading-relaxed mb-auto">
        {project.description}
      </p>

      {/* Tech */}
      <div className="flex flex-wrap gap-1.5 mt-5 pt-5 border-t border-border">
        {project.tech.map((t) => (
          <TechBadge key={t} name={t} small />
        ))}
      </div>
    </motion.div>
  );
};

/* ─── Tech badge with optional devicon ─── */
const darkIcons = new Set(["express", "github", "nginx", "amazonwebservices"]);

const techIconMap = {
  "Node.js": "nodejs",
  "React": "react",
  "Express.js": "express",
  "Express": "express",
  "MongoDB": "mongodb",
  "DynamoDB": "dynamodb",
  "AWS": "amazonwebservices",
  "AWS SDK": "amazonwebservices",
  "Python": "python",
  "PDFKit": null,
  "AssemblyAI": null,
  "Judge0": null,
  "Groq AI": null,
};

const TechBadge = ({ name, small }) => {
  const devicon = techIconMap[name];
  const baseClass = small
    ? "px-2.5 py-0.5 text-[10px]"
    : "px-3 py-1 text-[11px]";

  return (
    <span
      className={`${baseClass} font-medium text-text-dim bg-primary border border-border rounded inline-flex items-center gap-1.5`}
    >
      {devicon && (
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${devicon}/${devicon}-original.svg`}
          alt=""
          className={`w-3 h-3 opacity-60 ${darkIcons.has(devicon) ? "devicon-dark" : ""}`}
          loading="lazy"
        />
      )}
      {name}
    </span>
  );
};

/* ─── Main component ─── */
export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  const featured = filtered.filter((p) => p.featured);
  const regular = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-16 md:py-36 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 md:gap-20 mb-10 md:mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-medium tracking-[0.2em] uppercase text-accent mb-4"
            >
              Selected
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] text-text-primary"
            >
              WORK
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted text-[15px] leading-relaxed self-end max-w-[480px]"
          >
            Open-source developer tools, AI-powered applications, and
            full-stack platforms built with care.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-8 md:mb-14"
        >
          {filterTags.map((tag) => {
            const active = activeTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className="px-4 py-2 text-[12px] font-medium rounded-md border transition-all duration-200"
                style={{
                  background: active ? "rgba(255,122,24,0.08)" : "transparent",
                  borderColor: active ? "rgba(255,122,24,0.3)" : "#1e1e1e",
                  color: active ? "#FF7A18" : "#8E8E93",
                }}
              >
                {tag}
              </button>
            );
          })}
        </motion.div>

        {/* Featured projects */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTag}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {featured.length > 0 && (
              <div className="flex flex-col gap-6 mb-8">
                {featured.map((p, i) => (
                  <FeaturedCard key={p.title} project={p} index={i} />
                ))}
              </div>
            )}

            {/* Regular projects grid */}
            {regular.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {regular.map((p, i) => (
                  <ProjectCard key={p.title} project={p} index={i} />
                ))}
              </div>
            )}

            {/* Empty state */}
            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-text-muted text-[15px] mb-3">
                  No projects found for{" "}
                  <span className="text-accent">{activeTag}</span>
                </p>
                <button
                  onClick={() => setActiveTag("All")}
                  className="text-[13px] text-accent hover:underline"
                >
                  ← Show all
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}