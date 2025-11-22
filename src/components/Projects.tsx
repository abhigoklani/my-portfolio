"use client";

import { portfolioData } from "@/data/portfolio";
import { Calendar, MapPin } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Showcase of my best work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {project.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{project.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Key Highlights:
                </h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-gray-700 dark:text-gray-300 flex items-start space-x-2 text-sm"
                    >
                      <span className="text-blue-500 mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
