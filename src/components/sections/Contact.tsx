import React, { useState, useTransition } from "react";
import { useTranslation } from "../../context/i18nContext";
import { SectionHeading } from "../ui/SectionHeading";
import { usePortfolioData } from "../../hooks/usePortfolioData";
import { Mail, Linkedin, Github, Phone, Send } from "lucide-react";
import { motion } from "motion/react";

const Contact = () => {
  const { t } = useTranslation();
  const { PERSONAL_INFO } = usePortfolioData();
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{
    success?: boolean;
    error?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    startTransition(async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          setStatus({ success: true });
          (e.target as HTMLFormElement).reset();
        } else {
          setStatus({ error: t("contact.form.error") });
        }
      } catch (err) {
        setStatus({ error: t("contact.form.connection_error") });
      }
    });
  };

  const contactLinks = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: PERSONAL_INFO.phone,
      href: `tel:${PERSONAL_INFO.phone.replace(/\s/g, "")}`,
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "v-hari-prasanth",
      href: `https://${PERSONAL_INFO.linkedin}`,
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      value: "hariprasanth-dev",
      href: `https://${PERSONAL_INFO.github}`,
    },
  ];

  return (
    <section id="contact" className="section-container">
      <SectionHeading subtitle={t("contact.subtitle")}>
        {t("contact.title")}
      </SectionHeading>

      <div className="grid lg:grid-cols-2 gap-20 items-start">
        {/* Left: Contact Info */}
        <div className="space-y-12">
          <div className="space-y-8">
            {contactLinks?.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 group p-4 border border-border-subtle bg-bg-surface hover:border-accent-primary transition-all overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-1 h-full bg-accent-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-3 bg-bg-elevated text-accent-primary border border-border-subtle group-hover:border-accent-primary transition-colors">
                  {link.icon}
                </div>
                <div>
                  <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-1">
                    {link.label}
                  </p>
                  <p className="text-text-primary font-mono group-hover:text-accent-primary transition-colors">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="p-8 border-l-2 border-accent-primary bg-bg-elevated">
            <p className="text-text-secondary font-sans leading-relaxed italic text-sm">
              {t("contact.german_commitment")}
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-bg-surface border border-border-subtle p-8 md:p-12 relative"
        >
          <div className="absolute top-0 left-0 w-24 h-1 bg-accent-primary" />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-[10px] font-mono text-text-muted uppercase tracking-widest"
              >
                {t("contact.form.name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-bg-primary border border-border-subtle px-4 py-3 text-text-primary font-mono focus:border-accent-primary focus:outline-none transition-colors"
                placeholder={t("contact.form.placeholder_name")}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-[10px] font-mono text-text-muted uppercase tracking-widest"
              >
                {t("contact.form.email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-bg-primary border border-border-subtle px-4 py-3 text-text-primary font-mono focus:border-accent-primary focus:outline-none transition-colors"
                placeholder={t("contact.form.placeholder_email")}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-[10px] font-mono text-text-muted uppercase tracking-widest"
              >
                {t("contact.form.message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-bg-primary border border-border-subtle px-4 py-3 text-text-primary font-mono focus:border-accent-primary focus:outline-none transition-colors resize-none"
                placeholder={t("contact.form.placeholder_message")}
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full btn-primary flex items-center justify-center gap-2 py-4"
            >
              {isPending ? (
                t("contact.form.sending")
              ) : (
                <>
                  <Send size={16} />
                  {t("contact.form.send")}
                </>
              )}
            </button>

            {status?.success && (
              <p className="text-accent-primary font-mono text-xs uppercase tracking-widest text-center mt-4">
                {t("contact.form.success")}
              </p>
            )}
            {status?.error && (
              <p className="text-error-primary font-mono text-xs uppercase tracking-widest text-center mt-4">
                {status.error}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
