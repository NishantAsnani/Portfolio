import { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Dynamite-CLI",
    category: "DevTool / NPM Package",
    tags: ["NPM Package"],
    description: "A lightweight command-line tool designed to bring version control and consistency to DynamoDB migrations. Handles migration execution, rollbacks, and seeding.",
    tech: ["Node.js", "DynamoDB", "AWS SDK"],
    link: "https://www.npmjs.com/package/dynamite-cli",
    github: "https://github.com/NishantAsnani/dynamite-cli",
    accent: "#f97316",
  },
  {
    title: "BE-Ignite",
    category: "DevTool / NPM Package",
    tags: ["NPM Package"],
    description: "A lightweight command-line tool designed to give boilerplate code and clean folder structure for backend projects using Node.js, Express, and MongoDB.",
    tech: ["Node.js", "Express.js", "MongoDB"],
    link: "https://www.npmjs.com/package/be-ignite",
    github: "https://github.com/NishantAsnani/be-ignite",
    accent: "#f97316",
  },
  {
    title: "S.A.I.L",
    category: "AI Productivity",
    tags: ["AI"],
    description: "Speech Analysis Intelligence and Logging. An AI-powered meeting assistant that generates transcripts and Minutes of Meeting (MoM), synced with Google Calendar & Jira.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "AssemblyAI"],
    github: "https://github.com/NishantAsnani/SAIL_be",
    accent: "#22d3ee",
  },
  {
    title: "Sentiment Analyzer",
    category: "Cloud / AI",
    tags: ["Cloud", "AI"],
    description: "An AI-driven sentiment analysis tool that classifies text data into positive, negative, or neutral sentiments using NLP techniques and machine learning models.",
    tech: ["Node.js", "AWS", "React"],
    github: "https://github.com/NishantAsnani/sentiment-analysis-be",
    accent: "#22d3ee",
  },
  {
    title: "Rentofy",
    category: "E-Commerce",
    tags: ["Full Stack"],
    description: "A full-featured rental e-commerce platform with user authentication and secure booking features.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/NishantAsnani/Rentofy",
    accent: "#22d3ee",
  },
  {
    title: "Resume Builder",
    category: "Productivity",
    tags: ["Full Stack"],
    description: "A full-stack resume builder application that allows users to create, customize, and download professional resumes with ease.",
    tech: ["React", "Node.js", "Express", "PDFKit"],
    github: "https://github.com/NishantAsnani/Resume_Builder",
    accent: "#22d3ee",
  },
];

const filterTags = ["All", "AI", "Full Stack", "Cloud", "NPM Package"];

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");
  const [animating, setAnimating] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleFilter = (tag) => {
    if (tag === activeTag) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveTag(tag);
      setAnimating(false);
    }, 180);
  };

  const filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section
      id="projects"
      style={{
        background: "rgb(10, 10, 10)",
        padding: "96px 24px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: "980px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <p style={{
            fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#22d3ee", marginBottom: "14px",
          }}>
            Work
          </p>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800,
            color: "#ffffff", margin: "0 0 14px", letterSpacing: "-0.02em",
          }}>
            Featured <span style={{ color: "#22d3ee" }}>Projects</span>
          </h2>
          <p style={{ color: "#4a6a8a", fontSize: "15px", margin: 0, maxWidth: "400px", marginLeft: "auto", marginRight: "auto" }}>
            Highlighting my journey in open-source and full-stack development.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", marginBottom: "44px" }}>
          {filterTags.map((tag) => {
            const active = activeTag === tag;
            return (
              <button
                key={tag}
                onClick={() => handleFilter(tag)}
                style={{
                  padding: "7px 20px",
                  borderRadius: "999px",
                  border: active ? "1.5px solid #22d3ee" : "1.5px solid #1e1e1e",
                  background: active ? "rgba(34,211,238,0.08)" : "transparent",
                  color: active ? "#22d3ee" : "#4a6a8a",
                  fontSize: "13px", fontWeight: 500,
                  cursor: "pointer", transition: "all 0.2s ease",
                  fontFamily: "inherit", outline: "none",
                }}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div
          key={activeTag}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
            gap: "16px",
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(8px)" : "translateY(0)",
            transition: "opacity 0.18s ease, transform 0.18s ease",
          }}
        >
          {filteredProjects.map((project, index) => {
            const hovered = hoveredIndex === index;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "24px",
                  borderRadius: "14px",
                  background: "#111111",
                  border: hovered
                    ? `1.5px solid ${project.accent}40`
                    : "1.5px solid #1e1e1e",
                  transition: "all 0.22s ease",
                  transform: hovered ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: hovered ? `0 8px 30px ${project.accent}10` : "none",
                  minHeight: "260px",
                }}
              >
                {/* Category + Links */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <span style={{
                    fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em",
                    color: project.accent, textTransform: "uppercase",
                  }}>
                    {project.category}
                  </span>
                  <div style={{ display: "flex", gap: "6px" }}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer"
                        style={{
                          color: "#4a6a8a", transition: "color 0.2s",
                          display: "flex", alignItems: "center", padding: "4px",
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = "#ffffff"}
                        onMouseLeave={e => e.currentTarget.style.color = "#4a6a8a"}
                      >
                        <FaGithub size={16} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer"
                        style={{
                          color: "#4a6a8a", transition: "color 0.2s",
                          display: "flex", alignItems: "center", padding: "4px",
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = "#22d3ee"}
                        onMouseLeave={e => e.currentTarget.style.color = "#4a6a8a"}
                      >
                        <FaExternalLinkAlt size={13} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: "16px", fontWeight: 700,
                  color: hovered ? project.accent : "#ffffff",
                  margin: "0 0 12px",
                  transition: "color 0.22s ease",
                }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: "13.5px", color: "#4a6a8a",
                  lineHeight: 1.75, margin: "0", flexGrow: 1,
                }}>
                  {project.description}
                </p>

                {/* Tech tags */}
                <div style={{
                  display: "flex", flexWrap: "wrap", gap: "6px",
                  marginTop: "20px", paddingTop: "16px",
                  borderTop: "1px solid #1e1e1e",
                }}>
                  {project.tech.map((tech, i) => (
                    <span key={i} style={{
                      fontSize: "11px", fontWeight: 500, color: "#4a6a8a",
                      background: "#1a1a1a", border: "1px solid #1e1e1e",
                      padding: "3px 10px", borderRadius: "6px",
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div style={{ textAlign: "center", padding: "64px 0", color: "#4a6a8a" }}>
            <p style={{ fontSize: "15px" }}>
              No projects found for <span style={{ color: "#22d3ee" }}>{activeTag}</span>
            </p>
            <button
              onClick={() => setActiveTag("All")}
              style={{
                marginTop: "12px", color: "#22d3ee", background: "none",
                border: "none", cursor: "pointer", fontSize: "13px", fontFamily: "inherit",
              }}
            >
              ← Show all projects
            </button>
          </div>
        )}

      </div>
    </section>
  );
}