import React from "react";
import skillImgFile from "../assets/images/anastase-maragos-FP7cfYPPUKM-unsplash.jpg";

interface SkillsProps {
  t?: any;
}

interface SkillItem {
  name: string;
  percentage: string;
}

export default function Skills({ t }: SkillsProps) {
  const skillsData: SkillItem[] = [
    { name: t?.skills?.immune || "Immune", percentage: '80%' },
    { name: t?.skills?.heart || "Heart & Energy", percentage: '90%' },
    { name: t?.skills?.joints || "Joints & Bones", percentage: '80%' },
    { name: t?.skills?.skin || "Skin", percentage: '85%' },
  ];

  return (
    <section id="skills" className="py-12 sm:py-20 bg-white dark:bg-[#060b13] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* شبكة متجاورة: النصوص والصورة بجانب بعضهما، مع محاذاة عمودية متساوية */}
        <div className="grid grid-cols-12 gap-3 sm:gap-8 items-stretch">
          
          {/* قسم النصوص وأشرطة التقدم (تأخذ 7 أعمدة) */}
          <div className="col-span-7 space-y-3 sm:space-y-4 text-start flex flex-col justify-between">
            <div className="space-y-1.5 sm:space-y-2">
              <span className="inline-block px-2.5 sm:px-4 py-0.5 sm:py-1.5 bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-600/20 rounded-full text-[10px] sm:text-sm font-semibold tracking-widest uppercase">
                {t?.skills?.tag || "OUR SKILLS"}
              </span>
              
              <h3 className="text-base sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {t?.skills?.titleQuote || "Once you can control your mind, you can control your body."}
              </h3>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base leading-relaxed">
              {t?.skills?.desc || "Build complete health including immunity, heart energy, and joint strength."}
            </p>
            
            <div className="space-y-2 sm:space-y-4 w-full pt-1">
              {skillsData.map((s, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between font-bold text-slate-800 dark:text-white text-[11px] sm:text-sm">
                    <span>{s.name}</span>
                    <span className="text-blue-600 dark:text-blue-400">{s.percentage}</span>
                  </div>
                  
                  <div className="h-2 sm:h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-200/80 dark:border-slate-700/50">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-indigo-500 h-full rounded-full transition-all duration-1000 shadow-sm shadow-blue-600/30" 
                      style={{ width: s.percentage }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* قسم الصورة الجانبية (تأخذ 5 أعمدة وارتفاع كامل متطابق مع المحتوى) */}
          <div className="col-span-5 flex">
            <div className="relative w-full rounded-xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-tr from-blue-600/20 to-indigo-500/20 p-1.5 sm:p-2 flex">
              <img 
                src={skillImgFile} 
                alt="Skill Training" 
                className="w-full h-full object-cover rounded-lg sm:rounded-[2rem]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
