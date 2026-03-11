import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg",
    link: "https://www.udemy.com/certificate/UC-5f5c6928-c62b-4020-9f1f-58124763e3e3/",
  },
  {
    title: "Google Cloud Skills",
    issuer: "Google Cloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    link: "https://www.cloudskillsboost.google/public_profiles/9b7d27ce-d52e-4421-8b38-9b3f1fa1b7fc",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      style={{ background: "rgb(10, 10, 10)", padding: "96px 24px", fontFamily: "'Inter', sans-serif" }}
    >
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <p style={{
            fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#22d3ee", marginBottom: "14px",
          }}>
            Certifications
          </p>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800,
            color: "#ffffff", margin: 0, letterSpacing: "-0.02em",
          }}>
            Credentials &amp; <span style={{ color: "#22d3ee" }}>Licenses</span>
          </h2>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
        }}>
          {certifications.map((cert, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                padding: "24px 28px",
                borderRadius: "14px",
                background: "#111111",
                border: "1.5px solid #1e1e1e",
                transition: "border-color 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(34,211,238,0.25)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "#1e1e1e";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Icon */}
              <div style={{
                flexShrink: 0,
                width: "60px", height: "60px",
                borderRadius: "14px",
                background: "#1a1a1a",
                border: "1.5px solid #1e1e1e",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <img
                  src={cert.icon}
                  alt={cert.issuer}
                  width={34}
                  height={34}
                  style={{ objectFit: "contain" }}
                />
              </div>

              {/* Info */}
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff", margin: "0 0 4px", lineHeight: 1.4 }}>
                  {cert.title}
                </h3>
                <p style={{ fontSize: "12.5px", color: "#4a6a8a", margin: "0 0 14px", fontWeight: 500 }}>
                  {cert.issuer}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    fontSize: "11px", fontWeight: 700, color: "#22d3ee",
                    textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >
                  View Credential <FaExternalLinkAlt size={10} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications