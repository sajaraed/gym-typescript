import React from 'react';
import blogImg1 from '../assets/images/mohamed-fareed-rbSNsoXk-3A-unsplash.jpg';
import blogImg2 from '../assets/images/thomas-yohei-BAlBUJb-SXQ-unsplash.jpg';
import blogImg3 from '../assets/images/risen-wang-20jX9b35r_M-unsplash.jpg';

export default function Blog({ t, lang }) {
  const blogs = [
    { 
      date: 'Aug 28, 2026', 
      title: lang === 'ar' ? 'تمرين الساعة الواحدة' : 'One-Hour Workout', 
      img: blogImg1 
    },
    { 
      date: 'Sep 05, 2026', 
      title: lang === 'ar' ? 'المزيد من الانضباط' : 'More Discipline', 
      img: blogImg2 
    },
    { 
      date: 'Sep 12, 2026', 
      title: lang === 'ar' ? 'عادات صحية مستدامة' : 'Healthy Habits', 
      img: blogImg3 
    }
  ];

  return (
    <section id="blog" className="py-20 bg-slate-50 dark:bg-[#060b13] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        
        {/* عنوان القسم */}
        <div className="flex justify-between items-end mb-12 px-4">
          <div>
            <span className="inline-block px-3 py-1 bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-600/20 rounded-full text-xs font-semibold tracking-widest uppercase mb-2">
              {t?.blog?.tag || "Blog posts"}
            </span>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              {t?.blog?.title || "Take Charge Of Your Life"}
            </h3>
          </div>
        </div>

        {/* شبكة المقالات: 3 أعمدة بجانب بعضها حتى على الشاشات الصغيرة */}
        <div className="grid grid-cols-3 gap-2 sm:gap-8">
          {blogs.map((b, i) => (
            <div 
              key={i} 
              className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-xl sm:rounded-3xl overflow-hidden shadow-sm sm:shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden h-24 sm:h-56">
                  <img 
                    src={b.img} 
                    alt={b.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60"></div>
                </div>
                
                <div className="p-2 sm:p-6 space-y-1 sm:space-y-3">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-[8px] sm:text-xs tracking-wider uppercase block">
                    {b.date}
                  </span>
                  <h4 className="text-[10px] sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
                    {b.title}
                  </h4>
                </div>
              </div>

              <div className="p-2 sm:p-6 pt-0 sm:pt-0">
                <a href="#blog" className="text-blue-600 dark:text-blue-400 font-bold text-[9px] sm:text-sm inline-flex items-center gap-1 hover:translate-x-1 transition-transform">
                  {t?.blog?.readMore || "Read More"} 
                  <i className={`fa-solid ${lang === 'ar' ? 'fa-arrow-left' : 'fa-arrow-right'} text-[8px] sm:text-xs`}></i>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}