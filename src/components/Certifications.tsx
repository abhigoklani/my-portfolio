"use client";

import { portfolioData } from "@/data/portfolio";
import { Award, Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Credentials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Professional certifications validating my expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioData.certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Certificate Image */}
              {cert.imagePath && (
                <div className="relative h-80 w-full bg-gray-200 dark:bg-slate-700">
                  <Image
                    src={cert.imagePath}
                    alt={cert.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Certificate Details */}
              <div className="p-8 border-l-4 border-blue-500">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {cert.name}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {cert.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                    <Calendar className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span>
                      Issued: {cert.issueDate}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                    <Calendar className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span>
                      Expires: {cert.expiryDate}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mb-6 pb-6 border-b border-gray-300 dark:border-slate-700">
                  <div className="text-sm">
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      Credential ID:
                    </p>
                    <p className="text-gray-900 dark:text-white font-mono text-xs">
                      {cert.credentialId}
                    </p>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      Certification Number:
                    </p>
                    <p className="text-gray-900 dark:text-white font-mono text-xs">
                      {cert.certificationNumber}
                    </p>
                  </div>
                </div>

                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors font-medium text-sm"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
