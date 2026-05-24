import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from '../../context/i18nContext';
import { Locale } from '../../types';
import { Globe, ChevronDown } from 'lucide-react';

export const LanguageToggle = () => {
  const { locale, setLocale } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Locale; label: string; name: string }[] = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'de', label: 'DE', name: 'Deutsch' },
    { code: 'ta', label: 'TA', name: 'Tamil' },
    { code: 'hi', label: 'HI', name: 'Hindi' },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 border border-border-subtle bg-bg-surface hover:bg-bg-elevated text-text-primary text-xs font-mono transition-colors rounded-sm focus:outline-none focus:ring-1 focus:ring-accent-primary cursor-pointer"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Globe size={14} className="text-text-secondary" />
        <span>{currentLanguage.label}</span>
        <ChevronDown size={12} className={`text-text-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-32 border border-border-subtle bg-bg-surface shadow-lg rounded-sm py-1 z-50 animate-in fade-in slide-in-from-top-1 duration-100">
          {languages?.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLocale(lang.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-xs font-mono transition-colors flex justify-between items-center cursor-pointer ${
                locale === lang.code
                  ? 'bg-accent-primary text-black font-bold'
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated'
              }`}
            >
              <span>{lang.name}</span>
              <span className="opacity-60 text-[10px]">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
