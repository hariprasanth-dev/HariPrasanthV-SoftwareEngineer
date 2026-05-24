import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { Locale } from '../types';
import en from '../locales/en.json';
import de from '../locales/de.json';
import ta from '../locales/ta.json';
import hi from '../locales/hi.json';

type Translations = typeof en;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => any;
}

const translations: Record<Locale, any> = { en, de, ta, hi };

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const SUPPORTED_LOCALES: Locale[] = ['en', 'de', 'ta', 'hi'];

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    try {
      const saved = localStorage.getItem('portfolio_locale');
      if (saved && SUPPORTED_LOCALES.includes(saved as Locale)) {
        return saved as Locale;
      }
    } catch (e) {
      console.error('Failed to read locale from localStorage', e);
    }
    return 'en';
  });

  const setLocale = (newLocale: Locale) => {
    try {
      localStorage.setItem('portfolio_locale', newLocale);
    } catch (e) {
      console.error('Failed to save locale to localStorage', e);
    }
    setLocaleState(newLocale);
  };

  const t = (path: string): any => {
    const keys = path.split('.');
    let result = translations[locale];
    
    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        return path; // Fallback to key name
      }
    }
    
    return result;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
};
