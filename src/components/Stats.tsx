import React from 'react';

interface StatsProps {
  t?: any;
}

export default function Stats({ t }: StatsProps) {
  return (
    <section className="py-10 sm:py-16 bg-white dark:bg-[#060b13] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-center">
        
        {/* البطاقة الأولى */}
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900/80 rounded-xl sm:rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
          <p className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 mb-1 sm:mb-2">
            35k+
          </p>
          <h4 className="text-slate-600 dark:text-slate-400 font-semibold text-xs sm:text-sm">
            {t?.stats?.t1 || "Trained Bodies"}
          </h4>
        </div>

        {/* البطاقة الثانية */}
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900/80 rounded-xl sm:rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
          <p className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 mb-1 sm:mb-2">
            500+
          </p>
          <h4 className="text-slate-600 dark:text-slate-400 font-semibold text-xs sm:text-sm">
            {t?.stats?.t2 || "Happy Customers"}
          </h4>
        </div>

        {/* البطاقة الثالثة */}
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900/80 rounded-xl sm:rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
          <p className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 mb-1 sm:mb-2">
            120+
          </p>
          <h4 className="text-slate-600 dark:text-slate-400 font-semibold text-xs sm:text-sm">
            {t?.stats?.t3 || "Expert Trainers"}
          </h4>
        </div>

        {/* البطاقة الرابعة */}
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900/80 rounded-xl sm:rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
          <p className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 mb-1 sm:mb-2">
            26+
          </p>
          <h4 className="text-slate-600 dark:text-slate-400 font-semibold text-xs sm:text-sm">
            {t?.stats?.t4 || "Awards Won"}
          </h4>
        </div>

      </div>
    </section>
  );
}
