import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    label: "Languages",
    items: [
      { name: "JavaScript", note: "Primary", icon: "javascript" },
      { name: "Python", note: "Data & scripting", icon: "python" },
      { name: "C++", note: "DSA & competitive", icon: "cplusplus" },
      { name: "C", note: "Fundamentals", icon: "c" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", note: "Runtime", icon: "nodejs" },
      { name: "Express.js", note: "Framework", icon: "express" },
      { name: "REST APIs", note: "Architecture", icon: null },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", note: "UI library", icon: "react" },
      { name: "Redux", note: "State management", icon: "redux" },
      { name: "Tailwind CSS", note: "Styling", icon: null },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "MongoDB", note: "NoSQL", icon: "mongodb" },
      { name: "DynamoDB", note: "AWS NoSQL", icon: "dynamodb" },
      { name: "MySQL", note: "Relational", icon: "mysql" },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "AWS", note: "Cloud platform", icon: "amazonwebservices" },
      { name: "Docker", note: "Containerization", icon: "docker" },
      { name: "Nginx", note: "Reverse proxy", icon: "nginx" },
      { name: "Linux", note: "Systems", icon: "linux" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", note: "Version control", icon: "git" },
      { name: "GitHub", note: "Collaboration", icon: "github" },
    ],
  },
];

const darkIcons = new Set(["express", "github", "nginx", "amazonwebservices"]);

const SkillTag = ({ name, note, icon }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative cursor-default"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="px-4 py-2.5 rounded-md text-[13px] font-medium transition-all duration-200 border inline-flex items-center gap-2"
        style={{
          background: hovered ? "rgba(255,122,24,0.06)" : "#121212",
          borderColor: hovered ? "rgba(255,122,24,0.25)" : "#1e1e1e",
          color: hovered ? "#FF7A18" : "#F5F5F5",
        }}
      >
        {icon && (
          <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
            alt=""
            className={`w-4 h-4 ${darkIcons.has(icon) ? "devicon-dark" : ""}`}
            style={{ opacity: hovered ? 1 : 0.5, transition: "opacity 0.2s" }}
            loading="lazy"
          />
        )}
        {name}
      </div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 4, scale: 0.95 }}
        animate={
          hovered
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 4, scale: 0.95 }
        }
        transition={{ duration: 0.15 }}
        className="absolute left-1/2 -translate-x-1/2 -top-9 px-3 py-1 bg-secondary border border-border rounded text-[11px] text-text-muted whitespace-nowrap pointer-events-none z-10"
      >
        {note}
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-28 md:py-36 px-6 md:px-10">
      <div ref={ref} className="max-w-[1200px] mx-auto">
        {/* Split layout: title left (sticky), skills right */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 lg:gap-24">
          {/* Left — sticky title */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-medium tracking-[0.2em] uppercase text-accent mb-4"
            >
              Technical
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] text-text-primary mb-4"
            >
              STACK
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-muted text-[14px] leading-relaxed"
            >
              Technologies and tools I use to build scalable systems.
            </motion.p>
          </div>

          {/* Right — skill groups */}
          <div className="flex flex-col gap-10">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: gi * 0.06,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Group label */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-text-dim">
                    {group.label}
                  </span>
                  <div className="flex-1 h-px bg-border" />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <SkillTag
                      key={item.name}
                      name={item.name}
                      note={item.note}
                      icon={item.icon}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;