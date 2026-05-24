import React, { useState, useEffect } from "react";
import { useTranslation } from "../../context/i18nContext";
import { LanguageToggle } from "../ui/LanguageToggle";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-bg-primary/90 backdrop-blur-md py-4 border-border-subtle"
          : "bg-transparent py-8 border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="font-mono text-xl font-bold tracking-tighter text-text-primary flex items-center gap-2"
          >
            HARI PRASANTH V
            <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
          </a>
          <span className="hidden lg:inline text-[10px] font-mono text-accent-primary border border-accent-primary/30 px-2 py-0.5 rounded-full uppercase tracking-tighter">
            {t("nav.available")}
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks?.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-text-secondary hover:text-accent-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text-primary p-2 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-bg-surface border-b border-border-subtle overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks?.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-mono text-sm uppercase tracking-widest text-text-primary py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
