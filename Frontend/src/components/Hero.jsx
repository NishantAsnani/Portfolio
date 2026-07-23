import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const gridY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Magnetic button effect
  const [magnet, setMagnet] = useState({ x: 0, y: 0 });
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMagnet({ x: x * 0.15, y: y * 0.15 });
  };

  const resetMagnet = () => setMagnet({ x: 0, y: 0 });

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Animated grid background */}
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 pointer-events-none"
      >
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-grid"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        {/* Subtle accent glow */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,122,24,0.04) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-[1200px] mx-auto w-full px-6 md:px-10 pt-32 md:pt-0"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-2 mb-10"
        >
          <div className="w-[6px] h-[6px] rounded-full bg-accent animate-pulse-slow" />
          <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-text-muted">
            Available for opportunities
          </span>
        </motion.div>

        {/* Role label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-accent text-[14px] font-medium tracking-[0.1em] uppercase mb-5"
        >
          Backend Engineer
        </motion.p>

        {/* Main title — Name */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-bold tracking-[-0.04em] leading-[0.9] text-text-primary"
            style={{ fontSize: "clamp(52px, 11vw, 130px)" }}
          >
            NISHANT
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-bold tracking-[-0.04em] leading-[0.9]"
            style={{
              fontSize: "clamp(52px, 11vw, 130px)",
              WebkitTextStroke: "1.5px #F5F5F5",
              WebkitTextFillColor: "transparent",
            }}
          >
            ASNANI
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-text-muted text-[15px] md:text-[17px] leading-relaxed max-w-[460px] mb-12"
        >
          Building scalable backend systems,
          <br />
          cloud-native applications,
          <br />
          and AI-powered developer tools.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center gap-4 flex-wrap"
        >
          <a
            ref={btnRef}
            href="#projects"
            onMouseMove={handleMouseMove}
            onMouseLeave={resetMagnet}
            className="magnetic-btn px-7 py-3 bg-accent text-primary font-semibold text-[14px] rounded-md hover:opacity-90 transition-opacity"
            style={{
              transform: `translate(${magnet.x}px, ${magnet.y}px)`,
            }}
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="magnetic-btn px-7 py-3 border border-border text-text-primary font-medium text-[14px] rounded-md hover:border-accent hover:text-accent transition-all duration-200"
          >
            Contact
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-text-dim">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-text-dim" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;