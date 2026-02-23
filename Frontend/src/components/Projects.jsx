import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Dynamite-CLI",
    category: "DevTool / NPM Package",
    tags: ["NPM Package"],
    description: "A lightweight command-line tool designed to bring version control and consistency to DynamoDB migrations. Handles migration execution, rollbacks, and seeding.",
    tech: ["Node.js", "DynamoDB", "AWS SDK"],
    link: "https://www.npmjs.com/package/dynamite-cli",
    github: "https://github.com/NishantAsnani/dynamite-cli",
    color: "border-orange-500",
  },
  {
    title: "BE-Ignite",
    category: "DevTool / NPM Package",
    tags: ["NPM Package"],
    description: "A lightweight command-line tool designed to give boilerplate code and clean folder structure for backend projects using Node.js, Express, and MongoDB.",
    tech: ["Node.js", "Express.js", "MongoDB"],
    link: "https://www.npmjs.com/package/be-ignite",
    github: "https://github.com/NishantAsnani/be-ignite",
    color: "border-orange-500",
  },
  {
    title: "S.A.I.L",
    category: "AI Productivity",
    tags: ["AI"],
    description: "Speech Analysis Intelligence and Logging. An AI-powered meeting assistant that generates transcripts and Minutes of Meeting (MoM), synced with Google Calendar & Jira.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "AssemblyAI"],
    github: "https://github.com/NishantAsnani/SAIL_be",
    color: "border-cyan-500",
  },
  {
    title: "Sentiment Analyzer",
    category: "Cloud",
    tags: ["Cloud", "AI"],
    description: "An AI-driven sentiment analysis tool that classifies text data into positive, negative, or neutral sentiments using NLP techniques and machine learning models.",
    tech: ["Node.js", "AWS", "React"],
    github: "https://github.com/NishantAsnani/sentiment-analysis-be",
    color: "border-purple-500",
  },
  {
    title: "Rentofy",
    category: "E-Commerce",
    tags: ["Full Stack"],
    description: "A full-featured rental e-commerce platform with user authentication, and secure booking features.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/NishantAsnani/Rentofy",
    color: "border-pink-500",
  },
];

const filterTags = ["All", "AI", "Full Stack", "Cloud", "NPM Package"];

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getGridColumns = () => {
    if (windowWidth < 640) return "1fr";
    if (windowWidth < 1024) return "repeat(2, 1fr)";
    return "repeat(3, 1fr)";
  };

  const getCardMinHeight = () => {
    if (windowWidth < 640) return "280px";
    return "420px";
  };

  const filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section
      id="projects"
      className="bg-slate-900/30"
      style={{ padding: windowWidth < 640 ? "4rem 1rem" : "6rem 1.5rem" }}
    >
      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: windowWidth < 640 ? "1.75rem" : "2.25rem", fontWeight: 700, marginBottom: "1rem" }}>
            Featured <span style={{ color: "#22d3ee" }}>Projects</span>
          </h2>
          <p style={{ color: "#94a3b8", maxWidth: "36rem", margin: "0 auto" }}>
            Highlighting my journey in open-source and full-stack development.
          </p>
        </div>

        {/* Filter Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center", marginBottom: "2.5rem" }}>
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              style={{
                padding: "0.4rem 1.2rem",
                borderRadius: "9999px",
                fontSize: "0.8rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
                border: activeTag === tag ? "1px solid #22d3ee" : "1px solid rgba(51,65,85,0.6)",
                backgroundColor: activeTag === tag ? "rgba(8,145,178,0.2)" : "rgba(15,23,42,0.6)",
                color: activeTag === tag ? "#22d3ee" : "#94a3b8",
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          key={activeTag}
          style={{
            display: "grid",
            gridTemplateColumns: getGridColumns(),
            gap: "1.5rem",
          }}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`project-card group relative p-6 rounded-2xl bg-slate-900 border hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 overflow-hidden ${project.color}`}
              style={{
                display: "flex",
                flexDirection: "column",
                minHeight: getCardMinHeight(),
                animationDelay: `${index * 0.08}s`,
                opacity: 0,
              }}
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              {/* Header */}
              <div className="relative z-10 mb-4">
                <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", color: "#06b6d4", textTransform: "uppercase" }}>
                  {project.category}
                </span>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <h3 className="group-hover:text-cyan-400 transition-colors" style={{ fontSize: "1.1rem", fontWeight: 700, color: "white", marginTop: "0.25rem" }}>
                    {project.title}
                  </h3>
                  <div style={{ display: "flex", gap: "0.5rem", marginLeft: "0.5rem" }}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                        <FaGithub size={18} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors p-2 hover:bg-white/10 rounded-full">
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p style={{ color: "#94a3b8", lineHeight: 1.7, flexGrow: 1 }} className="relative z-10">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div
                className="relative z-10"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  paddingTop: "1rem",
                  marginTop: "auto",
                  borderTop: "1px solid rgba(51,65,85,0.5)",
                }}
              >
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "0.2rem 0.75rem",
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      borderRadius: "9999px",
                      backgroundColor: "rgba(8,47,73,0.5)",
                      color: "#67e8f9",
                      border: "1px solid rgba(8,145,178,0.3)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div style={{ textAlign: "center", padding: "4rem 0", color: "#64748b" }}>
            <p style={{ fontSize: "1.1rem" }}>
              No projects found for <span style={{ color: "#22d3ee" }}>{activeTag}</span>
            </p>
            <button
              onClick={() => setActiveTag("All")}
              style={{ marginTop: "1rem", color: "#22d3ee", background: "none", border: "none", cursor: "pointer", fontSize: "0.9rem" }}
            >
              ← Show all projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}