import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, FlaskConical } from "lucide-react";

/* Icons that appear dark/black and need white SVG replacements on dark backgrounds */
const darkIcons = new Set(["express", "github", "nginx", "amazonwebservices", "pandas", "matplotlib"]);

const experiences = [
  {
    role: "Software Engineer L2",
    company: "Crest Infosystems",
    duration: "Jan 2024 — Jul 2025",
    icon: Building2,
    impact: [
      "Architected and developed a full-scale internal ERP system using Node.js and React, streamlining HR, project tracking, and resource management workflows for 200+ employees across the organization",
      "Designed and shipped a context-aware AI chatbot powered by AWS Bedrock that automated responses to internal IT and HR queries — significantly reducing support ticket volume and freeing up operational bandwidth",
      "Identified and resolved performance bottlenecks by redesigning database schemas and optimizing query patterns, leading to measurable improvements in API response times across critical business endpoints",
    ],
    tech: [
      { name: "Node.js", icon: "nodejs" },
      { name: "React", icon: "react" },
      { name: "AWS", icon: "amazonwebservices" },
      { name: "DynamoDB", icon: "dynamodb" },
    ],
  },
  {
    role: "Data Science Intern",
    company: "BISAG-N",
    duration: "Jul 2023 — Aug 2023",
    icon: FlaskConical,
    impact: [
      "Conducted exploratory data analysis on large-scale Australian weather datasets to uncover rainfall prediction trends, applying statistical techniques and feature engineering to improve model inputs",
      "Built end-to-end data processing pipelines using Pandas and NumPy, and created interactive Matplotlib visualizations that were presented to stakeholders for decision-making",
    ],
    tech: [
      { name: "Python", icon: "python" },
      { name: "Pandas", icon: "pandas" },
      { name: "Matplotlib", icon: "matplotlib" },
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-16 md:py-36 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 md:gap-20 mb-12 md:mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-medium tracking-[0.2em] uppercase text-accent mb-4"
            >
              Career
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] text-text-primary"
            >
              EXPERIENCE
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted text-[15px] leading-relaxed self-end max-w-[480px]"
          >
            Impact-driven engineering across enterprise systems, AI tooling, and cloud infrastructure.
          </motion.p>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border origin-top"
          />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            const ExpIcon = exp.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-0 mb-10 md:mb-16 last:mb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot on line */}
                <div className="absolute left-[-4px] md:left-1/2 md:-translate-x-1/2 top-2 w-[9px] h-[9px] rounded-full border-2 border-border bg-primary z-10" />

                {/* Content card */}
                <div
                  className={`ml-6 md:ml-0 md:w-[calc(50%-40px)] ${
                    isLeft ? "md:pr-0" : "md:pl-0"
                  }`}
                  style={{
                    ...(isLeft
                      ? { marginRight: "auto" }
                      : { marginLeft: "auto" }),
                  }}
                >
                  <div className="pl-4 md:pl-0">
                    {/* Duration */}
                    <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-text-dim block mb-3 font-heading">
                      {exp.duration}
                    </span>

                    {/* Company with icon */}
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-7 h-7 rounded-md bg-accent/10 border border-accent/15 flex items-center justify-center flex-shrink-0">
                        <ExpIcon size={14} className="text-accent" aria-hidden="true" />
                      </div>
                      <h3 className="font-heading font-bold text-[22px] md:text-[26px] tracking-[-0.02em] text-text-primary">
                        {exp.company}
                      </h3>
                    </div>

                    {/* Role */}
                    <p className="text-accent text-[14px] font-medium mb-5">
                      {exp.role}
                    </p>

                    {/* Impact bullets */}
                    <ul className="space-y-3 mb-6">
                      {exp.impact.map((point, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-[13.5px] text-text-muted leading-[1.65]"
                        >
                          <span className="w-1 h-1 rounded-full bg-accent mt-[9px] flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack with devicons */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t.name}
                          className="px-3 py-1 text-[11px] font-medium text-text-dim bg-secondary border border-border rounded inline-flex items-center gap-1.5"
                        >
                          {t.icon && (
                            <img
                              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${t.icon}/${t.icon}-original.svg`}
                              alt=""
                              className={`w-3 h-3 opacity-60 ${darkIcons.has(t.icon) ? "devicon-dark" : ""}`}
                              loading="lazy"
                            />
                          )}
                          {t.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;