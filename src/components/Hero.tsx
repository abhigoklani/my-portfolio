"use client";

import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Hero() {
  const { name, title, description, email, phone, location, socials } =
    portfolioData.personal;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 pt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
                Welcome to my portfolio
              </div>
            </div>

            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  {name}
                </span>
              </h1>
              <p className="text-2xl text-gray-700 dark:text-gray-300 font-semibold">
                {title}
              </p>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {description}
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>{email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>{phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>{location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-gray-200 dark:bg-slate-800 rounded-lg hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-gray-200 dark:bg-slate-800 rounded-lg hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${email}`}
                className="w-12 h-12 flex items-center justify-center bg-gray-200 dark:bg-slate-800 rounded-lg hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all transform hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Side - Decorative */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-600/10 dark:from-blue-500/5 dark:to-purple-600/5 rounded-2xl p-8 border border-blue-200 dark:border-slate-700">
                <div className="space-y-4">
                  <div className="h-4 bg-blue-300 dark:bg-blue-800 rounded w-3/4"></div>
                  <div className="h-4 bg-blue-300 dark:bg-blue-800 rounded w-5/6"></div>
                  <div className="h-4 bg-blue-300 dark:bg-blue-800 rounded w-4/5"></div>
                  <div className="h-32 bg-blue-200 dark:bg-blue-900/30 rounded mt-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
