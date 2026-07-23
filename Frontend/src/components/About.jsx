import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    year: "2020",
    title: "Started Computer Engineering",
    detail: "B.E. in Computer Engineering at Sarvajanik College (SCET)",
    type: "education",
  },
  {
    year: "2023",
    title: "Data Science Intern — BISAG-N",
    detail:
      "Analyzed Australian weather datasets, built visualization pipelines with Pandas, NumPy & Matplotlib.",
    type: "work",
  },
  {
    year: "2024",
    title: "Graduated — CPI 8.99",
    detail: "Completed B.E. in Computer Engineering with distinction.",
    type: "education",
  },
  {
    year: "2024",
    title: "Software Engineer L2 — Crest Infosystems",
    detail:
      "Engineered internal ERP systems for 200+ employees. Built context-aware chatbots with AWS Bedrock. Optimized database schemas for faster APIs.",
    type: "work",
  },
  {
    year: "2025",
    title: "M.Tech in Software Systems",
    detail:
      "Pursuing M.Tech at DA-IICT (Dhirubhai Ambani University) — CPI 8.42.",
    type: "education",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 md:py-36 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header — asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 md:gap-20 mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-medium tracking-[0.2em] uppercase text-accent mb-4"
            >
              About
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] text-text-primary"
            >
              JOURNEY
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted text-[15px] leading-relaxed self-end max-w-[480px]"
          >
            From building full-stack applications in college to engineering
            enterprise systems and AI-powered tools — a timeline of milestones
            that shaped my craft.
          </motion.p>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[20px] md:left-[60px] top-0 bottom-0 w-px bg-border origin-top"
          />

          <div className="flex flex-col gap-0">
            {milestones.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative flex items-start gap-6 md:gap-10 pl-0 py-8 group"
              >
                {/* Dot */}
                <div className="relative flex-shrink-0 w-[40px] md:w-[120px] flex items-center">
                  <div className="absolute left-[16px] md:left-[56px] w-[9px] h-[9px] rounded-full border-2 border-border bg-primary group-hover:border-accent transition-colors duration-300 z-10" />
                  <span className="hidden md:block text-[12px] font-medium tracking-wider text-text-dim font-heading">
                    {item.year}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <span className="md:hidden text-[11px] font-medium tracking-wider text-text-dim font-heading mb-1 block">
                    {item.year}
                  </span>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-heading font-semibold text-[16px] md:text-[18px] text-text-primary group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    {item.type === "work" && (
                      <span className="text-[10px] font-medium tracking-wider uppercase text-accent bg-accent/10 px-2 py-0.5 rounded">
                        Work
                      </span>
                    )}
                  </div>
                  <p className="text-text-muted text-[14px] leading-relaxed max-w-[500px]">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
