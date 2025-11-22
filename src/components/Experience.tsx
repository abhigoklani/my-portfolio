"use client";

import { portfolioData } from "@/data/portfolio";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My journey in software development
          </p>
        </div>

        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-500 pl-6 pb-8 relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-3.5 top-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-slate-900"></div>

              <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {exp.position}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-gray-700 dark:text-gray-300 flex items-start space-x-3"
                    >
                      <span className="text-blue-500 mt-1.5 flex-shrink-0">
                        ▸
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
