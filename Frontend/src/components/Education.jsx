import React from 'react'

const education = [
  {
    degree: "M.Tech in Software Systems",
    school: "Dhirubhai Ambani University (DA-IICT)",
    year: "2025 - 2027",
    score: "Pursuing"
  },
  {
    degree: "B.E. in Computer Engineering",
    school: "Sarvajanik College (SCET)",
    year: "2020 - 2024",
    score: "CGPA: 8.99"
  }
];

const Education = () => {
  return (
    <section
      id="education"
      style={{ background: "rgb(10, 10, 10)", padding: "96px 24px", fontFamily: "'Inter', sans-serif" }}
    >
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <p style={{
            fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#22d3ee", marginBottom: "14px",
          }}>
            Education
          </p>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800,
            color: "#ffffff", margin: 0, letterSpacing: "-0.02em",
          }}>
            Academic <span style={{ color: "#22d3ee" }}>Background</span>
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
          {education.map((edu, index) => (
            <div
              key={index}
              style={{
                padding: "28px",
                borderRadius: "14px",
                background: "#111111",
                border: "1.5px solid #1e1e1e",
                transition: "border-color 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(34,211,238,0.3)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "#1e1e1e";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Top row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "10px",
                  background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "18px",
                }}>
                  🎓
                </div>
                <span style={{
                  fontSize: "11px", fontWeight: 600, color: "#22d3ee",
                  background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.15)",
                  padding: "4px 10px", borderRadius: "999px", letterSpacing: "0.02em",
                }}>
                  {edu.score}
                </span>
              </div>

              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", margin: "0 0 8px", lineHeight: 1.4 }}>
                {edu.degree}
              </h3>
              <p style={{ fontSize: "13.5px", color: "#22d3ee", fontWeight: 500, margin: "0 0 16px" }}>
                {edu.school}
              </p>

              {/* Divider */}
              <div style={{ height: "1px", background: "#1e1e1e", marginBottom: "16px" }} />

              <span style={{ fontSize: "12px", color: "#4a6a8a", fontWeight: 500 }}>
                {edu.year}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Education