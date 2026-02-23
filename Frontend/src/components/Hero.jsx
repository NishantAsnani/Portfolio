import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center z-10">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm font-medium tracking-wide">
            🚀 Full Stack Engineer
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Scalable Systems</span> <br />
            & AI-Powered Tools
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Hi, I'm <span className="text-white font-semibold">Nishant Asnani</span>. Designing cloud-native architectures and crafting seamless user experiences with modern tech.
          </p>
          
          <div className="flex justify-center items-center gap-8">
            <a href="https://github.com/NishantAsnani" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/nishant-asnani-aa6093208/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 hover:scale-110 transition-all">
              <FaLinkedin size={30} />
            </a>
            <a href="mailto:asnaninishant2@gmail.com" className="text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all">
              <FaEnvelope size={30} />
            </a>
          </div>
        </div>
      </section>
  )
}

export default Hero