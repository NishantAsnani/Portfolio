import React from 'react'


const experiences = [
    {
      role: "Software Engineer L2",
      company: "Crest Infosystems",
      duration: "Jan 2024 - Jul 2025",
      description: [
        "Engineered internal ERP systems supporting 200+ employees using Node.js & React.",
        "Built a context-aware chatbot using AWS Bedrock to automate internal queries.",
        "Optimized database schemas to reduce latency and improve API performance."
      ],
      tech: ["Node.js", "AWS Bedrock", "React"]
    },
    {
      role: "Data Science Intern",
      company: "BISAG-N",
      duration: "Jul 2023 - Aug 2023",
      description: [
        "Analyzed Australian weather datasets to identify rainfall trends.",
        "Leveraged Pandas & NumPy for data cleaning and Matplotlib for visualization."
      ],
      tech: ["Python", "Pandas", "Matplotlib"]
    }
  ];
  
const Experience = () => {
  return (
    <section id="work" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Work <span className="text-violet-400">Experience</span>
          </h2>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                
                {/* Timeline Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:border-cyan-500 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-xl">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-900/50 p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all shadow-xl backdrop-blur-sm group-hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <h3 className="font-bold text-xl text-white">{exp.company}</h3>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">{exp.duration}</span>
                  </div>
                  <div className="text-violet-300 font-medium mb-3">{exp.role}</div>
                  <ul className="text-slate-400 text-sm space-y-2 mb-4 list-disc list-inside marker:text-cyan-500">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="text-xs text-slate-300 bg-white/5 px-2 py-1 rounded border border-white/5">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Experience