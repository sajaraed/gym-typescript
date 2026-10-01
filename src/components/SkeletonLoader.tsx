import React from 'react';

export default function SkeletonLoader() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-pulse space-y-8">
      {/* البطاقة الأولى */}
      <div className="bg-slate-200 dark:bg-slate-800 p-6 rounded-3xl space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
          <div className="space-y-2 flex-1">
            <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded w-1/4"></div>
            <div className="h-3 bg-slate-300 dark:bg-slate-700 rounded w-1/6"></div>
          </div>
        </div>
        <div className="space-y-2 pt-2">
          <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded w-full"></div>
          <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded w-5/6"></div>
          <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded w-3/4"></div>
        </div>
      </div>

      {/* البطاقة الثانية */}
      <div className="bg-slate-200 dark:bg-slate-800 p-6 rounded-3xl space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
          <div className="space-y-2 flex-1">
            <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded w-1/3"></div>
            <div className="h-3 bg-slate-300 dark:bg-slate-700 rounded w-1/5"></div>
          </div>
        </div>
        <div className="space-y-2 pt-2">
          <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded w-full"></div>
          <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded w-4/5"></div>
        </div>
      </div>

      {/* صندوق الصورة أو القسم السفلي */}
      <div className="w-full h-64 bg-slate-200 dark:bg-slate-800 rounded-3xl"></div>
    </div>
  );
}