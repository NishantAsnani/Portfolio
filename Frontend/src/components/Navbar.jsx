import React from 'react';

const Navbar = ({ activeSection, scrollToSection, isScrolled, menuOpen, setMenuOpen, navItems, isMobile }) => {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      backgroundColor: "rgba(10, 10, 10, 0.90)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid #1e1e1e",
      fontFamily: "'Inter', sans-serif",
    }}>
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
          style={{ color: "white", fontWeight: 800, fontSize: "1.4rem", letterSpacing: "-0.02em", cursor: "pointer", flexShrink: 0 }}
        >
          Nishant<span style={{ color: "#22d3ee" }}>.dev</span>
        </span>

        {/* Desktop Nav */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            {navItems.map((item) => {
              const id = item.toLowerCase();
              const active = activeSection === id;
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(id)}
                  style={{
                    padding: "0.45rem 0.9rem",
                    borderRadius: "9999px",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    border: active ? "1px solid rgba(34,211,238,0.25)" : "1px solid transparent",
                    transition: "all 0.2s ease",
                    backgroundColor: active ? "rgba(34,211,238,0.08)" : "transparent",
                    color: active ? "#22d3ee" : "#4a6a8a",
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = "#94a3b8"; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = "#4a6a8a"; }}
                >
                  {item}
                </button>
              );
            })}
            <a
              href="/Nishant_Asnani_Resume.pdf"
              download
              style={{
                marginLeft: "0.5rem",
                padding: "0.45rem 1.1rem",
                borderRadius: "8px",
                fontSize: "0.85rem",
                fontWeight: 600,
                border: "1.5px solid #22d3ee",
                background: "rgba(34,211,238,0.08)",
                color: "#22d3ee",
                textDecoration: "none",
                transition: "all 0.2s ease",
                fontFamily: "inherit",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(34,211,238,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(34,211,238,0.08)"; }}
            >
              Resume ↓
            </a>
          </div>
        )}

        {/* Mobile right side */}
        {isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <a
              href="/Nishant_Asnani_Resume.pdf"
              download
              style={{
                padding: "0.35rem 0.9rem",
                borderRadius: "8px",
                fontSize: "0.75rem",
                fontWeight: 600,
                border: "1.5px solid #22d3ee",
                background: "rgba(34,211,238,0.08)",
                color: "#22d3ee",
                textDecoration: "none",
                fontFamily: "inherit",
              }}
            >
              Resume ↓
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none", color: "#4a6a8a", cursor: "pointer", padding: "0.4rem" }}
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
          backgroundColor: "rgba(10, 10, 10, 0.97)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid #1e1e1e",
          padding: "8px 12px 16px",
        }}>
          {navItems.map((item) => {
            const id = item.toLowerCase();
            const active = activeSection === id;
            return (
              <button
                key={item}
                onClick={() => { scrollToSection(id); setMenuOpen(false); }}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "0.7rem 1rem",
                  borderRadius: "8px",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  backgroundColor: active ? "rgba(34,211,238,0.08)" : "transparent",
                  color: active ? "#22d3ee" : "#4a6a8a",
                  fontFamily: "inherit",
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