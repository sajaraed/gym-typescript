
import React from 'react';
import aboutImg from '../assets/images/anastase-maragos-FP7cfYPPUKM-unsplash.jpg';

interface AboutProps {
  t?: any;
}

export default function About({ t }: AboutProps) {
  return (
    <section id="about" className="py-12 sm:py-20 bg-white dark:bg-[#060b13] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* شبكة متجاورة: النصوص والصورة بجانب بعضهما حتى على الجوال */}
        <div className="grid grid-cols-12 gap-3 sm:gap-8 items-center">
          
          {/* النصوص (تأخذ 7 أعمدة) */}
          <div className="col-span-7 space-y-2 sm:space-y-4 text-start">
            <span className="text-blue-600 dark:text-blue-400 font-bold text-[10px] sm:text-sm tracking-widest uppercase bg-blue-500/10 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-blue-500/20 inline-block">
              {t?.about?.tag || "Who We Are"}
            </span>
            
            <h2 className="text-xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              {t?.about?.title || "Push Your Limits Forward"}
            </h2>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-lg line-clamp-3 sm:line-clamp-none">
              {t?.about?.desc1 || "We provide top-tier fitness programs designed specifically to help you achieve your goals."}
            </p>
            
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-[11px] sm:text-sm hidden sm:block">
              {t?.about?.desc2 || "Our expert team is always here to support and guide you every step of the way."}
            </p>
          </div>

          {/* الصورة (تأخذ 5 أعمدة بجانب النصوص بنفس القياسات) */}
          <div className="col-span-5">
            <div className="rounded-xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-900/10 p-1.5 sm:p-2">
              <img 
                src={aboutImg} 
                alt="Gym Facility" 
                className="w-full h-44 sm:h-72 object-cover rounded-lg sm:rounded-2xl"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
