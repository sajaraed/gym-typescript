import React, { useState, useEffect } from 'react';
import { translations } from './translations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Footer from './components/Footer';
import SkeletonLoader from './components/SkeletonLoader';

export default function App() {
  const [lang, setLang] = useState<'ar' | 'en'>(() => {
    return (localStorage.getItem('prowess_lang') as 'ar' | 'en') || 'en';
  });
  
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('prowess_dark') === 'true';
  });

  // حالة التحميل لعرض الـ Skeleton
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // محاكاة وقت التحميل الأولي بسلاسة
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('prowess_lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('prowess_dark', String(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const t = translations[lang];

  // عرض الـ Skeleton Loader أثناء التحميل
  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#060b13] transition-colors duration-300">
        <SkeletonLoader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#060b13] text-slate-800 dark:text-gray-100 transition-colors duration-300 font-['Poppins',sans-serif]">
      <Navbar lang={lang} setLang={setLang} darkMode={darkMode} setDarkMode={setDarkMode} t={t} />
      <Hero t={t} lang={lang} />
      <About t={t} />
      <Stats t={t} />
      <Skills t={t} />
      <Pricing t={t} lang={lang} />
      <Testimonials lang={lang} />
      <Blog t={t} lang={lang} />
      <Footer t={t} />
    </div>
  );
}