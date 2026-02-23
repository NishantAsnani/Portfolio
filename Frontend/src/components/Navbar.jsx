import React from 'react';

const Navbar = ({ activeSection, scrollToSection, isScrolled, menuOpen, setMenuOpen, navItems, isMobile }) => {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      backgroundColor: "rgba(2, 6, 23, 0.85)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(51, 65, 85, 0.5)"
    }}>
      {/* Single wrapper div */}
      <div style={{
        margin: "0 auto",
        padding: "1rem 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        boxSizing: "border-box",
      }}>

        {/* Logo */}
        <span
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ color: "white", fontWeight: 800, fontSize: "1.5rem", letterSpacing: "-0.02em", cursor: "pointer", flexShrink: 0 }}
        >
          Nishant<span style={{ color: "#22d3ee" }}>.dev</span>
        </span>

        {/* Desktop Nav */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            {navItems.map((item) => {
              const id = item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(id)}
                  style={{
                    padding: "0.5rem 0.75rem",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    border: "none",
                    transition: "all 0.3s ease",
                    backgroundColor: activeSection === id ? "rgba(34,211,238,0.1)" : "transparent",
                    color: activeSection === id ? "#22d3ee" : "#94a3b8",
                  }}
                >
                  {item}
                </button>
              );
            })}
              <a
              href="/Nishant_Asnani_Resume.pdf"
              download
              style={{
                marginLeft: "0.75rem",
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                fontWeight: 600,
                border: "1px solid #22d3ee",
                color: "#22d3ee",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              Resume ↓
            </a>
          </div>
        )}

        {/* Mobile */}
        {isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <a
              href="/Nishant_Asnani_Resume.pdf"
              download
              style={{
                padding: "0.35rem 0.9rem",
                borderRadius: "9999px",
                fontSize: "0.75rem",
                fontWeight: 600,
                border: "1px solid #22d3ee",
                color: "#22d3ee",
                textDecoration: "none",
              }}
            >
              Resume ↓
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer", padding: "0.5rem" }}
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Mobile Dropdown */}
      {isMobile && menuOpen && (
        <div style={{
          backgroundColor: "rgba(15, 23, 42, 0.97)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(51,65,85,0.5)",
          padding: "0.75rem 1rem",
          animation: "fadeInUp 0.2s ease forwards"
        }}>
          {navItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <button
                key={item}
                onClick={() => { scrollToSection(id); setMenuOpen(false); }}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "0.75rem 1rem",
                  borderRadius: "0.75rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  backgroundColor: activeSection === id ? "rgba(34,211,238,0.1)" : "transparent",
                  color: activeSection === id ? "#22d3ee" : "#94a3b8",
                }}
              >
                {item}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;