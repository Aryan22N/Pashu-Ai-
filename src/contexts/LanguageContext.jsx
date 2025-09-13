import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'hi' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const translations = {
    en: {
      home: 'Home',
      identifyBreed: 'Identify Breed',
      browseBreeds: 'Browse Breeds',
      contact: 'Contact',
      menu: 'Menu',
      close: 'Close',
      language: 'हिं',
    },
    hi: {
      home: 'होम',
      identifyBreed: 'नस्ल पहचानें',
      browseBreeds: 'नस्लें देखें',
      contact: 'संपर्क',
      menu: 'मेनू',
      close: 'बंद करें',
      language: 'EN',
    }
  };

  const t = (key) => translations?.[language]?.[key] || key;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};