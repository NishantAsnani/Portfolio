import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer style={{
      background: "rgb(10, 10, 10)",
      borderTop: "1px solid #1e1e1e",
      padding: "32px 24px",
      fontFamily: "'Inter', sans-serif",
    }}>
      <div style={{
        maxWidth: "980px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "16px",
      }}>

        {/* Logo */}
        <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "#ffffff", letterSpacing: "-0.02em" }}>
          Nishant<span style={{ color: "#22d3ee" }}>.dev</span>
        </span>

        {/* Credit */}
        <p style={{ fontSize: "12.5px", color: "#2d4f68", margin: 0, textAlign: "center" }}>
          © {new Date().getFullYear()} Nishant Asnani. Built with React &amp; Tailwind.
        </p>

        {/* Social links */}
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <a
            href="https://github.com/NishantAsnani"
            target="_blank" rel="noreferrer"
            style={{ color: "#2d4f68", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#ffffff"}
            onMouseLeave={e => e.currentTarget.style.color = "#2d4f68"}
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/nishant-asnani-aa6093208/"
            target="_blank" rel="noreferrer"
            style={{ color: "#2d4f68", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#22d3ee"}
            onMouseLeave={e => e.currentTarget.style.color = "#2d4f68"}
          >
            <FaLinkedin size={18} />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer