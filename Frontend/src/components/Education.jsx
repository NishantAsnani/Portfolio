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
    <section id="education" className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="p-6 rounded-xl border border-slate-800 bg-slate-900 hover:border-cyan-500/30 transition-all">
                <div className="text-4xl mb-4 opacity-80">🎓</div>
                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-cyan-400 font-medium mb-1">{edu.school}</p>
                <div className="flex justify-between items-center text-sm text-slate-400 mt-4">
                  <span>{edu.year}</span>
                  <span className="bg-white/10 px-2 py-1 rounded text-white">{edu.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Education