import React from 'react'

const experiences = [
  {
    role: "Software Engineer L2",
    company: "Crest Infosystems",
    duration: "Jan 2024 - Jul 2025",
    description: [
      "Engineered internal ERP systems supporting 200+ employees using Node.js & React.",
      "Built a context-aware chatbot using AWS Bedrock to automate internal queries.",
      "Optimized database schemas to reduce latency and improve API performance."
    ],
    tech: ["Node.js", "AWS Bedrock", "React"]
  },
  {
    role: "Data Science Intern",
    company: "BISAG-N",
    duration: "Jul 2023 - Aug 2023",
    description: [
      "Analyzed Australian weather datasets to identify rainfall trends.",
      "Leveraged Pandas & NumPy for data cleaning and Matplotlib for visualization."
    ],
    tech: ["Python", "Pandas", "Matplotlib"]
  }
];

const Experience = () => {
  return (
    <section
      id="work"
      style={{ background: "rgb(10, 10, 10)", padding: "96px 24px", fontFamily: "'Inter', sans-serif" }}
    >
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p style={{
            fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#22d3ee", marginBottom: "14px",
          }}>
            Experience
          </p>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800,
            color: "#ffffff", margin: 0, letterSpacing: "-0.02em",
          }}>
            Work <span style={{ color: "#22d3ee" }}>Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>

          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: "19px",
            top: 0,
            bottom: 0,
            width: "1px",
            background: "linear-gradient(to bottom, transparent, #1e1e1e 15%, #1e1e1e 85%, transparent)",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {experiences.map((exp, index) => (
              <div key={index} style={{ display: "flex", gap: "28px", alignItems: "flex-start" }}>

                {/* Dot */}
                <div style={{
                  flexShrink: 0,
                  width: "38px", height: "38px",
                  borderRadius: "50%",
                  background: "#111111",
                  border: "1.5px solid #1e1e1e",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  zIndex: 1,
                  marginTop: "4px",
                }}>
                  <div style={{
                    width: "10px", height: "10px", borderRadius: "50%",
                    background: "#22d3ee",
                    boxShadow: "0 0 8px rgba(34,211,238,0.5)",
                  }} />
                </div>

                {/* Card */}
                <div
                  style={{
                    flex: 1,
                    padding: "24px 28px",
                    borderRadius: "14px",
                    background: "#111111",
                    border: "1.5px solid #1e1e1e",
                    transition: "border-color 0.2s ease, transform 0.2s ease",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "rgba(34,211,238,0.25)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "#1e1e1e";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Company + Duration */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px", marginBottom: "6px" }}>
                    <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                      {exp.company}
                    </h3>
                    <span style={{
                      fontSize: "11px", fontWeight: 600, color: "#22d3ee",
                      background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.15)",
                      padding: "3px 10px", borderRadius: "999px", fontFamily: "monospace",
                      letterSpacing: "0.04em",
                    }}>
                      {exp.duration}
                    </span>
                  </div>

                  {/* Role */}
                  <p style={{ fontSize: "13px", color: "#4a6a8a", fontWeight: 500, margin: "0 0 16px" }}>
                    {exp.role}
                  </p>

                  {/* Description */}
                  <ul style={{ margin: "0 0 18px", padding: "0 0 0 16px" }}>
                    {exp.description.map((desc, i) => (
                      <li key={i} style={{
                        fontSize: "13.5px", color: "#6b8fa8", lineHeight: 1.7,
                        marginBottom: "4px",
                        listStyleType: "none",
                        paddingLeft: "12px",
                        position: "relative",
                      }}>
                        <span style={{
                          position: "absolute", left: 0, top: "10px",
                          width: "4px", height: "4px", borderRadius: "50%",
                          background: "#22d3ee", display: "inline-block",
                        }} />
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {exp.tech.map((t, i) => (
                      <span key={i} style={{
                        fontSize: "11px", fontWeight: 500, color: "#4a6a8a",
                        background: "#1a1a1a", border: "1px solid #1e1e1e",
                        padding: "3px 10px", borderRadius: "6px",
                        letterSpacing: "0.02em",
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience