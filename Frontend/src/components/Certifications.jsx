import React from 'react'
import { SiGooglecloud, SiUdemy } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
const certifications = [
    {
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      icon: <SiUdemy />,
      link: "https://www.udemy.com/certificate/UC-5f5c6928-c62b-4020-9f1f-58124763e3e3/",
      color: "text-purple-400"
    },
    {
      title: "Google Cloud Skills",
      issuer: "Google",
      icon: <SiGooglecloud />,
      link: "https://www.cloudskillsboost.google/public_profiles/9b7d27ce-d52e-4421-8b38-9b3f1fa1b7fc",
      color: "text-blue-400"
    }
  ];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-start gap-5 p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-cyan-500/30 transition-all hover:-translate-y-1 group">
                <div className={`text-5xl ${cert.color} group-hover:scale-110 transition-transform`}>
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight mb-1">{cert.title}</h3>
                  <p className="text-slate-400 text-sm mb-3">{cert.issuer}</p>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center text-xs font-bold text-cyan-500 hover:text-cyan-400 uppercase tracking-wider"
                  >
                    View Credential <FaExternalLinkAlt className="ml-2 w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Certifications