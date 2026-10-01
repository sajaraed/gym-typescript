import React from 'react';
import heroBg from "../assets/images/fitness-4006937_1280.jpg";
import heroModel from "../assets/images/full-body-portrait-athletic-shirtless-male-doing-biceps-workouts-with-dumbbells-gym-club.jpg";

interface HeroProps {
  t?: any;
  lang?: 'ar' | 'en';
}

export default function Hero({ t, lang }: HeroProps) {
  return (
    <section 
      id="home" 
      className="py-12 sm:py-24 bg-cover bg-center relative overflow-hidden flex items-center"
      style={{ backgroundImage: `linear-gradient(rgba(6, 11, 19, 0.9), rgba(6, 11, 19, 0.9)), url(${heroBg})` }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 grid grid-cols-12 gap-3 sm:gap-8 items-center w-full relative z-10 text-white">
        
        {/* النصوص والترحيب */}
        <div className="col-span-7 space-y-3 sm:space-y-6 text-start">
          <p className="text-blue-400 font-bold tracking-widest text-[10px] sm:text-sm uppercase">
            {t?.hero?.subtitle || "BE STRONG, BE FIT"}
          </p>
          
          <h1 className="text-xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
            {t?.hero?.title1 || "Shape Your Body"} <br />
            <span className="text-blue-400">{t?.hero?.title2 || "Unlock Your Potential"}</span>
          </h1>
          
          <p className="text-slate-300 text-xs sm:text-base lg:text-lg max-w-xl leading-relaxed line-clamp-3 sm:line-clamp-none">
            {t?.hero?.desc || "Transform your physique, build discipline, and push your absolute limits with professional training."}
          </p>
          
          {/* الأزرار بجانب بعضها على الجوال والشاشات الكبيرة */}
          <div className="flex flex-row items-center gap-2 sm:gap-4 pt-1">
            <a href="#skills" className="px-3 sm:px-8 py-2 sm:py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-[10px] sm:text-sm rounded-lg sm:rounded-xl shadow-lg shadow-blue-600/30 transition-all text-center whitespace-nowrap">
              {t?.hero?.getStarted || "Get Started Now"}
            </a>
            <a href="#about" className="px-3 sm:px-8 py-2 sm:py-3.5 bg-slate-800/80 hover:bg-slate-800 text-white border border-slate-700 font-bold text-[10px] sm:text-sm rounded-lg sm:rounded-xl backdrop-blur-sm transition-all text-center whitespace-nowrap">
              {t?.hero?.explore || "Explore Programs"}
            </a>
          </div>

          {/* المميزات الصغيرة */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4 pt-3 sm:pt-6 border-t border-slate-800/80">
            <div className="flex items-center gap-1.5 sm:gap-3">
              <i className="fa-solid fa-dumbbell text-blue-400 text-xs sm:text-xl shrink-0"></i>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-300 leading-tight">Modern Equipment</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-3">
              <i className="fa-solid fa-users text-blue-400 text-xs sm:text-xl shrink-0"></i>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-300 leading-tight">Professional Trainers</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-3">
              <i className="fa-solid fa-heart-pulse text-blue-400 text-xs sm:text-xl shrink-0"></i>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-300 leading-tight">Healthy Community</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-3">
              <i className="fa-solid fa-bolt text-blue-400 text-xs sm:text-xl shrink-0"></i>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-300 leading-tight">Flexible Plans</span>
            </div>
          </div>
        </div>

        {/* الصورة الجانبية */}
        <div className="col-span-5 block">
          <div className="relative rounded-xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-800 p-1.5 sm:p-2 bg-slate-900/60 backdrop-blur-md">
            <img 
              src={heroModel} 
              alt="Gym Workout" 
              className="w-full h-44 sm:h-[420px] object-cover rounded-lg sm:rounded-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
