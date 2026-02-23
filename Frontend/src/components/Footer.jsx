import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8 text-center text-slate-500 text-sm bg-slate-950 border-t border-slate-900">
        <p>© {new Date().getFullYear()} Nishant Asnani. Built with React & Tailwind.</p>
      </footer>
  )
}

export default Footer