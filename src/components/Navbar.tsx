import React, { useState } from 'react';

interface NavbarProps {
  lang: 'ar' | 'en';
  setLang: (lang: 'ar' | 'en') => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  t: any;
}

export default function Navbar({ lang, setLang, darkMode, setDarkMode, t }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#060b13]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* الشعار */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-500 tracking-wider">
              PROWESS<span className="text-slate-900 dark:text-white">LIFT</span>
            </a>
          </div>

          {/* روابط القائمة للشاشات الكبيرة */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t.nav?.about || 'About'}</a>
            <a href="#skills" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t.nav?.skills || 'Features'}</a>
            <a href="#pricing" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t.nav?.pricing || 'Pricing'}</a>
            <a href="#testimonials" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t.nav?.testimonials || 'Testimonials'}</a>
            <a href="#blog" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t.nav?.blog || 'Blog'}</a>
          </div>

          {/* الأزرار المساعدة (اللغة، الثيم، القائمة) */}
          <div className="flex items-center gap-3">
            
            {/* زر تغيير اللغة */}
            <button 
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="px-3 py-1.5 text-xs sm:text-sm font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-600 transition-all"
            >
              {lang === 'ar' ? 'English' : 'عربي'}
            </button>

            {/* زر تبديل الثيم الداكن */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-yellow-400 border border-slate-200 dark:border-slate-700 transition-all hover:scale-105"
              aria-label="Toggle Theme"
            >
              <i className={`fa-solid ${darkMode ? 'fa-sun' : 'fa-moon'} text-sm sm:text-base`}></i>
            </button>

            {/* زر القائمة للموبايل */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-base`}></i>
            </button>
          </div>

        </div>
      </div>

      {/* القائمة المندمجة للموبايل */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-semibold text-slate-700 dark:text-slate-200">{t.nav?.about || 'About'}</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-semibold text-slate-700 dark:text-slate-200">{t.nav?.skills || 'Features'}</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-semibold text-slate-700 dark:text-slate-200">{t.nav?.pricing || 'Pricing'}</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-semibold text-slate-700 dark:text-slate-200">{t.nav?.testimonials || 'Testimonials'}</a>
          <a href="#blog" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-semibold text-slate-700 dark:text-slate-200">{t.nav?.blog || 'Blog'}</a>
        </div>
      )}
    </nav>
  );
}