import React, { useState, useEffect } from "react";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone, 
  FaCommentDots, 
  FaDownload, 
  FaSun, 
  FaMoon, 
  FaExternalLinkAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaJava
} from "react-icons/fa";
import { 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  SiC 
} from "react-icons/si";

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    document.body.className = isDark ? 'dark' : 'light';
  }, [isDark]);

  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "from-orange-400 to-red-500" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "from-blue-400 to-blue-600" },
    { name: "JavaScript", icon: <FaJs />, color: "from-yellow-400 to-yellow-600" },
    { name: "React", icon: <FaReact />, color: "from-cyan-400 to-blue-500" },
    { name: "Node.js", icon: <FaNodeJs />, color: "from-green-400 to-green-600" },
    { name: "MongoDB", icon: <SiMongodb />, color: "from-green-500 to-green-700" },
    { name: "Express", icon: <SiExpress />, color: "from-gray-400 to-gray-600" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "from-teal-400 to-blue-500" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "from-purple-400 to-purple-600" },
    { name: "C", icon: <SiC />, color: "from-blue-500 to-indigo-600" },
    { name: "Java", icon: <FaJava />, color: "from-red-500 to-orange-500" }
  ];

  const certifications = [
    {
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      image: "🎓",
      link: "https://www.udemy.com/certificate/UC-5f5c6928-c62b-4020-9f1f-58124763e3e3/"
    },
    {
      title: "Google Cloud Skills",
      issuer: "Google",
      image: "☁️",
      link: "https://www.cloudskillsboost.google/public_profiles/9b7d27ce-d52e-4421-8b38-9b3f1fa1b7fc"
    }
  ];

  const experiences = [
    {
      title: "IGT Team Member",
      company: "AIESEC Surat",
      description: "Conducted meetings with international AIESEC firms for exchange of interns.",
      icon: "🌍"
    },
    {
      title: "Volunteer",
      company: "Innovate4India NGO",
      description: "Conducted door-to-door surveys and created awareness regarding dry and wet waste.",
      icon: "🌱"
    },
    {
      title: "Event Coordinator",
      company: "College Tech-fest",
      description: "Hosted a web based tech event in college tech-fest named Updates.",
      icon: "🎯"
    },
    {
      title: "First Place Winner",
      company: "Mock Interview Event",
      description: "Stood first in a mock interview based event in college tech-fest named Updates.",
      icon: "🏆"
    }
  ];

  const projects = [
    {
      title: "Facebook Clone",
      description: "A full-stack social media application with user authentication and real-time features.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/NishantAsnani/FACEBOOK_CLONE",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Personal Portfolio",
      description: "Responsive portfolio website showcasing my skills and projects.",
      tech: ["React", "Tailwind CSS"],
      link: "https://github.com/NishantAsnani/Portfolio",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "YelpCamp",
      description: "A camping review website with user authentication and CRUD operations.",
      tech: ["Node.js", "Express", "MongoDB"],
      link: "https://github.com/Colt/YelpCamp",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Rentofy",
      description: "A rental e-commerce platform with advanced search and booking features.",
      tech: ["React", "Node.js", "Express"],
      link: "https://github.com/NishantAsnani/Rentofy",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-300 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md ${isDark ? 'bg-gray-900/80' : 'bg-white/80'} border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex space-x-8">
              <a href="#home" className="font-bold text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Nishant Asnani
              </a>
            </div>
            
            <div className="hidden md:flex space-x-6">
              {['Skills', 'Certifications', 'Experience', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className={`hover:text-purple-400 transition-colors duration-200 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <a 
                href="/Nishant Asnani_Resume.pdf" 
                download
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
              >
                <FaDownload className="w-4 h-4" />
                <span className="hidden sm:inline">Resume</span>
              </a>
              
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-200`}
              >
                {isDark ? <FaSun className="w-5 h-5 text-yellow-400" /> : <FaMoon className="w-5 h-5 text-gray-600" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                    Nishant Asnani
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-purple-400 mb-4">
                  Web Enthusiast
                </p>
                <p className={`text-lg max-w-2xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Hardworking and focused pre-final year computer engineering student. 
                  Interested in MERN Stack development, Computer Networks, Operating Systems and 
                  C Programming. Looking for experience in the domain of web development.
                </p>
              </div>
              
              <div className="flex justify-center lg:justify-start space-x-6">
                <a 
                  href="https://www.github.com/NishantAsnani"
                  className={`p-3 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110`}
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/nishant-asnani-aa6093208/"
                  className={`p-3 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110`}
                >
                  <FaLinkedin className="w-6 h-6 text-blue-500" />
                </a>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 p-1 animate-pulse">
                  <div className={`w-full h-full rounded-full ${isDark ? 'bg-gray-900' : 'bg-white'} p-4`}>
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-6xl">
                      👨‍💻
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className={`p-6 rounded-2xl ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-white text-2xl mb-4 mx-auto group-hover:rotate-12 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <h3 className="text-center font-semibold text-sm">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`py-16 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl ${isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-gray-50'} shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group`}
              >
                <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">{cert.image}</div>
                <h3 className="text-2xl font-bold mb-2 text-center">{cert.title}</h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6 text-center text-lg`}>{cert.issuer}</p>
                <div className="text-center">
                  <a 
                    href={cert.link}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105"
                  >
                    <span>View Certificate</span>
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group`}
              >
                <div className="text-4xl mb-4 transition-transform duration-300">{exp.icon}</div>
                <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                <p className="text-purple-400 font-semibold mb-3 text-lg">{exp.company}</p>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-16 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl ${isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-gray-50'} shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group overflow-hidden relative`}
              >
                <div className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-6 group-hover:h-3 transition-all duration-300`}></div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300">{project.title}</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${isDark ? 'bg-gray-700 text-purple-300' : 'bg-purple-100 text-purple-700'} hover:scale-105 transition-transform duration-200`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 group-hover:translate-x-2"
                >
                  <span>View Project</span>
                  <FaExternalLinkAlt className="w-4 h-4" />
                </a>
                
                <div className={`absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r ${project.gradient} rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Talk
            </span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group md:col-span-2 lg:col-span-1`}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaPhone className="w-6 h-6 text-white" />
                  </div>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-2`}>Call me at:</p>
                  <p className="text-lg font-semibold text-green-400">(+91) 7043680624</p>
                </div>
              </div>
              
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group md:col-span-2 lg:col-span-1`}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="w-6 h-6 text-white" />
                  </div>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-2`}>Email me at:</p>
                  <p className="text-lg font-semibold text-blue-400 break-all">asnaninishant2@gmail.com</p>
                </div>
              </div>
              
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group md:col-span-2 lg:col-span-1`}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaCommentDots className="w-6 h-6 text-white" />
                  </div>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-2`}>Message me on:</p>
                  <a 
                    href="https://www.linkedin.com/in/nishant-asnani-aa6093208/"
                    className="text-lg font-semibold text-purple-400 hover:text-purple-300 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span>LinkedIn</span>
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-900' : 'bg-white'} border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-lg`}>
            © 2025 Nishant Asnani. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.github.com/NishantAsnani" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/nishant-asnani-aa6093208/" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;