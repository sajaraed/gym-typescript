import React from 'react';

interface FooterProps {
  t?: any;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-slate-900 dark:bg-[#04080e] text-slate-400 pt-10 pb-6 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-3">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{t?.brandName || "Prowess Lift"}</h3>
        <p className="text-xs sm:text-sm max-w-md mx-auto text-slate-400">
          {t?.footer?.desc || "Your ultimate destination for building strength, fitness, and unbreakable discipline."}
        </p>
        <p className="text-[11px] sm:text-xs text-slate-500 pt-4 border-t border-slate-800/60">
          © 2026 {t?.brandName || "Prowess Lift"}. {t?.footer?.rights || "All rights reserved."}
        </p>
      </div>
    </footer>
  );
}