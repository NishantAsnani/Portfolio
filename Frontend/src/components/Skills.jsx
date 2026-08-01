import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── Inline white-fill SVG icons for skills needing dark-mode visibility ── */

const AwsIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.374 6.18 6.18 0 0 1-.248-.47c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.567.032-.863.104a6.39 6.39 0 0 0-.862.272 2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.024c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.288a.596.596 0 0 1 .216-.16 4.5 4.5 0 0 1 .958-.343A4.668 4.668 0 0 1 4.5 5.6c.894 0 1.549.203 1.971.608.415.405.626 1.02.626 1.844v2.428l-.334-.444zm-3.243.887c.263 0 .534-.048.822-.144.287-.096.543-.272.75-.518a1.24 1.24 0 0 0 .264-.527c.048-.192.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.295.83.295l.024.024zm6.415 1.028a.478.478 0 0 1-.303-.096c-.064-.048-.12-.152-.168-.32l-1.876-6.175a1.393 1.393 0 0 1-.08-.335c0-.128.064-.2.191-.2h.783c.16 0 .272.024.327.08.064.048.112.152.16.32l1.342 5.284 1.245-5.284c.04-.176.088-.28.152-.32a.553.553 0 0 1 .335-.08h.638c.16 0 .272.024.335.08.064.048.12.152.152.32l1.261 5.348 1.381-5.348c.048-.176.104-.28.16-.32.063-.048.175-.08.327-.08h.743c.128 0 .2.064.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.063.215l-1.924 6.175c-.048.176-.104.272-.168.32a.512.512 0 0 1-.303.096h-.687c-.16 0-.271-.024-.335-.08-.063-.055-.119-.151-.151-.327l-1.238-5.148-1.23 5.14c-.04.176-.088.28-.152.327-.063.056-.183.08-.343.08l-.695.008.007-.001zm10.252.264c-.415 0-.83-.048-1.229-.152-.399-.096-.71-.2-.918-.32-.128-.072-.216-.152-.248-.224a.567.567 0 0 1-.048-.224v-.407c0-.168.064-.248.183-.248a.46.46 0 0 1 .144.024c.048.016.12.048.2.08.271.12.567.216.878.28.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.567c-.144-.152-.415-.288-.807-.416l-1.157-.36c-.583-.183-1.014-.455-1.277-.815a1.902 1.902 0 0 1-.4-1.149c0-.33.073-.623.216-.878.144-.255.335-.48.575-.655.24-.184.511-.32.83-.415.32-.096.655-.136 1.006-.136.176 0 .36.008.535.032.183.024.35.056.518.088.16.04.311.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.063.256-.183.256a.837.837 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.312c-.455 0-.815.072-1.062.224-.248.152-.375.383-.375.694 0 .224.08.416.248.575.168.16.48.32.926.472l1.133.36c.574.183.99.44 1.237.766.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.335.511-.583.703-.248.2-.543.343-.894.455-.36.12-.742.176-1.15.176z" />
    <path d="M21.408 16.586c-2.615 1.933-6.405 2.962-9.67 2.962-4.572 0-8.688-1.69-11.803-4.505-.245-.221-.026-.523.268-.351 3.362 1.955 7.52 3.135 11.815 3.135 2.898 0 6.084-.6 9.017-1.844.443-.191.815.288.373.603z" />
    <path d="M22.473 15.378c-.334-.427-2.206-.204-3.049-.103-.256.032-.295-.192-.065-.351 1.493-1.05 3.942-.746 4.228-.395.288.359-.08 2.833-1.477 4.014-.215.183-.42.088-.325-.152.314-.79 1.022-2.586.688-3.013z" />
  </svg>
);

const ExpressIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.511 4.86 3.556-4.86a1.466 1.466 0 0 1 1.802-.667L14.662 12l5.338 6.588zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.14-.666zM1.16 10.088h9.665c-.058-2.734-1.842-4.743-4.272-4.8a4.86 4.86 0 0 0-5.393 4.8z" />
  </svg>
);

const GithubIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
  </svg>
);

const NginxIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm5.577 17.124c-.333.586-.946.95-1.614.95-.403 0-.784-.124-1.105-.36L10.5 14.118v3.507c0 .764-.632 1.375-1.413 1.375-.78 0-1.412-.611-1.412-1.375V6.375C7.675 5.611 8.307 5 9.087 5c.781 0 1.413.611 1.413 1.375v3.507l4.358-3.596c.321-.236.702-.36 1.105-.36.668 0 1.281.364 1.614.95.218.384.265.827.131 1.247-.133.416-.411.75-.781 1.052L13.397 12l3.53 2.825c.37.302.648.636.781 1.052.134.42.087.863-.131 1.247z" />
  </svg>
);

const TailwindIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
  </svg>
);

const RestApiIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 12h16" />
    <path d="M4 6h16" />
    <path d="M4 18h16" />
    <circle cx="7" cy="6" r="1" fill="currentColor" stroke="none" />
    <circle cx="11" cy="12" r="1" fill="currentColor" stroke="none" />
    <circle cx="15" cy="18" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const DockerIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.186.186 0 0 0-.187.186v1.887c0 .103.084.185.187.185zm-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.186.186 0 0 0-.187.185v1.888c0 .102.084.185.187.185zm0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.187.187 0 0 0-.187.185v1.887c0 .102.084.186.187.186zm-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.186.186 0 0 0-.185.185v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186zm5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.187.187 0 0 0-.187.186v1.887c0 .103.084.185.187.185zm-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.186v1.887c0 .103.083.185.185.185zm-2.964 0h2.119a.186.186 0 0 0 .185-.185V9.006a.186.186 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.186v1.887c0 .103.084.185.186.185zm-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.186v1.887c0 .103.082.185.185.185zM23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.4 2.66-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.72 3.13 1.131 5.33 1.131.826 0 1.653-.075 2.47-.225a10.18 10.18 0 0 0 3.142-1.19 8.618 8.618 0 0 0 2.166-1.9c1.044-1.2 1.666-2.543 2.113-3.735h.183c1.16 0 1.873-.463 2.264-.858.26-.248.465-.552.6-.89l.084-.264-.11-.072z" />
  </svg>
);

const LinuxIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 0 0-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587.006 1.22-.043 1.838-.207.919-.243 1.839-.752 2.331-1.748a4.06 4.06 0 0 0 1.07-.283c.768-.314 1.37-.879 1.55-1.692.36-.042.675-.174.925-.4.249-.227.422-.545.422-.959 0-.404-.186-.781-.465-1.085a4.17 4.17 0 0 0-.455-.39c-.278-.208-.55-.394-.716-.6-.087-.114-.14-.253-.157-.414.017-.24-.003-.516-.066-.78a4.65 4.65 0 0 0-.349-.98 3.46 3.46 0 0 0-1.3-1.435 2.07 2.07 0 0 0-1.1-.344c-.243-.006-.458.055-.608.149-.083.044-.14.094-.172.135a7.61 7.61 0 0 0-.5-.26 4.95 4.95 0 0 0-.62-.25 6.33 6.33 0 0 1-.252-1.424c-.13-1.11-.146-2.392-.41-3.585-.168-.684-.455-1.374-.938-1.938-.471-.563-1.15-.94-1.987-1.078A3.54 3.54 0 0 0 12.504 0z" />
  </svg>
);

const GitIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.661 2.661a1.838 1.838 0 1 1-1.103 1.033l-2.481-2.481v6.529a1.838 1.838 0 1 1-1.513-.131V8.779a1.838 1.838 0 0 1-.998-2.41L7.63 3.64.452 10.818a1.549 1.549 0 0 0 0 2.187l10.48 10.48a1.55 1.55 0 0 0 2.186 0l10.428-10.37a1.549 1.549 0 0 0 0-2.186z" />
  </svg>
);

/* ── Map of icon keys to either devicon URLs or inline React components ──
 *  Icons that render poorly on dark backgrounds get inline white SVGs.
 *  Everything else uses the devicon CDN. */

const inlineSvgIcons = {
  amazonwebservices: AwsIcon,
  express: ExpressIcon,
  github: GithubIcon,
  nginx: NginxIcon,
  tailwindcss: TailwindIcon,
  restapi: RestApiIcon,
  docker: DockerIcon,
  git: GitIcon,
};

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
      { name: "REST APIs", note: "Architecture", icon: "restapi" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", note: "UI library", icon: "react" },
      { name: "Redux", note: "State management", icon: "redux" },
      { name: "Tailwind CSS", note: "Styling", icon: "tailwindcss" },
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

const SkillTag = ({ name, note, icon }) => {
  const [hovered, setHovered] = useState(false);
  const InlineIcon = icon ? inlineSvgIcons[icon] : null;
  const useDevicon = icon && !InlineIcon;

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative cursor-default"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="px-3 py-2 md:px-4 md:py-2.5 rounded-md text-[12px] md:text-[13px] font-medium transition-all duration-200 border inline-flex items-center gap-2"
        style={{
          background: hovered ? "rgba(255,122,24,0.06)" : "#121212",
          borderColor: hovered ? "rgba(255,122,24,0.25)" : "#1e1e1e",
          color: hovered ? "#FF7A18" : "#F5F5F5",
        }}
      >
        {/* Inline SVG icon (white-fill, dark-mode safe) */}
        {InlineIcon && (
          <InlineIcon
            size={14}
            className="transition-opacity duration-200"
            style={{ opacity: hovered ? 1 : 0.5 }}
          />
        )}

        {/* Devicon CDN icon (colorful originals that work on dark) */}
        {useDevicon && (
          <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
            alt=""
            className="w-3.5 h-3.5 md:w-4 md:h-4"
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
    <section id="skills" className="py-16 md:py-36 px-6 md:px-10">
      <div ref={ref} className="max-w-[1200px] mx-auto">
        {/* Split layout: title left (sticky), skills right */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-24">
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
          <div className="flex flex-col gap-8 md:gap-10">
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
                <div className="flex items-center gap-4 mb-3 md:mb-4">
                  <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-text-dim">
                    {group.label}
                  </span>
                  <div className="flex-1 h-px bg-border" />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 md:gap-2">
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