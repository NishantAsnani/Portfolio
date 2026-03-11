import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      style={{ background: "rgb(10, 10, 10)" }}
      className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Single soft cyan glow — top right only */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-60px",
          right: "-60px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto z-10" style={{ textAlign: "left" }}>

        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 mb-8"
          style={{
            padding: "6px 14px",
            borderRadius: "999px",
            border: "1px solid rgba(34,211,238,0.2)",
            background: "rgba(34,211,238,0.05)",
          }}
        >
          <span style={{
            width: "7px", height: "7px", borderRadius: "50%",
            background: "#22d3ee",
            boxShadow: "0 0 6px #22d3ee",
            display: "inline-block",
          }} />
          <span style={{ color: "#22d3ee", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em" }}>
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>

        {/* Name */}
        <p style={{
          fontSize: "15px",
          color: "#4a6a8a",
          fontWeight: 500,
          letterSpacing: "0.04em",
          marginBottom: "12px",
          fontFamily: "'Inter', sans-serif",
        }}>
          Hi, I'm
        </p>

        <h1 style={{
          fontSize: "clamp(48px, 8vw, 80px)",
          fontWeight: 800,
          color: "#ffffff",
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          margin: "0 0 8px",
          fontFamily: "'Inter', sans-serif",
        }}>
          Nishant Asnani
        </h1>

        <h2 style={{
          fontSize: "clamp(24px, 4vw, 40px)",
          fontWeight: 700,
          color: "#22d3ee",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          margin: "0 0 28px",
          fontFamily: "'Inter', sans-serif",
        }}>
          Full Stack Engineer
        </h2>

        {/* Divider line */}
        <div style={{
          width: "48px",
          height: "3px",
          background: "#22d3ee",
          borderRadius: "2px",
          marginBottom: "28px",
        }} />

        <p style={{
          fontSize: "16px",
          color: "#4a6a8a",
          maxWidth: "520px",
          lineHeight: 1.8,
          marginBottom: "44px",
          fontFamily: "'Inter', sans-serif",
        }}>
          Building scalable systems and AI-powered tools. I design cloud-native architectures and craft seamless user experiences with modern tech.
        </p>

        {/* CTAs + Social */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <a
            href="#projects"
            style={{
              padding: "12px 28px",
              borderRadius: "8px",
              background: "#22d3ee",
              color: "#000",
              fontWeight: 700,
              fontSize: "14px",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "opacity 0.2s",
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            View Projects
          </a>

          <a
            href="#contact"
            style={{
              padding: "11px 28px",
              borderRadius: "8px",
              background: "transparent",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
              border: "1.5px solid #1a3a50",
              letterSpacing: "0.02em",
              transition: "border-color 0.2s, color 0.2s",
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "#22d3ee";
              e.currentTarget.style.color = "#22d3ee";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "#1a3a50";
              e.currentTarget.style.color = "#ffffff";
            }}
          >
            Get In Touch
          </a>

          {/* Divider */}
          <div style={{ width: "1px", height: "28px", background: "#1a3a50", margin: "0 4px" }} />

          <a
            href="https://github.com/NishantAsnani"
            target="_blank" rel="noreferrer"
            style={{ color: "#4a6a8a", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#ffffff"}
            onMouseLeave={e => e.currentTarget.style.color = "#4a6a8a"}
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/nishant-asnani-aa6093208/"
            target="_blank" rel="noreferrer"
            style={{ color: "#4a6a8a", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#22d3ee"}
            onMouseLeave={e => e.currentTarget.style.color = "#4a6a8a"}
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Bottom stats */}
        <div style={{
          display: "flex",
          gap: "40px",
          marginTop: "64px",
          paddingTop: "32px",
          borderTop: "1px solid #0d1f30",
          flexWrap: "wrap",
        }}>
          {[
            { value: "1.5", label: "Years Experience" },
            { value: "5+", label: "Technologies" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div style={{
                fontSize: "26px",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1,
                marginBottom: "4px",
              }}>
                {value}
              </div>
              <div style={{
                fontSize: "12px",
                color: "#4a6a8a",
                fontWeight: 500,
                letterSpacing: "0.04em",
                fontFamily: "'Inter', sans-serif",
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Hero