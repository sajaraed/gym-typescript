import React from 'react';

interface PricingProps {
  t?: any;
  lang: 'ar' | 'en';
}

export default function Pricing({ lang }: PricingProps) {
  return (
    <section id="pricing" className="py-20 bg-slate-50 dark:bg-[#060b13] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        
        {/* عنوان القسم */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2 px-4">
          <span className="inline-block px-3 py-1 bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-600/20 rounded-full text-xs font-semibold tracking-widest uppercase">
            {lang === 'ar' ? 'الأسعار' : 'Pricing'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
            {lang === 'ar' ? 'اختر خطتك المناسبة' : 'Choose Your Plan'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base">
            {lang === 'ar' ? 'خطط مرنة تناسب كل هدف وميزانية.' : 'Flexible plans for every goal and budget.'}
          </p>
        </div>

        {/* شبكة الباقات: 3 أعمدة بجانب بعضها حتى على الجوال ولكن بحجم أصغر */}
        <div className="grid grid-cols-3 gap-2 sm:gap-8 items-stretch">
          
          {/* خطة Basic */}
          <div className="bg-white dark:bg-slate-900 p-3 sm:p-8 rounded-xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm sm:shadow-md transition-all">
            <div className="space-y-2 sm:space-y-6">
              <h3 className="text-xs sm:text-xl font-bold text-slate-900 dark:text-white truncate">
                {lang === 'ar' ? 'الباقة الأساسية' : 'Basic'}
              </h3>
              <div className="text-lg sm:text-4xl font-black text-slate-900 dark:text-white">
                $25<span className="text-[10px] sm:text-sm font-normal text-slate-500">{lang === 'ar' ? '/ش' : '/mo'}</span>
              </div>
              <ul className="space-y-1.5 sm:space-y-3 text-[10px] sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-1 sm:gap-2">
                  <i className="fa-solid fa-check text-blue-600 dark:text-blue-400 text-[9px] sm:text-xs"></i> 
                  <span className="truncate">{lang === 'ar' ? 'دخول الجيم' : 'Gym Access'}</span>
                </li>
                <li className="flex items-center gap-1 sm:gap-2">
                  <i className="fa-solid fa-check text-blue-600 dark:text-blue-400 text-[9px] sm:text-xs"></i> 
                  <span className="truncate">{lang === 'ar' ? 'أجهزة أساسية' : 'Basic Equip'}</span>
                </li>
                <li className="flex items-center gap-1 sm:gap-2">
                  <i className="fa-solid fa-check text-blue-600 dark:text-blue-400 text-[9px] sm:text-xs"></i> 
                  <span className="truncate">{lang === 'ar' ? 'الخزائن' : 'Locker'}</span>
                </li>
              </ul>
            </div>
            <div className="pt-3 sm:pt-8">
              <button className="w-full py-1.5 sm:py-3 text-[10px] sm:text-base rounded-lg sm:rounded-xl border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-bold transition-all">
                {lang === 'ar' ? 'اختر' : 'Get'}
              </button>
            </div>
          </div>

          {/* خطة Premium المميزة (Most Popular) */}
          <div className="bg-white dark:bg-slate-900 p-3 sm:p-8 rounded-xl sm:rounded-3xl border-2 border-blue-600 dark:border-blue-500 flex flex-col justify-between shadow-md sm:shadow-2xl relative transform sm:lg:-translate-y-2 transition-all">
            <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-bold text-[8px] sm:text-xs uppercase px-2 sm:px-4 py-0.5 sm:py-1 rounded-full shadow-md whitespace-nowrap">
              {lang === 'ar' ? 'الأكثر طلباً' : 'Popular'}
            </span>
            <div className="space-y-2 sm:space-y-6 pt-1 sm:pt-2">
              <h3 className="text-xs sm:text-xl font-bold text-slate-900 dark:text-white truncate">
                {lang === 'ar' ? 'المميزة' : 'Premium'}
              </h3>
              <div className="text-lg sm:text-4xl font-black text-slate-900 dark:text-white">
                $40<span className="text-[10px] sm:text-sm font-normal text-slate-500">{lang === 'ar' ? '/ش' : '/mo'}</span>
              </div>
              <ul className="space-y-1.5 sm:space-y-3 text-[10px] sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-1 sm:gap-2">
                  <i className="fa-solid fa-check text-blue-600 dark:text-blue-400 text-[9px] sm:text-xs"></i> 
                  <span className="truncate">{lang === 'ar' ? 'جيم غير محدود' : 'Gym Access'}</span>
                </li>
                <li className="flex items-center gap-1 sm:gap-2">
                  <i className="fa-solid fa-check text-blue-600 dark:text-blue-400 text-[9px] sm:text-xs"></i> 
                  <span className="truncate">{lang === 'ar' ? 'كل الحصص' : 'All Classes'}</span>
                </li>
                <li className="flex items-center gap-1 sm:gap-2">
                  <i className="fa-solid fa-check text-blue-600 dark:text-blue-400 text-[9px] sm:text-xs"></i> 
                  <span className="truncate">{lang === 'ar' ? 'تدريب شخصي' : 'Personal Tr'}</span>
                </li>
              </ul>
            </div>
            <div className="pt-3 sm:pt-8">
              <button className="w-full py-1.5 sm:py-3 text-[10px] sm:text-base rounded-lg sm:rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-md sm:shadow-lg transition-all">
                {lang === 'ar' ? 'اختر' : 'Get'}
              </button>
            </div>
          </div>

          {/* خطة Pro */}
          <div className="bg-white dark:bg-slate-900 p-3 sm:p-8 rounded-xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm sm:shadow-md transition-all">
            <div className="space-y-2 sm:space-y-6">
              <h3 className="text-xs sm:text-xl font-bold text-slate-900 dark:text-white truncate">
                {lang === 'ar' ? 'المحترفين' : 'Pro'}
              </h3>
              <div className="text-lg sm:text-4xl font-black text-slate-900 dark:text-white">
                $60<span className="text-[10px] sm:text-sm font-normal text-slate-500">{lang === 'ar' ? '/ش' : '/mo'}</span>
              </div>
              <ul className="space-y-1.5 sm:space-y-3 text-[10px] sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-1 sm:gap-2">
                  <i className="fa-solid fa-check text-blue-600 dark:text-blue-400 text-[9px] sm:text-xs"></i> 
                  <span className="truncate">{lang === 'ar' ? 'دخول الجيم' : 'Gym Access'}</span>
                </li>
                <li className="flex items-center gap-1 sm:gap-2">
                  <i className="fa-solid fa-check text-blue-600 dark:text-blue-400 text-[9px] sm:text-xs"></i> 
                  <span className="truncate">{lang === 'ar' ? 'جميع الحصص' : 'All Classes'}</span>
                </li>
                <li className="flex items-center gap-1 sm:gap-2">
                  <i className="fa-solid fa-check text-blue-600 dark:text-blue-400 text-[9px] sm:text-xs"></i> 
                  <span className="truncate">{lang === 'ar' ? 'خطة تغذية' : 'Nutrition'}</span>
                </li>
              </ul>
            </div>
            <div className="pt-3 sm:pt-8">
              <button className="w-full py-1.5 sm:py-3 text-[10px] sm:text-base rounded-lg sm:rounded-xl border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-bold transition-all">
                {lang === 'ar' ? 'اختر' : 'Get'}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
