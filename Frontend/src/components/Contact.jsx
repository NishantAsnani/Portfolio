import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, FileDown, ArrowUpRight, Send, Loader2 } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./Icons";

const links = [
  {
    label: "LinkedIn",
    value: "nishant-asnani",
    href: "https://www.linkedin.com/in/nishant-asnani-aa6093208/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "NishantAsnani",
    href: "https://github.com/NishantAsnani",
    icon: Github,
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: "/Nishant_Asnani_Resume.pdf",
    icon: FileDown,
    download: true,
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio: New message from ${form.name}`,
          from_name: "Portfolio Contact",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(null), 4000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-40 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Large heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-20"
        >
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Connect
          </p>
          <h2
            className="font-heading font-bold tracking-[-0.03em] text-text-primary mb-6"
            style={{ fontSize: "clamp(40px, 8vw, 80px)" }}
          >
            LET'S TALK
          </h2>
          <p className="text-text-muted text-[15px] md:text-[17px] leading-relaxed max-w-[420px]">
            Have an opportunity, a project idea, or just want to connect?
            Send me a message or reach out directly.
          </p>
        </motion.div>

        {/* Two column: form left, links right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-20">
          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {/* Name */}
            <div>
              <label htmlFor="contact-name" className="text-[11px] font-medium tracking-[0.12em] uppercase text-text-dim block mb-2">
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 bg-secondary border border-border rounded-md text-[14px] text-text-primary font-body placeholder:text-text-dim/50 outline-none transition-colors duration-200 focus:border-accent/40"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className="text-[11px] font-medium tracking-[0.12em] uppercase text-text-dim block mb-2">
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-secondary border border-border rounded-md text-[14px] text-text-primary font-body placeholder:text-text-dim/50 outline-none transition-colors duration-200 focus:border-accent/40"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className="text-[11px] font-medium tracking-[0.12em] uppercase text-text-dim block mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-4 py-3 bg-secondary border border-border rounded-md text-[14px] text-text-primary font-body placeholder:text-text-dim/50 outline-none transition-colors duration-200 focus:border-accent/40 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-primary font-semibold text-[14px] rounded-md transition-all duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto self-start"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={15} className="animate-spin" aria-hidden="true" />
                  Sending...
                </>
              ) : status === "sent" ? (
                "Message Sent ✓"
              ) : (
                <>
                  <Send size={14} aria-hidden="true" />
                  Send Message
                </>
              )}
            </button>

            {status === "error" && (
              <p className="text-[13px] text-red-400">
                Something went wrong. Try emailing directly at{" "}
                <a href="mailto:asnaninishant2@gmail.com" className="text-accent hover:underline">
                  asnaninishant2@gmail.com
                </a>
              </p>
            )}
          </motion.form>

          {/* Links + info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            {/* Direct email */}
            <a
              href="mailto:asnaninishant2@gmail.com"
              className="group flex items-center justify-between py-6 border-t border-b border-border transition-colors duration-200 hover:bg-secondary/30 px-2 -mx-2 rounded"
            >
              <div className="flex items-center gap-5">
                <Mail
                  size={18}
                  className="text-text-dim group-hover:text-accent transition-colors duration-200"
                  aria-hidden="true"
                />
                <div>
                  <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-text-dim block mb-0.5">
                    Email
                  </span>
                  <span className="text-[15px] md:text-[17px] font-medium text-text-primary group-hover:text-accent transition-colors duration-200">
                    asnaninishant2@gmail.com
                  </span>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-text-dim group-hover:text-accent transition-colors" aria-hidden="true" />
            </a>

            {/* Other links */}
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.download ? undefined : "_blank"}
                rel={link.download ? undefined : "noopener noreferrer"}
                download={link.download || undefined}
                className="group flex items-center justify-between py-6 border-b border-border transition-colors duration-200 hover:bg-secondary/30 px-2 -mx-2 rounded"
              >
                <div className="flex items-center gap-5">
                  <link.icon
                    size={18}
                    className="text-text-dim group-hover:text-accent transition-colors duration-200"
                  />
                  <div>
                    <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-text-dim block mb-0.5">
                      {link.label}
                    </span>
                    <span className="text-[15px] md:text-[17px] font-medium text-text-primary group-hover:text-accent transition-colors duration-200">
                      {link.value}
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-text-dim group-hover:text-accent transition-colors" aria-hidden="true" />
              </a>
            ))}

            {/* Availability badge */}
            <div className="mt-8 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
              <span className="text-[13px] font-medium text-text-muted">
                Available for new opportunities
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;