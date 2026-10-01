import React from 'react';
import client1 from '../assets/images/pexels-bymuratisikofficial-39635357.jpg';
import client2 from '../assets/images/pexels-miguel-rodriguez-leon-279978609-13568425.jpg';
import client3 from '../assets/images/pexels-thnhphng1520-694556.jpg';

interface TestimonialsProps {
  t?: any;
}

export default function Testimonials({ t }: TestimonialsProps) {
  return (
    <section className="py-10 sm:py-20 bg-slate-50 dark:bg-[#060b13] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center">
        
        {/* عنوان القسم */}
        <div className="mb-6 sm:mb-10">
          <p className="text-blue-600 dark:text-blue-400 font-bold tracking-widest text-[10px] sm:text-xs uppercase mb-1">
            {t?.testimonials?.subtitle || "TESTIMONIALS"}
          </p>
          <h2 className="text-xl sm:text-4xl font-black text-slate-900 dark:text-white">
            {t?.testimonials?.title || "What Our Clients Say"}
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-6 text-start">
          
          {/* البطاقة الأولى */}
          <div className="p-2 sm:p-6 bg-white dark:bg-slate-900/80 rounded-xl sm:rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-0.5 text-amber-400 mb-1.5 text-[9px] sm:text-sm">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-[10px] sm:text-sm mb-3 leading-tight sm:leading-relaxed line-clamp-4 sm:line-clamp-none">
                "This platform completely transformed my fitness journey. The workouts and structured plans are exceptional!"
              </p>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-3 pt-2 border-t border-slate-100 dark:border-slate-800/60">
              <img 
                src={client1} 
                alt="Ahmed Mohamed" 
                className="w-7 h-7 sm:w-10 sm:h-10 rounded-full object-cover shrink-0 border border-blue-500/30"
              />
              <div className="overflow-hidden">
                <h4 className="font-bold text-slate-900 dark:text-white text-[10px] sm:text-sm truncate">Ahmed M.</h4>
                <span className="text-[8px] sm:text-xs text-slate-500 truncate block">Member</span>
              </div>
            </div>
          </div>

          {/* البطاقة الثانية */}
          <div className="p-2 sm:p-6 bg-white dark:bg-slate-900/80 rounded-xl sm:rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-0.5 text-amber-400 mb-1.5 text-[9px] sm:text-sm">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-[10px] sm:text-sm mb-3 leading-tight sm:leading-relaxed line-clamp-4 sm:line-clamp-none">
                "Amazing interface, fast performance, and very clear guides. Highly recommended for everyone."
              </p>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-3 pt-2 border-t border-slate-100 dark:border-slate-800/60">
              <img 
                src={client2} 
                alt="Amer R." 
                className="w-7 h-7 sm:w-10 sm:h-10 rounded-full object-cover shrink-0 border border-blue-500/30"
              />
              <div className="overflow-hidden">
                <h4 className="font-bold text-slate-900 dark:text-white text-[10px] sm:text-sm truncate">Sarah R.</h4>
                <span className="text-[8px] sm:text-xs text-slate-500 truncate block">Enthusiast</span>
              </div>
            </div>
          </div>

          {/* البطاقة الثالثة */}
          <div className="p-2 sm:p-6 bg-white dark:bg-slate-900/80 rounded-xl sm:rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-0.5 text-amber-400 mb-1.5 text-[9px] sm:text-sm">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-[10px] sm:text-sm mb-3 leading-tight sm:leading-relaxed line-clamp-4 sm:line-clamp-none">
                "The best experience I've had. Clean design, dark mode works perfectly, and support is great."
              </p>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-3 pt-2 border-t border-slate-100 dark:border-slate-800/60">
              <img 
                src={client3} 
                alt="sarah K." 
                className="w-7 h-7 sm:w-10 sm:h-10 rounded-full object-cover shrink-0 border border-blue-500/30"
              />
              <div className="overflow-hidden">
                <h4 className="font-bold text-slate-900 dark:text-white text-[10px] sm:text-sm truncate">Mahmoud K.</h4>
                <span className="text-[8px] sm:text-xs text-slate-500 truncate block">Trainer</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
