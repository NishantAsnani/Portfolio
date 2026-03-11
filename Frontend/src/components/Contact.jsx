import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaLocationArrow, FaPhone,FaCode } from 'react-icons/fa'
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000'
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
    const url=import.meta.env.ENV === 'production' ? 'api/contact' : `${BACKEND_URL}/contact`
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    background: '#111111',
    border: '1.5px solid #1e1e1e',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: "'Inter', sans-serif",
    outline: 'none',
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box',
  }

  const contactItems = [
    {
      icon: <FaEnvelope size={16} />,
      label: 'Email',
      value: 'asnaninishant2@gmail.com',
      href: 'mailto:asnaninishant2@gmail.com',
    },
    {
      icon: <FaLocationArrow size={16} />,
      label: 'Location',
      value: 'Gujarat, India',
      href: null,
    },
    {
      icon: <FaPhone size={16} />,
      label: 'Phone',
      value: '+91 98250 98250',
      href: 'tel:+919825098250',
    },
  ]

  const socialLinks = [
    {
      icon: <FaGithub size={18} />,
      label: 'GitHub',
      href: 'https://github.com/NishantAsnani',
      hoverColor: '#94a3b8',
    },
    {
      icon: <FaLinkedin size={18} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nishant-asnani-aa6093208/',
      hoverColor: '#22d3ee',
    },
    {
      icon: <FaCode/>,
      label: 'GeeksForGeeks',
      href: 'https://www.geeksforgeeks.org/user/nishantasnani/',
      hoverColor: '#4ade80',
    },
  ]

  return (
    <section
      id="contact"
      style={{ background: 'rgb(10, 10, 10)', padding: '96px 24px', fontFamily: "'Inter', sans-serif" }}
    >
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p style={{
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: '#22d3ee', marginBottom: '14px',
          }}>
            Contact
          </p>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800,
            color: '#ffffff', margin: '0 0 14px', letterSpacing: '-0.02em',
          }}>
            Get In <span style={{ color: '#22d3ee' }}>Touch</span>
          </h2>
          <p style={{ color: '#4a6a8a', fontSize: '15px', margin: '0 auto', maxWidth: '420px', lineHeight: 1.7 }}>
            Have an opportunity or just want to say hi? My inbox is always open.
          </p>
        </div>

        {/* Two column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
          alignItems: 'start',
        }}>

          {/* Left — info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {contactItems.map(({ icon, label, value, href }) => {
              const Tag = href ? 'a' : 'div'
              const linkProps = href
                ? { href, target: '_blank', rel: 'noreferrer', style: { textDecoration: 'none' } }
                : {}

              return (
                <Tag
                  key={label}
                  {...linkProps}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '16px',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    background: '#111111',
                    border: '1.5px solid #1e1e1e',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, transform 0.2s',
                    cursor: href ? 'pointer' : 'default',
                  }}
                  onMouseEnter={e => {
                    if (href) {
                      e.currentTarget.style.borderColor = 'rgba(34,211,238,0.25)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#1e1e1e'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '10px',
                    background: 'rgba(34,211,238,0.08)',
                    border: '1px solid rgba(34,211,238,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#22d3ee', flexShrink: 0,
                  }}>
                    {icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '11px', color: '#4a6a8a', fontWeight: 600, margin: '0 0 2px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      {label}
                    </p>
                    <p style={{ fontSize: '13.5px', color: '#94a3b8', fontWeight: 500, margin: 0 }}>
                      {value}
                    </p>
                  </div>
                </Tag>
              )
            })}

            {/* Connect card */}
            <div style={{
              padding: '16px 20px',
              borderRadius: '12px',
              background: '#111111',
              border: '1.5px solid #1e1e1e',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}>
              {/* Big phone icon */}
              <div style={{
                width: '48px', height: '48px', borderRadius: '12px',
                background: 'rgba(34,211,238,0.08)',
                border: '1px solid rgba(34,211,238,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#22d3ee', flexShrink: 0,
              }}>
                <FaPhone size={18} />
              </div>

              {/* Right side — label + icons */}
              <div>
                <p style={{ fontSize: '13.5px', color: '#94a3b8', fontWeight: 600, margin: '0 0 10px' }}>
                  Connect
                </p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {socialLinks.map(({ icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      title={label}
                      style={{
                        width: '30px', height: '30px',
                        borderRadius: '8px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#4a6a8a',
                        textDecoration: 'none',
                        transition: 'color 0.2s, transform 0.2s',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = '#22d3ee'
                        e.currentTarget.style.transform = 'translateY(-2px)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = '#4a6a8a'
                        e.currentTarget.style.transform = 'translateY(0)'
                      }}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '10px 16px', borderRadius: '10px',
              background: 'rgba(34,211,238,0.05)',
              border: '1px solid rgba(34,211,238,0.15)',
              marginTop: '4px',
            }}>
              <div style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: '#22d3ee', boxShadow: '0 0 6px #22d3ee',
                flexShrink: 0,
              }} />
              <span style={{ fontSize: '12.5px', color: '#22d3ee', fontWeight: 600 }}>
                Available for new opportunities
              </span>
            </div>
          </div>

          {/* Right — Form */}
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
          >
            {/* Name */}
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#4a6a8a', marginBottom: '8px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Name <span style={{ color: '#22d3ee' }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Nishant Asnani"
                value={form.name}
                onChange={handleChange}
                required
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'rgba(34,211,238,0.4)'}
                onBlur={e => {
                  e.target.style.borderColor = e.target.value ? 'rgba(34,211,238,0.2)' : '#1e1e1e'
                }}
              />
            </div>

            {/* Email */}
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#4a6a8a', marginBottom: '8px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Email <span style={{ color: '#22d3ee' }}>*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="asnaninishant2@gmail.com"
                value={form.email}
                onChange={handleChange}
                required
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'rgba(34,211,238,0.4)'}
                onBlur={e => {
                  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)
                  e.target.style.borderColor = e.target.value
                    ? valid ? 'rgba(34,211,238,0.2)' : 'rgba(248,113,113,0.5)'
                    : '#1e1e1e'
                }}
              />
            </div>

            {/* Message */}
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#4a6a8a', marginBottom: '8px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Message <span style={{ color: '#22d3ee' }}>*</span>
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                style={{ ...inputStyle, resize: 'none', minHeight: '140px' }}
                onFocus={e => e.target.style.borderColor = 'rgba(34,211,238,0.4)'}
                onBlur={e => {
                  e.target.style.borderColor = e.target.value ? 'rgba(34,211,238,0.2)' : '#1e1e1e'
                }}
              />
              <p style={{ fontSize: '11px', color: form.message.length > 10 ? '#22d3ee' : '#2d4f68', margin: '6px 0 0', textAlign: 'right', transition: 'color 0.2s' }}>
                {form.message.length} characters
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                padding: '14px 28px',
                borderRadius: '10px',
                background: status === 'sent' ? 'rgba(34,211,238,0.1)' : '#22d3ee',
                color: status === 'sent' ? '#22d3ee' : '#000000',
                fontWeight: 700,
                fontSize: '14px',
                border: status === 'sent' ? '1.5px solid rgba(34,211,238,0.3)' : '1.5px solid transparent',
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                fontFamily: "'Inter', sans-serif",
                opacity: status === 'sending' ? 0.6 : 1,
                letterSpacing: '0.03em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
              onMouseEnter={e => { if (status !== 'sending' && status !== 'sent') e.currentTarget.style.opacity = '0.85' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
            >
              {status === 'sending' && (
                <span style={{
                  width: '14px', height: '14px', borderRadius: '50%',
                  border: '2px solid rgba(0,0,0,0.3)',
                  borderTopColor: '#000',
                  display: 'inline-block',
                  animation: 'spin 0.7s linear infinite',
                }} />
              )}
              {status === 'sending' ? 'Sending...' : status === 'sent' ? '✓ Message Sent!' : 'Send Message →'}
            </button>

            {status === 'error' && (
              <div style={{
                padding: '12px 16px', borderRadius: '10px',
                background: 'rgba(248,113,113,0.08)',
                border: '1px solid rgba(248,113,113,0.2)',
                fontSize: '13px', color: '#f87171', textAlign: 'center',
              }}>
                Something went wrong. Try emailing directly.
              </div>
            )}

            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact