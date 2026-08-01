import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";

/* ── Issuer logo URLs (original colored brand logos) ── */
const issuerLogos = {
  Udemy: "https://cdn.simpleicons.org/udemy/A435F0",
  "Google Cloud": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  AWS: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/aws/icon.svg",
};

const certifications = [
  {
    title: "AWS AI Practitioner",
    issuer: "AWS",
    link: "https://www.credly.com/badges/1e20a28d-408d-4b88-b6e8-77b5ee4dc254",
  },
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
    <section id="certifications" className="py-16 md:py-36 px-6 md:px-10">
      <div ref={ref} className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-14">
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

        {/* Certification cards */}
        <div className="flex flex-col md:flex-row gap-4">
          {certifications.map((cert, i) => {
            const logoUrl = issuerLogos[cert.issuer];

            return (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex items-center gap-4 md:gap-5 py-5 md:py-8 flex-1 transition-all duration-200 hover:bg-secondary/50 px-4 md:px-8 rounded-lg border border-border hover:border-accent/25"
              >
                {/* Issuer logo */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent/10 border border-accent/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors duration-200">
                  {logoUrl ? (
                    <img
                      src={logoUrl}
                      alt=""
                      className="w-5 h-5 md:w-6 md:h-6"
                      loading="lazy"
                      aria-hidden="true"
                    />
                  ) : (
                    <span className="text-text-muted text-sm" aria-hidden="true">✦</span>
                  )}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-semibold text-[15px] md:text-[18px] text-text-primary group-hover:text-accent transition-colors duration-200 mb-0.5 truncate">
                    {cert.title}
                  </h3>
                  <p className="text-[12px] md:text-[13px] text-text-muted">
                    {cert.issuer}
                  </p>
                </div>

                {/* Arrow */}
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ x: 3, y: -3 }}
                >
                  <ExternalLink
                    size={16}
                    className="text-text-dim group-hover:text-accent transition-colors duration-200"
                    aria-hidden="true"
                  />
                </motion.div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;