"use client";

import { portfolioData } from "@/data/portfolio";
import { Calendar, MapPin, Award } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My academic background
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow border-l-4 border-blue-500"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                    {edu.institution}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                  <Calendar className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span>
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg font-semibold">
                    GPA: {edu.gpa}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
