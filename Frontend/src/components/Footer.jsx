import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./Icons";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between flex-wrap gap-4">
        {/* Logo */}
        <span className="font-heading font-bold text-[15px] tracking-tight text-text-primary">
          N<span className="text-accent">.</span>
        </span>

        {/* Copyright */}
        <p className="text-[12px] text-text-dim text-center">
          © {new Date().getFullYear()} Nishant Asnani
        </p>

        {/* Social */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/NishantAsnani"
            target="_blank"
            rel="noreferrer"
            className="text-text-dim hover:text-text-primary transition-colors duration-200"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/nishant-asnani-aa6093208/"
            target="_blank"
            rel="noreferrer"
            className="text-text-dim hover:text-accent transition-colors duration-200"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;