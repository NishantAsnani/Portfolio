
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import { useEffect,useState } from "react";


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

  

  

  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ['Work', 'Projects', 'Certifications', 'Education'];



// Filter projects based on active tag


  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      
      {/* 🌟 Navigation */}
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection}
        isScrolled={isScrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navItems={navItems}
        isMobile={window.innerWidth < 768}
      />
      


  
 

      {/* 🚀 Hero Section */}
      <Hero />
      

      {/* 💼 Experience Section */}
      <Experience />

      {/* 🧪 Projects Section */}
      <Projects />
      

      {/* 📜 Certifications Section */}
      <Certifications />
      

      {/* 🎓 Education Section */}
      <Education/>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;