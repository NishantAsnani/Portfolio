import React, { useState, useEffect } from "react";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaDownload, 
  FaExternalLinkAlt
} from "react-icons/fa";
import { 
  SiGooglecloud,
  SiUdemy
} from "react-icons/si";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for Navbar styling and Active Link highlighting
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // ScrollSpy Logic
      const sections = ['home', 'work', 'projects', 'certifications', 'education'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust detection zone for smoother highlighting
          if (rect.top >= -150 && rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

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

  const projects = [
    {
      title: "Dynamite-CLI",
      category: "DevTool / NPM Package",
      description: "A lightweight command-line tool designed to bring version control and consistency to DynamoDB migrations. Handles migration execution, rollbacks, and seeding.",
      tech: ["Node.js", "DynamoDB", "AWS SDK"],
      link: "https://www.npmjs.com/package/dynamite-cli", 
      github: "https://github.com/NishantAsnani/dynamite-cli",
      color: "border-orange-500 shadow-orange-500/20"
    },
    {
      title: "BE-Ignite",
      category: "DevTool / NPM Package",
      description: "A lightweight command-line tool designed to give boilerplate code and clean folder structure for backend projects using Node.js, Express, and MongoDB.",
      tech: ["Node.js", "Express.js", "MongoDB"],
      link: "https://www.npmjs.com/package/be-ignite", 
      github: "https://github.com/NishantAsnani/be-ignite",
      color: "border-orange-500 shadow-orange-500/20"
    },
    {
      title: "S.A.I.L",
      category: "AI Productivity",
      description: "Speech Analysis Intelligence and Logging. An AI-powered meeting assistant that generates transcripts and Minutes of Meeting (MoM), synced with Google Calendar & Jira.",
      tech: ["React", "Nodejs", "Express.js","MongoDB","AssemblyAI"],
      // link: "https://github.com/NishantAsnani",
      github: "https://github.com/NishantAsnani/SAIL_be",
      color: "border-cyan-500 shadow-cyan-500/20"
    },
    {
      title: "Sentiment Analyzer",
      category: "Cloud",
      description: "An AI-driven sentiment analysis tool that classifies text data into positive, negative, or neutral sentiments using NLP techniques and machine learning models.",
      tech: ["Node.js", "AWS", "React"],
      // link: "https://github.com/NishantAsnani",
      github: "https://github.com/NishantAsnani/sentiment-analysis-be",
      color: "border-purple-500 shadow-purple-500/20"
    },
    {
      title: "Rentofy",
      category: "E-Commerce",
      description: "A full-featured rental e-commerce platform  user authentication, and secure booking features.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      // link: "https://github.com/NishantAsnani/Rentofy",
      github: "https://github.com/NishantAsnani/Rentofy",
      color: "border-pink-500 shadow-pink-500/20"
    }
  ];

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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      
      {/* 🌟 Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg shadow-cyan-500/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              onClick={() => scrollToSection('home')}
              className="font-bold text-2xl tracking-tighter hover:cursor-pointer group z-50"
            >
              <span className="text-white">Nishant</span>
              <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">.dev</span>
            </div>
            
            {/* Nav Links - Always Visible */}
            <div className="flex items-center space-x-1">
              {['Work', 'Projects', 'Certifications', 'Education'].map((item) => {
                const id = item.toLowerCase();
                return (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(id)}
                    className={`px-3 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                      activeSection === id 
                      ? 'text-cyan-400 bg-cyan-400/10' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            {/* Resume Button */}
            <div className="hidden sm:block">
              <a 
                href="/Nishant_Asnani_Resume.pdf" 
                download
                className="flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-5 py-2 rounded-full font-medium text-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-0.5 border border-white/10"
              >
                <FaDownload className="w-3 h-3" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 🚀 Hero Section */}
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

      {/* 💼 Experience Section */}
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

      {/* 🧪 Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Highlighting my journey in open-source and full-stack development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`group relative p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-all duration-300 ${project.color} hover:border-opacity-100 border-opacity-0 hover:-translate-y-1 overflow-hidden`}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div>
                    <span className="text-xs font-bold tracking-wider text-cyan-500 uppercase">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors p-2 hover:bg-white/10 rounded-full">
                        <FaExternalLinkAlt size={18} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-slate-400 mb-6 leading-relaxed relative z-10">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50 relative z-10">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-950/50 text-cyan-300 border border-cyan-900/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📜 Certifications Section */}
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

      {/* 🎓 Education Section */}
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

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm bg-slate-950 border-t border-slate-900">
        <p>© {new Date().getFullYear()} Nishant Asnani. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
};

export default Portfolio;