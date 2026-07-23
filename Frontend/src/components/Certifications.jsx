import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-5f5c6928-c62b-4020-9f1f-58124763e3e3/",
  },
  {
    title: "Google Cloud Skills",
    issuer: "Google Cloud",
    link: "https://www.cloudskillsboost.google/public_profiles/9b7d27ce-d52e-4421-8b38-9b3f1fa1b7fc",
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-28 md:py-36 px-6 md:px-10">
      <div ref={ref} className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-medium tracking-[0.2em] uppercase text-accent mb-4"
          >
            Verified
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-4xl md:text-5xl tracking-[-0.03em] text-text-primary"
          >
            CREDENTIALS
          </motion.h2>
        </div>

        {/* Horizontal list */}
        <div className="flex flex-col md:flex-row gap-0">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex items-center justify-between py-6 border-t border-border last:border-b flex-1 transition-colors duration-200 hover:bg-secondary/50 px-4 -mx-4 md:px-6 md:-mx-0 md:rounded-lg md:border md:border-border md:mx-0 md:px-8 md:py-8"
            >
              <div>
                <h3 className="font-heading font-semibold text-[16px] md:text-[18px] text-text-primary group-hover:text-accent transition-colors duration-200 mb-1">
                  {cert.title}
                </h3>
                <p className="text-[13px] text-text-muted">{cert.issuer}</p>
              </div>

              <motion.div
                className="flex-shrink-0 ml-6"
                whileHover={{ x: 3, y: -3 }}
              >
                <ExternalLink
                  size={16}
                  className="text-text-dim group-hover:text-accent transition-colors duration-200"
                />
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;