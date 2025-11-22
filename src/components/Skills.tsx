"use client";

import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded"></span>
                <span>{skillGroup.category}</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-600/10 dark:from-blue-500/5 dark:to-purple-600/5 border border-blue-200 dark:border-slate-700 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Summary
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {portfolioData.summary}
          </p>
        </div>
      </div>
    </section>
  );
}
