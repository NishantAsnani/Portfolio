import React, { useState } from "react";

const skills = [
  { name: "Python",     category: "Languages",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++",        category: "Languages",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "JavaScript", category: "Languages",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "C", category: "Languages",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "React",      category: "Web / App Dev", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js",    category: "Web / App Dev", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Tailwind",   category: "Web / App Dev", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Redux",   category: "Web / App Dev", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
  { name: "Express.js",   category: "Web / App Dev", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "MongoDB",    category: "Databases",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL",      category: "Databases",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "AWS",        category: "DevOps",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "DynamoDB",   category: "Databases",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg" },
  { name: "Linux",      category: "DevOps",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Git",        category: "Tools",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub",     category: "Tools",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];

const categories = ["All", "Languages", "Web / App Dev", "Databases", "DevOps", "Tools"];

export default function Skills() {
  const [filter, setFilter] = useState("All");
  const [animating, setAnimating] = useState(false);

  const handleFilter = (cat) => {
    if (cat === filter) return;
    setAnimating(true);
    setTimeout(() => {
      setFilter(cat);
      setAnimating(false);
    }, 180);
  };

  const filtered = filter === "All" ? skills : skills.filter(s => s.category === filter);

  return (
    <section style={{
      padding: "96px 24px",
      background: "rgb(10, 10, 10)",
      fontFamily: "'Inter', -apple-system, sans-serif",
    }}>
      <div style={{ maxWidth: "980px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <p style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#22d3ee",
            marginBottom: "14px",
          }}>
            Skills
          </p>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 46px)",
            fontWeight: 800,
            color: "#ffffff",
            margin: "0 0 14px",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}>
            Technical{" "}
            <span style={{ color: "#22d3ee" }}>Expertise</span>
          </h2>
          <p style={{ color: "#4a6a8a", fontSize: "15px", margin: 0 }}>
            Technologies and tools I work with
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "44px",
        }}>
          {categories.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                style={{
                  padding: "7px 20px",
                  borderRadius: "999px",
                  border: active ? "1.5px solid #22d3ee" : "1.5px solid #1e1e1e",
                  background: active ? "rgba(34,211,238,0.08)" : "transparent",
                  color: active ? "#22d3ee" : "#4a6a8a",
                  fontSize: "13px",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  fontFamily: "inherit",
                  outline: "none",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(118px, 1fr))",
          gap: "14px",
          opacity: animating ? 0 : 1,
          transform: animating ? "translateY(10px)" : "translateY(0)",
          transition: "opacity 0.18s ease, transform 0.18s ease",
        }}>
          {filtered.map((skill) => (
            <div
              key={`${filter}-${skill.name}`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                padding: "30px 12px 24px",
                borderRadius: "14px",
                background: "#111111",
                border: "1.5px solid #1e1e1e",
                transition: "transform 0.2s ease",
                cursor: "default",
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.06)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                width={44}
                height={44}
                style={{ objectFit: "contain" }}
              />
              <span style={{
                fontSize: "12.5px",
                fontWeight: 500,
                color: "#4a6a8a",
                textAlign: "center",
                letterSpacing: "0.01em",
              }}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}